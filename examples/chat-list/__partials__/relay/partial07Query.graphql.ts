/**
 * @generated SignedSource<<b6ccac803731997168230e283637bd52>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial07Query$variables = {};
export type partial07Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly activeCallsCount: boolean | null;
    readonly canBeLeft: boolean | null;
    readonly canBeMuted: boolean | null;
    readonly displayName: boolean | null;
    readonly favoriteButtonText: boolean | null;
    readonly favoriteIconSrc: boolean | null;
    readonly hasActions: boolean | null;
    readonly hasActiveCalls: boolean | null;
    readonly hasFailedMessages: boolean | null;
    readonly id: string;
    readonly isBotBlocked: boolean | null;
    readonly isFederated: boolean | null;
    readonly isLastMessageFromMe: boolean | null;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly composeTime: string | null;
      readonly from: string | null;
      readonly id: string | null;
    } | null;
    readonly leaveButtonText: boolean | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly id: string;
    } | null> | null;
    readonly muteIconSrc: boolean | null;
    readonly pictureGroup: boolean | null;
    readonly pinnedIconSrc: boolean | null;
    readonly plGroupKey: boolean | null;
    readonly showMarkers: boolean | null;
  } | null> | null;
};
export type partial07Query = {
  response: partial07Query$data;
  variables: partial07Query$variables;
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
        "name": "activeCallsCount",
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
        "name": "displayName",
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
        "name": "pinnedIconSrc",
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
        "name": "pictureGroup",
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
        "name": "canBeLeft",
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
        "name": "isLastMessageFromMe",
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
        "name": "canBeMuted",
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
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "lastMessage",
        "plural": false,
        "selections": [
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
            "name": "composeTime",
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
        "name": "leaveButtonText",
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
        "name": "isFederated",
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
    "name": "partial07Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial07Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "45412db0dd9c8dee424d6aa8b78b4ce9",
    "id": null,
    "metadata": {},
    "name": "partial07Query",
    "operationKind": "query",
    "text": "query partial07Query {\n  chats {\n    activeCallsCount\n    hasActions\n    displayName\n    plGroupKey\n    pinnedIconSrc\n    favoriteIconSrc\n    pictureGroup\n    hasFailedMessages\n    canBeLeft\n    favoriteButtonText\n    isLastMessageFromMe\n    showMarkers\n    hasActiveCalls\n    canBeMuted\n    muteIconSrc\n    lastMessage {\n      from\n      composeTime\n      __typename\n      id\n    }\n    leaveButtonText\n    isBotBlocked\n    isFederated\n    __typename\n    id\n    members {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "903fdbbb33bdbec9200d92d60ee89faa";

export default node;
