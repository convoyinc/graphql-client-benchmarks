import * as graphql from 'graphql';
import * as graphqlCompiler from 'graphql-compiler';
import * as relayCompiler from 'relay-compiler';
import * as relayRuntime from 'relay-runtime';
import packageInfo from 'relay-runtime/package.json';

import { Client, SingleExample, SingleRawExample, Observer } from '../src';

declare module 'relay-runtime' {
  // https://github.com/facebook/relay/blob/v1.6.0/packages/relay-runtime/query/RelayModernGraphQLTag.js#L68
  export function getRequest(node: GraphQLTaggedNode): RequestNode;
  // https://github.com/facebook/relay/blob/v1.6.0/packages/relay-runtime/store/RelayModernOperationSelector.js#L28
  export function createOperationSelector(
    request: RequestNode,
    variables: Variables,
    operationFromBatch?: ConcreteOperationDefinition,
  ): OperationSelector;
}

// https://github.com/facebook/relay/blob/v1.6.0/packages/relay-compiler/bin/RelayCompilerBin.js#L208-L214
const TRANSFORMS = {
  commonTransforms: relayCompiler.IRTransforms.commonTransforms,
  codegenTransforms: relayCompiler.IRTransforms.codegenTransforms,
  fragmentTransforms: relayCompiler.IRTransforms.fragmentTransforms,
  printTransforms: relayCompiler.IRTransforms.printTransforms,
  queryTransforms: relayCompiler.IRTransforms.queryTransforms,
};

class RelayObserver implements Observer {
  private _mostRecentResult?: any = null;
  private _disposable: relayRuntime.Disposable;

  constructor(client: relayRuntime.Environment, operation: relayRuntime.OperationSelector) {
    const initialSnapshot = client.lookup(operation.root);
    this._onNewSnapshot(initialSnapshot);
    this._disposable = client.subscribe(initialSnapshot, this._onNewSnapshot);
  }

  _onNewSnapshot = (snapshot: relayRuntime.Snapshot) => {
    this._mostRecentResult = {
      data: snapshot.data,
    };
  };

  unsubscribe() {
    return this._disposable.dispose();
  }

  mostRecentResult() {
    return this._mostRecentResult;
  }
}

interface RelayExample extends SingleExample {
  operation: relayRuntime.OperationSelector;
}

export class Relay extends Client {
  static metadata = {
    name: `Relay (v${(packageInfo as any).version})`,
  };

  private _client = new relayRuntime.Environment({
    network: relayRuntime.Network.create(async () => {
      throw new Error(`end-to-end queries are not supported`);
    }),
    store: new relayRuntime.Store(new relayRuntime.RecordSource()),
  });

  transformRawExample(rawExample: SingleRawExample, schema: string): RelayExample {
    const schemaAst = graphql.buildASTSchema(graphql.parse(schema));
    let context = new graphqlCompiler.CompilerContext(schemaAst);
    // In some queries, we leverage Hermes' @static directive; but Relay doesn't
    // like unknown directives. Quick hack to remove it.
    const scrubbedOperation = rawExample.operation.replace(/@static/g, '');
    context = context.addAll(graphqlCompiler.Parser.parse(schemaAst, scrubbedOperation));
    const artifacts = relayCompiler.compileRelayArtifacts(context, TRANSFORMS) as any[];

    const requests = artifacts.filter(a => a.kind !== 'Fragment');
    if (requests.length !== 1) {
      throw new Error(`Expected the query document to contain only one operation`);
    }
    const request = relayRuntime.getRequest(requests[0]);
    const operation = relayRuntime.createOperationSelector(request, rawExample.variables);

    return {
      operation,
      response: rawExample.response,
    };
  }

  async read({ operation }: RelayExample) {
    const { data } = this._client.lookup(operation.root);
    return data ? { data } : null;
  }

  async write({ operation, response }: RelayExample) {
    this._client.commitPayload(operation, response);
  }

  observe({ operation }: RelayExample) {
    return new RelayObserver(this._client, operation);
  }
}
