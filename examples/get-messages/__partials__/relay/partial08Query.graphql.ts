/**
 * @generated SignedSource<<7df6e43449200a42fef051717314611f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial08Query$variables = {
  convId: string;
};
export type partial08Query$data = {
  readonly messages: ReadonlyArray<{
    readonly __typename: "Message";
    readonly emotions: ReadonlyArray<{
      readonly users: ReadonlyArray<{
        readonly id: string;
      } | null> | null;
    } | null> | null;
    readonly from: string | null;
    readonly id: string | null;
    readonly imDisplayName: string | null;
    readonly messageType: string | null;
  } | null> | null;
};
export type partial08Query = {
  response: partial08Query$data;
  variables: partial08Query$variables;
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      (v1/*: any*/),
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "partial08Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial08Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "efaaacfd7de8fcf0441e7ab2c554122b",
    "id": null,
    "metadata": {},
    "name": "partial08Query",
    "operationKind": "query",
    "text": "query partial08Query(\n  $convId: ID!\n) {\n  messages(convId: $convId) {\n    from\n    messageType\n    imDisplayName\n    __typename\n    id\n    emotions {\n      users {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2c76343a5158207dd605487df82c9283";

export default node;
