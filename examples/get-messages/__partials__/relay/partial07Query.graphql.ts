/**
 * @generated SignedSource<<ec14a19b9f4318fe7913905de36fdc19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial07Query$variables = {
  convId: string;
};
export type partial07Query$data = {
  readonly messages: ReadonlyArray<{
    readonly __typename: "Message";
    readonly content: string | null;
    readonly emotions: ReadonlyArray<{
      readonly key: string | null;
      readonly users: ReadonlyArray<{
        readonly id: string;
      } | null> | null;
    } | null> | null;
    readonly id: string | null;
    readonly imDisplayName: string | null;
  } | null> | null;
};
export type partial07Query = {
  response: partial07Query$data;
  variables: partial07Query$variables;
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
    "name": "partial07Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial07Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "10d1a84ddd9de25382b5edb3773002a1",
    "id": null,
    "metadata": {},
    "name": "partial07Query",
    "operationKind": "query",
    "text": "query partial07Query(\n  $convId: ID!\n) {\n  messages(convId: $convId) {\n    emotions {\n      key\n      users {\n        id\n      }\n    }\n    imDisplayName\n    content\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a7376265897214211be761b79449addb";

export default node;
