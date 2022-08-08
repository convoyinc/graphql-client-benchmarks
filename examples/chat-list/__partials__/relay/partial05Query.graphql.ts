/**
 * @generated SignedSource<<928501296d658f525274af84de3c216e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial05Query$variables = {};
export type partial05Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly displayName: boolean | null;
    readonly hideIconSrc: boolean | null;
    readonly id: string;
    readonly isBotBlocked: boolean | null;
    readonly isLastMessageFromMe: boolean | null;
    readonly isMuted: boolean | null;
    readonly isSfB: boolean | null;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly content: string | null;
      readonly id: string | null;
      readonly imDisplayName: string | null;
      readonly type: string | null;
    } | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly id: string;
    } | null> | null;
    readonly messagePreview: boolean | null;
    readonly otherMemberMris: boolean | null;
    readonly pictureUpn: boolean | null;
    readonly pinnedIndex: boolean | null;
    readonly showMarkers: boolean | null;
  } | null> | null;
};
export type partial05Query = {
  response: partial05Query$data;
  variables: partial05Query$variables;
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
        "name": "isSfB",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pictureUpn",
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
            "name": "type",
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
        "name": "pinnedIndex",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "otherMemberMris",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "showMarkers",
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
        "name": "isMuted",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "messagePreview",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hideIconSrc",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isBotBlocked",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isLastMessageFromMe",
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
    "name": "partial05Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial05Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "24cca08e2576db7e32f0909d81290a18",
    "id": null,
    "metadata": {},
    "name": "partial05Query",
    "operationKind": "query",
    "text": "query partial05Query {\n  chats {\n    isSfB\n    pictureUpn\n    lastMessage {\n      imDisplayName\n      content\n      type\n      __typename\n      id\n    }\n    pinnedIndex\n    otherMemberMris\n    showMarkers\n    displayName\n    isMuted\n    messagePreview\n    hideIconSrc\n    isBotBlocked\n    isLastMessageFromMe\n    __typename\n    id\n    members {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a17777acbe6a4e48437164edcdbc0ec9";

export default node;
