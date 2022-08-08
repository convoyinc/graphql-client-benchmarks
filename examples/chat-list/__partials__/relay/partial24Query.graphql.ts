/**
 * @generated SignedSource<<7e1e061fcd3bea2dcf27a36142adaf7c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial24Query$variables = {};
export type partial24Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly activeCallsCount: boolean | null;
    readonly blockButtonText: boolean | null;
    readonly canBeDiscarded: boolean | null;
    readonly canBeFavorited: boolean | null;
    readonly canBeHidden: boolean | null;
    readonly canBeLeft: boolean | null;
    readonly canBeMuted: boolean | null;
    readonly canBePinned: boolean | null;
    readonly canBotBeBlocked: boolean | null;
    readonly datatid: boolean | null;
    readonly discardButtonText: boolean | null;
    readonly displayName: boolean | null;
    readonly favoriteButtonText: boolean | null;
    readonly favoriteIconSrc: boolean | null;
    readonly hasActions: boolean | null;
    readonly hasActiveCalls: boolean | null;
    readonly hasFailedMessages: boolean | null;
    readonly hideButtonText: boolean | null;
    readonly hideIconSrc: boolean | null;
    readonly id: string;
    readonly isBotBlocked: boolean | null;
    readonly isBotUser: boolean | null;
    readonly isFederated: boolean | null;
    readonly isHidden: boolean | null;
    readonly isHighImportance: boolean | null;
    readonly isLastMessageFromMe: boolean | null;
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
      readonly parentMessageId: string | null;
      readonly threadType: string | null;
      readonly type: string | null;
      readonly version: number | null;
    } | null;
    readonly lastMessageTime: boolean | null;
    readonly leaveButtonText: boolean | null;
    readonly longTitle: boolean | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly displayName: string | null;
      readonly givenName: string | null;
      readonly id: string;
    } | null> | null;
    readonly messagePreview: boolean | null;
    readonly messagePreviewAria: boolean | null;
    readonly muteButtonText: boolean | null;
    readonly muteIconSrc: boolean | null;
    readonly otherMemberMris: boolean | null;
    readonly pictureGroup: boolean | null;
    readonly pictureUpn: boolean | null;
    readonly pinnedButtonText: boolean | null;
    readonly pinnedIconSrc: boolean | null;
    readonly pinnedIndex: boolean | null;
    readonly plGroupKey: boolean | null;
    readonly showAtMention: boolean | null;
    readonly showMarkers: boolean | null;
    readonly title: string | null;
    readonly tooltipTitle: boolean | null;
  } | null> | null;
};
export type partial24Query = {
  response: partial24Query$data;
  variables: partial24Query$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v3 = [
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
        "name": "canBeMuted",
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
        "name": "title",
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
        "name": "messagePreviewAria",
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
        "name": "hideButtonText",
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
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "lastMessage",
        "plural": false,
        "selections": [
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
            "name": "from",
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
            "name": "clientMessageId",
            "storageKey": null
          },
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
            "name": "parentMessageId",
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
        "name": "datatid",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "favoriteIconSrc",
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
        "name": "lastMessageTime",
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
        "name": "tooltipTitle",
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
        "name": "hasFailedMessages",
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
        "name": "isFederated",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isLastMessageFromMe",
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
      (v2/*: any*/),
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
        "name": "longTitle",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasActions",
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
        "name": "discardButtonText",
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
        "name": "isMeeting",
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
        "name": "isBotBlocked",
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
        "name": "canBeDiscarded",
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
        "name": "activeCallsCount",
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
        "name": "leaveButtonText",
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
        "name": "isHighImportance",
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
          (v2/*: any*/),
          (v0/*: any*/),
          (v1/*: any*/)
        ],
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
        "name": "messagePreview",
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
        "name": "muteButtonText",
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
        "name": "pinnedIconSrc",
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
        "name": "canBeFavorited",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "blockButtonText",
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
    "name": "partial24Query",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial24Query",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "faab72b00d775282bd2154782eb4d11d",
    "id": null,
    "metadata": {},
    "name": "partial24Query",
    "operationKind": "query",
    "text": "query partial24Query {\n  chats {\n    canBeMuted\n    hasActiveCalls\n    title\n    pinnedIndex\n    messagePreviewAria\n    canBotBeBlocked\n    hideButtonText\n    otherMemberMris\n    lastMessage {\n      threadType\n      imDisplayName\n      containerId\n      from\n      messageType\n      clientMessageId\n      composeTime\n      originalArrivalTime\n      parentMessageId\n      version\n      type\n      content\n      __typename\n      id\n    }\n    datatid\n    favoriteIconSrc\n    pinnedButtonText\n    lastMessageTime\n    showMarkers\n    tooltipTitle\n    isLastMessageText\n    hasFailedMessages\n    showAtMention\n    isFederated\n    isLastMessageFromMe\n    plGroupKey\n    isOneOnOne\n    displayName\n    favoriteButtonText\n    longTitle\n    hasActions\n    isSfB\n    discardButtonText\n    canBeLeft\n    isMeeting\n    isMuted\n    isBotBlocked\n    pictureUpn\n    canBeDiscarded\n    pictureGroup\n    activeCallsCount\n    canBePinned\n    leaveButtonText\n    hideIconSrc\n    isHighImportance\n    isBotUser\n    members {\n      givenName\n      displayName\n      __typename\n      id\n    }\n    isNewChat\n    messagePreview\n    canBeHidden\n    muteButtonText\n    muteIconSrc\n    pinnedIconSrc\n    isHidden\n    canBeFavorited\n    blockButtonText\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b18dbbd79351c8729bf608629a052bd6";

export default node;
