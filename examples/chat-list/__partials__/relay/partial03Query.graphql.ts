/**
 * @generated SignedSource<<16f2d8f61e693ca365024f9efcc9ca0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial03Query$variables = {};
export type partial03Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly canBeDiscarded: boolean | null;
    readonly canBeFavorited: boolean | null;
    readonly hideButtonText: boolean | null;
    readonly id: string;
    readonly isOneOnOne: boolean;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly id: string | null;
      readonly threadType: string | null;
      readonly type: string | null;
    } | null;
    readonly longTitle: boolean | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly givenName: string | null;
      readonly id: string;
    } | null> | null;
    readonly pinnedIconSrc: boolean | null;
  } | null> | null;
};
export type partial03Query = {
  response: partial03Query$data;
  variables: partial03Query$variables;
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
        "name": "longTitle",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hideButtonText",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canBeDiscarded",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canBeFavorited",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isOneOnOne",
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
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "threadType",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "members",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "givenName",
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
        "name": "pinnedIconSrc",
        "storageKey": null
      },
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partial03Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial03Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "43c6ed2dbdb85f6b0359e3de0edd2088",
    "id": null,
    "metadata": {},
    "name": "partial03Query",
    "operationKind": "query",
    "text": "query partial03Query {\n  chats {\n    longTitle\n    hideButtonText\n    canBeDiscarded\n    canBeFavorited\n    isOneOnOne\n    lastMessage {\n      type\n      threadType\n      __typename\n      id\n    }\n    members {\n      givenName\n      __typename\n      id\n    }\n    pinnedIconSrc\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c15e841fc9bbdde17efae393d0a4d49d";

export default node;
