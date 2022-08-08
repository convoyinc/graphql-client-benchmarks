/**
 * @generated SignedSource<<c89358d101dde3c8b8bf337c7597a157>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type operationQuery$variables = {
  userId: string;
};
export type operationQuery$data = {
  readonly user: {
    readonly __typename: "User";
    readonly displayName: string | null;
    readonly id: string;
  } | null;
};
export type operationQuery = {
  response: operationQuery$data;
  variables: operationQuery$variables;
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
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
    "name": "operationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "operationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0f1f4558d7940066106bf63cda747b68",
    "id": null,
    "metadata": {},
    "name": "operationQuery",
    "operationKind": "query",
    "text": "query operationQuery(\n  $userId: ID!\n) {\n  user(userId: $userId) {\n    id\n    displayName\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "b390298cdd748e422cb28178350b61a7";

export default node;
