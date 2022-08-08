/**
 * @generated SignedSource<<b238d0beb9c2ce358e0ce710c289817b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial13Query$variables = {};
export type partial13Query$data = {
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
export type partial13Query = {
  response: partial13Query$data;
  variables: partial13Query$variables;
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
            "name": "content",
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
            "name": "messageType",
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
    "name": "partial13Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial13Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "751435296f29fa9ffb624c978baa68ba",
    "id": null,
    "metadata": {},
    "name": "partial13Query",
    "operationKind": "query",
    "text": "query partial13Query {\n  replyChains {\n    messages {\n      originalArrivalTime\n      content\n      from\n      emotions {\n        key\n        __typename\n        users {\n          __typename\n          id\n        }\n      }\n      messageType\n      imDisplayName\n      id\n      __typename\n    }\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "08df409afd56d44e8ac8d203cd2d127e";

export default node;
