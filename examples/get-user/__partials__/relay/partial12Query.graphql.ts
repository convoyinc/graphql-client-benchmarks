/**
 * @generated SignedSource<<5774c76afcf8c5da4cfbab990949a187>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial12Query$variables = {
  userId: string;
};
export type partial12Query$data = {
  readonly user: {
    readonly __typename: "User";
    readonly displayName: string | null;
    readonly id: string;
  } | null;
};
export type partial12Query = {
  response: partial12Query$data;
  variables: partial12Query$variables;
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
    "name": "partial12Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial12Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "772cb85265e9f0c185df04fe76ff8bcc",
    "id": null,
    "metadata": {},
    "name": "partial12Query",
    "operationKind": "query",
    "text": "query partial12Query(\n  $userId: ID!\n) {\n  user(userId: $userId) {\n    displayName\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "4a54940353d40e8c7cda649816394408";

export default node;
