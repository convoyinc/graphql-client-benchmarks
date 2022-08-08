/**
 * @generated SignedSource<<17f01b07a4d4ff8d6d1304f1e37e90b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial15Query$variables = {
  convId: string;
};
export type partial15Query$data = {
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
export type partial15Query = {
  response: partial15Query$data;
  variables: partial15Query$variables;
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
        "name": "from",
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
        "name": "content",
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
    "name": "partial15Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial15Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "434d88a4b27333819b4fbeec1fb549df",
    "id": null,
    "metadata": {},
    "name": "partial15Query",
    "operationKind": "query",
    "text": "query partial15Query(\n  $convId: ID!\n) {\n  messages(convId: $convId) {\n    from\n    originalArrivalTime\n    imDisplayName\n    messageType\n    emotions {\n      key\n      users {\n        id\n      }\n    }\n    content\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0919e4a6450f079ba9df2297e90fbf48";

export default node;
