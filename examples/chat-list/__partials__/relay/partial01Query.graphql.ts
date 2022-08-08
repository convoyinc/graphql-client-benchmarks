/**
 * @generated SignedSource<<943d3792e5aee39bb986fd96a12ce688>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial01Query$variables = {};
export type partial01Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly canBeLeft: boolean | null;
    readonly discardButtonText: boolean | null;
    readonly id: string;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly id: string | null;
      readonly imDisplayName: string | null;
    } | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly id: string;
    } | null> | null;
  } | null> | null;
};
export type partial01Query = {
  response: partial01Query$data;
  variables: partial01Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Conversation",
    "kind": "LinkedField",
    "name": "chats",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canBeLeft",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "lastMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imDisplayName",
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "discardButtonText",
        "storageKey": null
      },
      (v0/*: any*/),
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "members",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partial01Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial01Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d7c068c5ba3c27d81fe1ea1a52b5471f",
    "id": null,
    "metadata": {},
    "name": "partial01Query",
    "operationKind": "query",
    "text": "query partial01Query {\n  chats {\n    canBeLeft\n    lastMessage {\n      imDisplayName\n      __typename\n      id\n    }\n    discardButtonText\n    __typename\n    id\n    members {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3a24e33d71666a9226406a1150b3b3d8";

export default node;
