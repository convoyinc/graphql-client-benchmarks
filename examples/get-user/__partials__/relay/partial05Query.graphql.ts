/**
 * @generated SignedSource<<0f7cd3f3d5a7a2c8ae2fa63e04ca93a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial05Query$variables = {
  userId: string;
};
export type partial05Query$data = {
  readonly user: {
    readonly __typename: "User";
    readonly displayName: string | null;
    readonly id: string;
  } | null;
};
export type partial05Query = {
  response: partial05Query$data;
  variables: partial05Query$variables;
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
    "name": "partial05Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial05Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e8487550f2677255d6101dd7b4feecc8",
    "id": null,
    "metadata": {},
    "name": "partial05Query",
    "operationKind": "query",
    "text": "query partial05Query(\n  $userId: ID!\n) {\n  user(userId: $userId) {\n    displayName\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "5e5eef511036c42ce715ce0c8cacd41a";

export default node;
