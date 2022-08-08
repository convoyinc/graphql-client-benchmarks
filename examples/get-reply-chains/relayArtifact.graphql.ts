/**
 * @generated SignedSource<<7c703b71bb0c88b433c236a936d4335a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type operationReplyChainsQuery$variables = {};
export type operationReplyChainsQuery$data = {
  readonly replyChains: ReadonlyArray<{
    readonly __typename: "ReplyChains";
    readonly id: string;
    readonly messages: ReadonlyArray<{
      readonly __typename: "Message";
      readonly content: string | null;
      readonly emotions: ReadonlyArray<{
        readonly __typename: "Emotion";
        readonly key: string | null;
        readonly users: ReadonlyArray<{
          readonly __typename: "EmotionUser";
          readonly id: string;
        } | null> | null;
      } | null> | null;
      readonly from: string | null;
      readonly id: string | null;
      readonly imDisplayName: string | null;
      readonly messageType: string | null;
      readonly originalArrivalTime: string | null;
    } | null> | null;
  } | null> | null;
};
export type operationReplyChainsQuery = {
  response: operationReplyChainsQuery$data;
  variables: operationReplyChainsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ReplyChains",
    "kind": "LinkedField",
    "name": "replyChains",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "messages",
        "plural": true,
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
            "name": "originalArrivalTime",
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
            "concreteType": "Emotion",
            "kind": "LinkedField",
            "name": "emotions",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "key",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EmotionUser",
                "kind": "LinkedField",
                "name": "users",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
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
    "name": "operationReplyChainsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "operationReplyChainsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9a7ad6644c69ef03ba5ac990bd7c7015",
    "id": null,
    "metadata": {},
    "name": "operationReplyChainsQuery",
    "operationKind": "query",
    "text": "query operationReplyChainsQuery {\n  replyChains {\n    id\n    messages {\n      content\n      originalArrivalTime\n      imDisplayName\n      id\n      from\n      messageType\n      emotions {\n        __typename\n        key\n        users {\n          __typename\n          id\n        }\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "78bf1ff449ef010a0a64329de41691c6";

export default node;
