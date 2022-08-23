import packageInfo from 'relay-runtime/package.json';

import type { 
  Snapshot,
  Disposable,
  OperationDescriptor,
  ConcreteRequest,
} from 'relay-runtime';
import {
  Environment,
  Network,
  Store,
  RecordSource,
  getRequest,
  createOperationDescriptor,
  createReaderSelector
} from 'relay-runtime'

import { Client, SingleExample, Observer, RawExample, ReadResult, Fragment, RawFragment } from '../src';

class RelayObserver implements Observer {
  private _mostRecentResult?: any = null;
  private _disposable: Disposable;

  constructor(client: Environment, operation: OperationDescriptor) {
    const initialSnapshot = client.lookup(operation.fragment);
    this._onNewSnapshot(initialSnapshot);
    this._disposable = client.subscribe(initialSnapshot, this._onNewSnapshot);
  }

  _onNewSnapshot = (snapshot: Snapshot) => {
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

interface RelayFragmentExample extends Omit<RawFragment, "operation"> {
  operation: OperationDescriptor;  
}

interface RelayExample extends SingleExample {
  operation: OperationDescriptor;
  variables?: object;
  relayArtifact: ConcreteRequest;
  fragment?: RelayFragmentExample;
}

export class Relay extends Client {
  static metadata = {
    name: `Relay (v${(packageInfo as any).version})`,
  };

  private _client = new Environment({
    network: Network.create(async () => {
      throw new Error(`end-to-end queries are not supported`);
    }),
    store: new Store(new RecordSource()),
  });

  transformRawExample(rawExample: RawExample): RelayExample {
    const request = getRequest(rawExample.relayArtifact);
    const operation = createOperationDescriptor(request, rawExample.variables);

    let fragment: RelayFragmentExample; 
    if ("fragment" in rawExample) {
      const fragmentOwnerRequest = getRequest(rawExample.fragment.ownerRelayArtifact);
      const fragmentOwnerOperation = createOperationDescriptor(fragmentOwnerRequest, rawExample.variables)
      
      fragment = {
        operation: fragmentOwnerOperation,
        relayArtifact: rawExample.fragment.relayArtifact,
        fragmentPath: rawExample.fragment.fragmentPath
      }     
    }
    
    return {
      operation,
      response: rawExample.response,
      variables: rawExample.variables,
      relayArtifact: rawExample.relayArtifact,
      fragment
    };
  }

  async read({ operation }: RelayExample) {    
    const res = this._client.lookup(operation.fragment);
    return (!res.data || res.isMissingData) ? { data: null } : { data: res.data };
  }
  
  async readFragment({ fragment, variables }: RelayExample, fragmentInstance: Fragment): Promise<ReadResult<object>> {
    const selector = createReaderSelector(fragment.relayArtifact, fragmentInstance.id, variables, fragment.operation.request)
    const res = this._client.lookup(selector);
    return (!res.data || res.isMissingData) ? { data: null } : { data: res.data };
  }

  async write({ operation, response }: RelayExample) {
    this._client.commitPayload(operation, response);
  }

  observe({ operation }: RelayExample) {
    return new RelayObserver(this._client, operation);
  }
}
