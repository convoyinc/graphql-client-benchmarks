/**
 * @generated SignedSource<<287b0cedfb809aee3454bb78ea72d2ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial11Query$variables = {};
export type partial11Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly activeCallsCount: boolean | null;
    readonly canBeDiscarded: boolean | null;
    readonly canBeFavorited: boolean | null;
    readonly canBeLeft: boolean | null;
    readonly canBePinned: boolean | null;
    readonly canBotBeBlocked: boolean | null;
    readonly displayName: boolean | null;
    readonly hasActiveCalls: boolean | null;
    readonly hasFailedMessages: boolean | null;
    readonly id: string;
    readonly isBotUser: boolean | null;
    readonly isFederated: boolean | null;
    readonly isMeeting: boolean | null;
    readonly isMuted: boolean | null;
    readonly isNewChat: boolean | null;
    readonly isSfB: boolean | null;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly from: string | null;
      readonly id: string | null;
      readonly imDisplayName: string | null;
      readonly messageType: string | null;
      readonly parentMessageId: string | null;
      readonly type: string | null;
    } | null;
    readonly leaveButtonText: boolean | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly displayName: string | null;
      readonly id: string;
    } | null> | null;
    readonly messagePreviewAria: boolean | null;
    readonly muteIconSrc: boolean | null;
    readonly pictureUpn: boolean | null;
    readonly pinnedButtonText: boolean | null;
    readonly pinnedIndex: boolean | null;
    readonly plGroupKey: boolean | null;
    readonly showAtMention: boolean | null;
    readonly showMarkers: boolean | null;
  } | null> | null;
};
export type partial11Query = {
  response: partial11Query$data;
  variables: partial11Query$variables;
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
            "name": "messageType",
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
            "name": "parentMessageId",
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
        "name": "canBePinned",
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
        "name": "canBeLeft",
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
        "name": "canBeDiscarded",
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
        "name": "showMarkers",
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
        "name": "leaveButtonText",
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
        "name": "muteIconSrc",
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
        "name": "plGroupKey",
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
        "name": "pictureUpn",
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
          (v0/*: any*/),
          (v1/*: any*/)
        ],
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
      (v2/*: any*/),
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
        "name": "isBotUser",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isSfB",
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
    "name": "partial11Query",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial11Query",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "94c3c34f692260c0f2540f240eeda36f",
    "id": null,
    "metadata": {},
    "name": "partial11Query",
    "operationKind": "query",
    "text": "query partial11Query {\n  chats {\n    lastMessage {\n      imDisplayName\n      messageType\n      type\n      parentMessageId\n      from\n      __typename\n      id\n    }\n    canBePinned\n    activeCallsCount\n    canBeLeft\n    hasFailedMessages\n    canBeDiscarded\n    pinnedButtonText\n    showMarkers\n    hasActiveCalls\n    leaveButtonText\n    canBeFavorited\n    muteIconSrc\n    isMuted\n    plGroupKey\n    isNewChat\n    pictureUpn\n    members {\n      displayName\n      __typename\n      id\n    }\n    showAtMention\n    isFederated\n    displayName\n    isMeeting\n    pinnedIndex\n    messagePreviewAria\n    canBotBeBlocked\n    isBotUser\n    isSfB\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "380b94179da42649f3346b9e5f4605a3";

export default node;
