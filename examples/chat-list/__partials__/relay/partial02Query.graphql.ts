/**
 * @generated SignedSource<<3baeb2fb22f68a07a72b768fd1757145>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial02Query$variables = {};
export type partial02Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly datatid: boolean | null;
    readonly id: string;
    readonly isBotUser: boolean | null;
    readonly isHighImportance: boolean | null;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly content: string | null;
      readonly from: string | null;
      readonly id: string | null;
    } | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly id: string;
    } | null> | null;
    readonly otherMemberMris: boolean | null;
  } | null> | null;
};
export type partial02Query = {
  response: partial02Query$data;
  variables: partial02Query$variables;
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
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "lastMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "from",
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
        "name": "isBotUser",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "datatid",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isHighImportance",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "otherMemberMris",
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
    "name": "partial02Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial02Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "10847a7f649e8b6de2fed2201be41f4c",
    "id": null,
    "metadata": {},
    "name": "partial02Query",
    "operationKind": "query",
    "text": "query partial02Query {\n  chats {\n    lastMessage {\n      content\n      from\n      __typename\n      id\n    }\n    isBotUser\n    datatid\n    isHighImportance\n    otherMemberMris\n    __typename\n    id\n    members {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ffdf7629f953ffa3b6ce8d5a936cae0";

export default node;
