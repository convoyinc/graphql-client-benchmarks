/**
 * @generated SignedSource<<3629339bf2f3d9321f87307a6e46c6ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial19Query$variables = {};
export type partial19Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly activeCallsCount: boolean | null;
    readonly blockButtonText: boolean | null;
    readonly canBeDiscarded: boolean | null;
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
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly clientMessageId: string | null;
      readonly composeTime: string | null;
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
    readonly showAtMention: boolean | null;
    readonly showMarkers: boolean | null;
    readonly title: string | null;
  } | null> | null;
};
export type partial19Query = {
  response: partial19Query$data;
  variables: partial19Query$variables;
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
        "name": "hasActions",
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
            "name": "originalArrivalTime",
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
            "name": "from",
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
            "name": "threadType",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "members",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
        "name": "isBotUser",
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
        "name": "pictureUpn",
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
        "name": "title",
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
        "name": "isHidden",
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
        "name": "pinnedButtonText",
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
        "name": "longTitle",
        "storageKey": null
      },
      (v2/*: any*/),
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
        "name": "canBeDiscarded",
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
        "name": "canBeHidden",
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
        "name": "discardButtonText",
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
        "name": "isFederated",
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
        "name": "isMeeting",
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
        "name": "leaveButtonText",
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
        "name": "blockButtonText",
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
        "name": "muteButtonText",
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
        "name": "canBeLeft",
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
        "name": "otherMemberMris",
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
        "name": "isBotBlocked",
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
        "name": "isLastMessageFromMe",
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
        "name": "activeCallsCount",
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
    "name": "partial19Query",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial19Query",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "31fbd32ca98e2b1b4bcc672c3d187d5e",
    "id": null,
    "metadata": {},
    "name": "partial19Query",
    "operationKind": "query",
    "text": "query partial19Query {\n  chats {\n    hasActions\n    lastMessage {\n      originalArrivalTime\n      composeTime\n      from\n      imDisplayName\n      threadType\n      clientMessageId\n      messageType\n      version\n      type\n      content\n      __typename\n      id\n    }\n    members {\n      displayName\n      givenName\n      __typename\n      id\n    }\n    isBotUser\n    canBotBeBlocked\n    pictureUpn\n    canBePinned\n    title\n    hideIconSrc\n    isHidden\n    pictureGroup\n    pinnedButtonText\n    messagePreview\n    longTitle\n    displayName\n    isMuted\n    canBeDiscarded\n    isLastMessageText\n    canBeHidden\n    muteIconSrc\n    discardButtonText\n    favoriteIconSrc\n    isFederated\n    lastMessageTime\n    isMeeting\n    isHighImportance\n    leaveButtonText\n    hasFailedMessages\n    blockButtonText\n    favoriteButtonText\n    muteButtonText\n    hasActiveCalls\n    canBeLeft\n    showMarkers\n    otherMemberMris\n    canBeMuted\n    isBotBlocked\n    hideButtonText\n    isLastMessageFromMe\n    datatid\n    showAtMention\n    messagePreviewAria\n    activeCallsCount\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1c2d5ad82c67f298d2442b5e93a271fb";

export default node;
