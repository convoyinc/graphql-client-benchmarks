import { DocumentNode } from "graphql";
import { ConcreteRequest } from "relay-runtime";

export interface SingleExample {
  response: object;  
}

// Each client implementation extends this with the additional properties it
// requires to execute operations.
export interface Example extends SingleExample {
  title: string;  
  partials: Array<SingleExample>;
  fragment?: RawFragment;
}

export interface SingleRawExample {
  operation: string;
  variables?: object;
  response: object;
  relayArtifact?: ConcreteRequest;
  fragment?: RawFragment;
}

export interface RawFragment {
  operation: string;
  fragmentPool: Array<Fragment>;
}

export interface Fragment {
  typename: string;
  id: string;
  response: FragmentResponse
}

export interface FragmentExample extends Omit<RawFragment, "operation"> {
  operation: DocumentNode;
}

export interface FragmentResponse {
  [key: string]: any;
  id: string;
}

export interface RawExample extends SingleRawExample {
  title: string;
  schema: string;
  partials: Array<SingleRawExample>;
  rawPartials?: Array<RawPartial>;
}

export interface RawPartial {
  relayArtifact: ConcreteRequest;
  operation: string;
}