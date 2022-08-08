/**
 * @generated SignedSource<<3b24c57eced1e235994fb3d28c531fe0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial15Query$variables = {};
export type partial15Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly canBeDiscarded: boolean | null;
    readonly canBeFavorited: boolean | null;
    readonly canBeHidden: boolean | null;
    readonly canBeLeft: boolean | null;
    readonly canBeMuted: boolean | null;
    readonly canBePinned: boolean | null;
    readonly canBotBeBlocked: boolean | null;
    readonly favoriteIconSrc: boolean | null;
    readonly hasFailedMessages: boolean | null;
    readonly id: string;
    readonly isBotUser: boolean | null;
    readonly isFederated: boolean | null;
    readonly isHighImportance: boolean | null;
    readonly isLastMessageText: boolean | null;
    readonly isMeeting: boolean | null;
    readonly isMuted: boolean | null;
    readonly isNewChat: boolean | null;
    readonly isOneOnOne: boolean;
    readonly isSfB: boolean | null;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly clientMessageId: string | null;
      readonly composeTime: string | null;
      readonly containerId: string | null;
      readonly content: string | null;
      readonly from: string | null;
      readonly id: string | null;
      readonly imDisplayName: string | null;
      readonly messageType: string | null;
      readonly originalArrivalTime: string | null;
      readonly threadType: string | null;
      readonly type: string | null;
      readonly version: number | null;
    } | null;
    readonly longTitle: boolean | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly displayName: string | null;
      readonly givenName: string | null;
      readonly id: string;
    } | null> | null;
    readonly messagePreviewAria: boolean | null;
    readonly muteButtonText: boolean | null;
    readonly muteIconSrc: boolean | null;
    readonly pictureGroup: boolean | null;
    readonly pictureUpn: boolean | null;
    readonly pinnedIconSrc: boolean | null;
    readonly pinnedIndex: boolean | null;
    readonly plGroupKey: boolean | null;
    readonly showAtMention: boolean | null;
    readonly showMarkers: boolean | null;
  } | null> | null;
};
export type partial15Query = {
  response: partial15Query$data;
  variables: partial15Query$variables;
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
        "name": "pinnedIconSrc",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canBeHidden",
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
            "name": "composeTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "originalArrivalTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "version",
            "storageKey": null
          },
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "clientMessageId",
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
            "name": "from",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "threadType",
            "storageKey": null
          },
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
        "name": "pictureGroup",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isLastMessageText",
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
        "name": "hasFailedMessages",
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
        "name": "isMeeting",
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
        "name": "isMuted",
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
        "name": "canBeMuted",
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
        "name": "canBeLeft",
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
        "name": "muteButtonText",
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
        "name": "showAtMention",
        "storageKey": null
      },
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
        "name": "muteIconSrc",
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
        "name": "canBePinned",
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
        "name": "plGroupKey",
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
        "kind": "ScalarField",
        "name": "canBotBeBlocked",
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
    "name": "partial15Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial15Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0333af59a361790d0319cab6dce30b11",
    "id": null,
    "metadata": {},
    "name": "partial15Query",
    "operationKind": "query",
    "text": "query partial15Query {\n  chats {\n    longTitle\n    pinnedIconSrc\n    canBeHidden\n    pictureUpn\n    lastMessage {\n      composeTime\n      originalArrivalTime\n      version\n      type\n      containerId\n      content\n      clientMessageId\n      messageType\n      from\n      threadType\n      imDisplayName\n      __typename\n      id\n    }\n    pictureGroup\n    isLastMessageText\n    pinnedIndex\n    hasFailedMessages\n    canBeFavorited\n    isMeeting\n    members {\n      displayName\n      givenName\n      __typename\n      id\n    }\n    isMuted\n    isSfB\n    canBeMuted\n    isBotUser\n    canBeLeft\n    isHighImportance\n    muteButtonText\n    isFederated\n    showAtMention\n    messagePreviewAria\n    muteIconSrc\n    canBeDiscarded\n    canBePinned\n    showMarkers\n    plGroupKey\n    isOneOnOne\n    canBotBeBlocked\n    isNewChat\n    favoriteIconSrc\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc1f18888dd18485238fb85727129cc4";

export default node;
