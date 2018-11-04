import {
  getOperationDefinitionOrDie,
  getFragmentDefinitions,
  createFragmentMap,
  FragmentMap,
} from 'apollo-utilities';
import fastRandom from 'fast-random';
import graphqlTag from 'graphql-tag';
import { print } from 'graphql/language/printer'; // eslint-disable-line import/no-internal-modules
import { DocumentNode, SelectionSetNode, FieldNode, OperationDefinitionNode } from 'graphql';

import { SingleRawExample } from './Example';

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
 * Create 8 partial instances of the operation, by selecting a linearly
 * decreasing % of fields.
 *
 * E.g. the first example will have 100% of the fields, the second 87.5%, and so
 * on.
 */
export function generatePartialExamples(example: SingleRawExample): SingleRawExample[] {
  const document = graphqlTag(example.operation);
  const operation = getOperationDefinitionOrDie(document);
  const leaves = findLeafPaths(document);
  const random = fastRandom(SEED);

  const partials: SingleRawExample[] = [];
  for (let i = NUM_EXAMPLES; i > 0; i--) {
    const selectPercent = i / NUM_EXAMPLES;
    const partialLeaves = selectLeaves(random, leaves, selectPercent);
    const partialSelectionSet = selectionSetFromLeaves(partialLeaves);
    const partialOperation: OperationDefinitionNode = {
      kind: 'OperationDefinition',
      name: { kind: 'Name', value: `partial${i}` },
      selectionSet: partialSelectionSet,
      directives: operation.directives,
      operation: operation.operation,
      // TODO: Remove unused variables.
      variableDefinitions: operation.variableDefinitions,
    };

    partials.push({
      operation: print(partialOperation),
      variables: example.variables,
      response: reduceResponse(partialSelectionSet, example.response),
    });
  }

  return partials;
}

function findLeafPaths(document: DocumentNode) {
  const leaves: FieldNode[][] = [];
  const operation = getOperationDefinitionOrDie(document);
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

  return { kind: 'SelectionSet', selections };
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
      kind: 'Field',
      alias: top.alias,
      name: top.name,
      arguments: top.arguments,
      directives: top.directives,
      selectionSet: {
        kind: 'SelectionSet',
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
