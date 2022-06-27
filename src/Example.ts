import { ConcreteRequest } from "relay-runtime";

export interface SingleExample {
  response: object;
}

// Each client implementation extends this with the additional properties it
// requires to execute operations.
export interface Example extends SingleExample {
  title: string;
  partials: SingleExample[];
}

export interface SingleRawExample {
  operation: string;
  variables?: object;
  response: object;
  relayArtifact?: ConcreteRequest;
}

export interface RawExample extends SingleRawExample {
  title: string;
  schema: string;
  partials: SingleRawExample[];
}
