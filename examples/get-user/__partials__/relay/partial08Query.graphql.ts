/**
 * @generated SignedSource<<9b5dd5782a2847501f952cdeceed189c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial08Query$variables = {
  userId: string;
};
export type partial08Query$data = {
  readonly user: {
    readonly __typename: "User";
    readonly displayName: string | null;
    readonly id: string;
  } | null;
};
export type partial08Query = {
  response: partial08Query$data;
  variables: partial08Query$variables;
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
    "name": "partial08Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial08Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "50239471d9fe07eb155cb8d19d89d947",
    "id": null,
    "metadata": {},
    "name": "partial08Query",
    "operationKind": "query",
    "text": "query partial08Query(\n  $userId: ID!\n) {\n  user(userId: $userId) {\n    displayName\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "709c4e1d569d9fd378178d47ca8a366d";

export default node;
