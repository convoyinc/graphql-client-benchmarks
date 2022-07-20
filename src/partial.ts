import {
  getOperationDefinition,
  getFragmentDefinitions,
  createFragmentMap,
  FragmentMap,
  // eslint-disable-next-line import/no-internal-modules
} from '@apollo/client/utilities';
import fastRandom from 'fast-random';
import graphqlTag from 'graphql-tag';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { print } from 'graphql/language/printer'; // eslint-disable-line import/no-internal-modules
import { DocumentNode, SelectionSetNode, FieldNode, OperationDefinitionNode, Kind } from 'graphql';

import { RawExample, SingleExample, SingleRawExample } from './Example';

// Use a consistent seed for consistent partials for a given query.
const SEED = 12345678;

const NUM_EXAMPLES = 25;

interface OnlyFieldNode extends FieldNode {
  selectionSet?: FieldSetNode;
}

interface FieldSetNode extends SelectionSetNode {
  selections: OnlyFieldNode[];
}

/**
 * Create NUM_EXAMPLES partial instances of the input query by selecting a linearly
 * decreasing % of fields.
 *
 * This is different to the generatePartialExamples(example: SingleRawExample): SingleRawExample[] function bc it works with string queries instead of operations.
 *
 * @param {string} query - GraphQL query in a string format
 * @returns {string[]} - An array of modified partial GraphQL queries in a string format
 */
export function generatePartialExamplesFromQuery(query: string): string[] {
  const document = graphqlTag(query);
  const operation = getOperationDefinition(document);
  const leaves = findLeafPaths(document);
  const random = fastRandom(SEED);

  const partials: string[] = [];
  for (let i = NUM_EXAMPLES; i > 0; i--) {
    const selectPercent = i / NUM_EXAMPLES;
    const partialLeaves = selectLeaves(random, leaves, selectPercent);
    const partialSelectionSet = selectionSetFromLeaves(partialLeaves);
    const partialOperation: OperationDefinitionNode = {
      kind: Kind.OPERATION_DEFINITION,
      name: { kind: Kind.NAME, value: `partial${i < 10 ? '0' + String(i) : i}Query` },
      selectionSet: partialSelectionSet,
      directives: operation.directives,
      operation: operation.operation,
      // TODO: Remove unused variables.
      variableDefinitions: operation.variableDefinitions,
    };

    partials.push(print(partialOperation));
  }

  return partials;
}

/**
 * Take the object of raw partials from the example provided and structure them in a nice way so the tool can work with them
 *
 * @param {RawExample} example - example created from the root query which has the operation, variables and response
 * @returns {SingleRawExample[]}
 */
export function restructurePartialExamples(example: RawExample): SingleRawExample[] {
  const partials: SingleRawExample[] = [];
  Object.values(example.rawPartials).forEach(partial => {
    const document = graphqlTag(partial.operation);
    const leaves = findLeafPaths(document);
    const partialSelectionSet = selectionSetFromLeaves(leaves);

    partials.push({
      operation: partial.operation,
      relayArtifact: partial.relayArtifact,
      variables: example.variables,
      response: reduceResponse(partialSelectionSet, example.response),
    });
  });

  partials.sort().reverse();

  return partials;
}

function findLeafPaths(document: DocumentNode) {
  const leaves: FieldNode[][] = [];
  const operation = getOperationDefinition(document);
  const fragmentMap = createFragmentMap(getFragmentDefinitions(document));
  walkSelectionSetForLeaves(leaves, fragmentMap, operation.selectionSet, []);

  return leaves;
}

function walkSelectionSetForLeaves(
  leaves: FieldNode[][],
  fragmentMap: FragmentMap,
  selectionSet: SelectionSetNode,
  parents: FieldNode[],
) {
  for (const selection of selectionSet.selections) {
    if (selection.kind === 'Field') {
      const path = [...parents, selection];
      if (selection.selectionSet) {
        // we've found a branch node.
        walkSelectionSetForLeaves(leaves, fragmentMap, selection.selectionSet, path);
      } else {
        // We've found a leaf.
        leaves.push(path);
      }
    } else if (selection.kind === 'FragmentSpread') {
      const fragment = fragmentMap[selection.name.value];
      if (!fragment) {
        throw new Error(`Expected fragment ${selection.name.value} to be defined`);
      }

      walkSelectionSetForLeaves(leaves, fragmentMap, fragment.selectionSet, parents);
    }
  }
}

