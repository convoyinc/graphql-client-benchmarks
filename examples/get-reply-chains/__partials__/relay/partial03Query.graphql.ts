/**
 * @generated SignedSource<<1df865b31fcb60dd94f9bd26e13d8a7d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial03Query$variables = {};
export type partial03Query$data = {
  readonly replyChains: ReadonlyArray<{
    readonly __typename: "ReplyChains";
    readonly id: string;
    readonly messages: ReadonlyArray<{
      readonly __typename: "Message";
      readonly emotions: ReadonlyArray<{
        readonly __typename: "Emotion";
        readonly users: ReadonlyArray<{
          readonly __typename: "EmotionUser";
          readonly id: string;
        } | null> | null;
      } | null> | null;
      readonly from: string | null;
      readonly id: string | null;
      readonly messageType: string | null;
    } | null> | null;
  } | null> | null;
};
export type partial03Query = {
  response: partial03Query$data;
  variables: partial03Query$variables;
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
          (v0/*: any*/),
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
    "name": "partial03Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial03Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f6e9305fce2056d73d8fd6d71f7f6318",
    "id": null,
    "metadata": {},
    "name": "partial03Query",
    "operationKind": "query",
    "text": "query partial03Query {\n  replyChains {\n    messages {\n      from\n      messageType\n      id\n      emotions {\n        __typename\n        users {\n          __typename\n          id\n        }\n      }\n      __typename\n    }\n    id\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "33fe63d32dc72d3abfc937f030677fb7";

export default node;
