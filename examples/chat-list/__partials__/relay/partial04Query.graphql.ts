/**
 * @generated SignedSource<<53f2575ce37eb09b4a34abecb79c8c6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial04Query$variables = {};
export type partial04Query$data = {
  readonly chats: ReadonlyArray<{
    readonly __typename: "Conversation";
    readonly activeCallsCount: boolean | null;
    readonly canBeHidden: boolean | null;
    readonly id: string;
    readonly isMuted: boolean | null;
    readonly lastMessage: {
      readonly __typename: "Message";
      readonly clientMessageId: string | null;
      readonly content: string | null;
      readonly id: string | null;
      readonly imDisplayName: string | null;
      readonly parentMessageId: string | null;
      readonly version: number | null;
    } | null;
    readonly members: ReadonlyArray<{
      readonly __typename: "User";
      readonly id: string;
    } | null> | null;
    readonly messagePreview: boolean | null;
    readonly plGroupKey: boolean | null;
    readonly showAtMention: boolean | null;
    readonly title: string | null;
  } | null> | null;
};
export type partial04Query = {
  response: partial04Query$data;
  variables: partial04Query$variables;
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
        "name": "title",
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
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "lastMessage",
        "plural": false,
        "selections": [
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
            "name": "clientMessageId",
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
        "name": "activeCallsCount",
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
        "name": "showAtMention",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "plGroupKey",
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
    "name": "partial04Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial04Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b7bb88f8e99141b0f6f75fec1538fbd8",
    "id": null,
    "metadata": {},
    "name": "partial04Query",
    "operationKind": "query",
    "text": "query partial04Query {\n  chats {\n    title\n    canBeHidden\n    lastMessage {\n      parentMessageId\n      version\n      imDisplayName\n      content\n      clientMessageId\n      __typename\n      id\n    }\n    activeCallsCount\n    isMuted\n    messagePreview\n    showAtMention\n    plGroupKey\n    __typename\n    id\n    members {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1c4842c9738a0919a1de5c6b0d4e35c";

export default node;
