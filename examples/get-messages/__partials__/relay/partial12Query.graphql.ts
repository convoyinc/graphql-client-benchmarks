/**
 * @generated SignedSource<<6d82fb6067045e14f1ba9238a55460ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial12Query$variables = {
  convId: string;
};
export type partial12Query$data = {
  readonly messages: ReadonlyArray<{
    readonly __typename: "Message";
    readonly content: string | null;
    readonly emotions: ReadonlyArray<{
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
export type partial12Query = {
  response: partial12Query$data;
  variables: partial12Query$variables;
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
    "name": "partial12Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial12Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9b6de4f8be0952bdfdae33b326d8fffe",
    "id": null,
    "metadata": {},
    "name": "partial12Query",
    "operationKind": "query",
    "text": "query partial12Query(\n  $convId: ID!\n) {\n  messages(convId: $convId) {\n    from\n    imDisplayName\n    messageType\n    originalArrivalTime\n    content\n    __typename\n    id\n    emotions {\n      users {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "372bce7c1bed938b17094069025f2317";

export default node;
