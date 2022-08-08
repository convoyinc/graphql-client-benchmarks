/**
 * @generated SignedSource<<25b5f0ef7b6c241126c599d5af43786b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial10Query$variables = {};
export type partial10Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly blockButtonText: boolean | null;
    readonly canBeFavorited: boolean | null;
    readonly discardButtonText: boolean | null;
    readonly favoriteButtonText: boolean | null;
    readonly favoriteIconSrc: boolean | null;
    readonly hasActiveCalls: boolean | null;
    readonly hasFailedMessages: boolean | null;
    readonly id: string;
    readonly isBotBlocked: boolean | null;
    readonly isFederated: boolean | null;
    readonly isHidden: boolean | null;
    readonly isMeeting: boolean | null;
    readonly isNewChat: boolean | null;
    readonly isSfB: boolean | null;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly containerId: string | null;
      readonly content: string | null;
      readonly id: string | null;
      readonly imDisplayName: string | null;
      readonly messageType: string | null;
      readonly parentMessageId: string | null;
    } | null;
    readonly lastMessageTime: boolean | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly displayName: string | null;
      readonly givenName: string | null;
      readonly id: string;
    } | null> | null;
    readonly messagePreview: boolean | null;
    readonly messagePreviewAria: boolean | null;
    readonly pictureUpn: boolean | null;
    readonly pinnedButtonText: boolean | null;
    readonly pinnedIndex: boolean | null;
    readonly tooltipTitle: boolean | null;
  } | null> | null;
};
export type partial10Query = {
  response: partial10Query$data;
  variables: partial10Query$variables;
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
        "name": "messagePreviewAria",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "discardButtonText",
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
            "name": "parentMessageId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "messageType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "containerId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
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
        "name": "isHidden",
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
        "name": "blockButtonText",
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
            "name": "displayName",
            "storageKey": null
          },
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
        "name": "favoriteButtonText",
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
        "kind": "ScalarField",
        "name": "isNewChat",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isMeeting",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasFailedMessages",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tooltipTitle",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastMessageTime",
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
        "name": "isSfB",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pinnedButtonText",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isFederated",
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
        "name": "hasActiveCalls",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "favoriteIconSrc",
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
    "name": "partial10Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial10Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b778d0d059c295062dbe2698688d794b",
    "id": null,
    "metadata": {},
    "name": "partial10Query",
    "operationKind": "query",
    "text": "query partial10Query {\n  chats {\n    messagePreviewAria\n    discardButtonText\n    isBotBlocked\n    lastMessage {\n      imDisplayName\n      parentMessageId\n      messageType\n      containerId\n      content\n      __typename\n      id\n    }\n    isHidden\n    messagePreview\n    blockButtonText\n    members {\n      displayName\n      givenName\n      __typename\n      id\n    }\n    favoriteButtonText\n    pictureUpn\n    isNewChat\n    isMeeting\n    hasFailedMessages\n    tooltipTitle\n    lastMessageTime\n    pinnedIndex\n    isSfB\n    pinnedButtonText\n    isFederated\n    canBeFavorited\n    hasActiveCalls\n    favoriteIconSrc\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "61bf4839177314cfc55ee75a9353dc57";

export default node;
