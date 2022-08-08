/**
 * @generated SignedSource<<b7ef5dcacfcfd0f7f2c3153ccbff4765>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial10Query$variables = {
  userId: string;
};
export type partial10Query$data = {
  readonly user: {
    readonly __typename: "User";
    readonly displayName: string | null;
    readonly id: string;
  } | null;
};
export type partial10Query = {
  response: partial10Query$data;
  variables: partial10Query$variables;
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
    "name": "partial10Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial10Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0f40e5cf958e606440959ec55a227623",
    "id": null,
    "metadata": {},
    "name": "partial10Query",
    "operationKind": "query",
    "text": "query partial10Query(\n  $userId: ID!\n) {\n  user(userId: $userId) {\n    displayName\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "2c4698c2bfaffae47fcddd775335ff0b";

export default node;
