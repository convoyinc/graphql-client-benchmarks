/**
 * @generated SignedSource<<8b71adcf805480f888f9018fea9acd0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial21Query$variables = {
  convId: string;
};
export type partial21Query$data = {
  readonly messages: ReadonlyArray<{
    readonly __typename: "Message";
    readonly content: string | null;
    readonly emotions: ReadonlyArray<{
      readonly key: string | null;
      readonly users: ReadonlyArray<{
        readonly id: string;
      } | null> | null;
    } | null> | null;
    readonly from: string | null;
    readonly id: string | null;
    readonly imDisplayName: string | null;
    readonly messageType: string | null;
    readonly originalArrivalTime: string | null;
  } | null> | null;
};
export type partial21Query = {
  response: partial21Query$data;
  variables: partial21Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "convId"
  }
],
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
    "args": [
      {
        "kind": "Variable",
        "name": "convId",
        "variableName": "convId"
      }
    ],
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
          {
            "alias": null,
            "args": null,
            "concreteType": "EmotionUser",
            "kind": "LinkedField",
            "name": "users",
            "plural": true,
            "selections": [
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
        "name": "messageType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      (v1/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "partial21Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial21Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0348edc5eb71d8b4e1a5daa6f8af6a45",
    "id": null,
    "metadata": {},
    "name": "partial21Query",
    "operationKind": "query",
    "text": "query partial21Query(\n  $convId: ID!\n) {\n  messages(convId: $convId) {\n    content\n    originalArrivalTime\n    emotions {\n      key\n      users {\n        id\n      }\n    }\n    from\n    imDisplayName\n    messageType\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e808d7e979b59539b91ea55837255dc9";

export default node;