function selectLeaves(random: fastRandom.FastRandomGenerator, leaves: FieldNode[][], selectPercent: number) {
  const toKeep = [];
  const toShuffle = [];
  for (const leaf of leaves) {
    const fieldName = leaf[leaf.length - 1].name.value;
    // To appease Apollo caches, preserve entity identities.
    if (fieldName === 'id' || fieldName === '__typename') {
      toKeep.push(leaf);
    } else {
      toShuffle.push(leaf);
    }
  }

  const shuffled = [];
  while (toShuffle.length) {
    const index = Math.floor(random.nextFloat() * toShuffle.length);
    const leaf = toShuffle.splice(index, 1)[0];
    shuffled.push(leaf);
  }

  const toSelect = Math.ceil(selectPercent * leaves.length);
  return shuffled.slice(0, toSelect).concat(toKeep);
}

function selectionSetFromLeaves(leaves: FieldNode[][]): FieldSetNode {
  const selections: OnlyFieldNode[] = [];
  for (const leaf of leaves) {
    mergeLeaf(selections, leaf);
  }

  return { kind: Kind.SELECTION_SET, selections };
}

function mergeLeaf(selections: OnlyFieldNode[], leaf: FieldNode[]) {
  const [top, ...remainder] = leaf;

  // last field? we're by definition new to the selections
  if (leaf.length == 1) {
    selections.push(top as OnlyFieldNode);
    return;
  }

  let ancestor = selections.find(s => s.name.value === top.name.value);
  if (!ancestor) {
    ancestor = {
      kind: Kind.FIELD,
      alias: top.alias,
      name: top.name,
      arguments: top.arguments,
      directives: top.directives,
      selectionSet: {
        kind: Kind.SELECTION_SET,
        selections: [],
      },
    };

    selections.push(ancestor);
  }

  mergeLeaf(ancestor.selectionSet.selections, remainder);
}

function reduceResponse(selectionSet: FieldSetNode, response: object | any[]) {
  if (!response) return response;
  if (Array.isArray(response)) {
    return response.map(v => reduceResponse(selectionSet, v));
  }

  const reducedResponse = {};
  for (const selection of selectionSet.selections) {
    const key = selection.alias ? selection.alias.value : selection.name.value;
    if (selection.selectionSet) {
      reducedResponse[key] = reduceResponse(selection.selectionSet, response[key]);
    } else {
      reducedResponse[key] = response[key];
    }
  }

  return reducedResponse;
}


export function populateResponse(response: object) {
  if (!response) return response;
  const modifiedResponse = _.cloneDeep(response);

  // Create a Queue and add our initial node in it
  let q = [];
  let explored = new Set();
  q.push(modifiedResponse);

  // Mark the first node as explored explored.
  explored.add(modifiedResponse);

  // We'll continue till our queue gets empty
  while (!(q.length == 0)) {
    let t = q.shift();

    // Check every node we visit if it is an array, and if yes, populate
    // with 100 copies of first item.
    if (Array.isArray(t) && t.length > 0) {
      for (let x = t.length; x < 100; x++) {
        t.push(_.cloneDeep({ ...t[0], id: uuidv4() }));
      }
    }

    // 1. In the edges object, we search for nodes this node is directly connected to.
    // 2. We filter out the nodes that have already been explored.
    // 3. Then we mark each unexplored node as explored and add it to the queue.
    let edges = typeof t == 'object' ? Object.keys(t) : t;
    Array.isArray(edges) &&
      edges.filter(n => !explored.has(t[n])).forEach(n => {
        explored.add(t[n]);
        q.push(t[n]);
      });
  }

  return modifiedResponse;
}
