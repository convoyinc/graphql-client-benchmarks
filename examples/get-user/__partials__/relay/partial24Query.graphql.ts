/**
 * @generated SignedSource<<cb853d563c08e614d178e464d132b802>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial24Query$variables = {
  userId: string;
};
export type partial24Query$data = {
  readonly user: {
    readonly __typename: "User";
    readonly displayName: string | null;
    readonly id: string;
  } | null;
};
export type partial24Query = {
  response: partial24Query$data;
  variables: partial24Query$variables;
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
        "name": "displayName",
        "storageKey": null
      },
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
    "name": "partial24Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial24Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5d0543dcb35499ef951a3335263dd788",
    "id": null,
    "metadata": {},
    "name": "partial24Query",
    "operationKind": "query",
    "text": "query partial24Query(\n  $userId: ID!\n) {\n  user(userId: $userId) {\n    displayName\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "1dd359c2f5cab8063fbff7a38c97389c";

export default node;
