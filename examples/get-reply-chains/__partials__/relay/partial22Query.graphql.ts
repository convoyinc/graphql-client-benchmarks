/**
 * @generated SignedSource<<5bab1d98bce5e30f9563103b703a84f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial22Query$variables = {};
export type partial22Query$data = {
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
export type partial22Query = {
  response: partial22Query$data;
  variables: partial22Query$variables;
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
    "concreteType": "ReplyChains",
    "kind": "LinkedField",
    "name": "replyChains",
    "plural": true,
    "selections": [
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
            "name": "originalArrivalTime",
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
            "name": "content",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "key",
                "storageKey": null
              },
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EmotionUser",
                "kind": "LinkedField",
                "name": "users",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imDisplayName",
            "storageKey": null
          },
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partial22Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial22Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e200070637a832f4d200a6c9459323f9",
    "id": null,
    "metadata": {},
    "name": "partial22Query",
    "operationKind": "query",
    "text": "query partial22Query {\n  replyChains {\n    messages {\n      originalArrivalTime\n      messageType\n      from\n      content\n      emotions {\n        key\n        __typename\n        users {\n          __typename\n          id\n        }\n      }\n      imDisplayName\n      id\n      __typename\n    }\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "8638311bacac6b047c36f8a419d83f31";

export default node;
