/**
 * @generated SignedSource<<c7755029c8dfb2f4ce3e1186396101c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Availability = "Available" | "AvailableIdle" | "Away" | "BeRightBack" | "Busy" | "BusyIdle" | "DoNotDisturb" | "Offline" | "PresenceUnknown" | "%future added value";
export type partial01Query$variables = {
  userId: string;
};
export type partial01Query$data = {
  readonly presence: {
    readonly __typename: "Presence";
    readonly availability: Availability | null;
    readonly id: string | null;
  } | null;
};
export type partial01Query = {
  response: partial01Query$data;
  variables: partial01Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Presence",
    "kind": "LinkedField",
    "name": "presence",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "availability",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "partial01Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial01Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "91915bf5f64062fedc3889564f557594",
    "id": null,
    "metadata": {},
    "name": "partial01Query",
    "operationKind": "query",
    "text": "query partial01Query(\n  $userId: ID!\n) {\n  presence(userId: $userId) {\n    availability\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f3328f4ec734004127ab0e4ae1bf9f84";

export default node;
