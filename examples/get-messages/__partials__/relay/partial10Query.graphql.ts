/**
 * @generated SignedSource<<3d51a640cd1452c16139cec3754916af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial10Query$variables = {
  convId: string;
};
export type partial10Query$data = {
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
    readonly messageType: string | null;
    readonly originalArrivalTime: string | null;
  } | null> | null;
};
export type partial10Query = {
  response: partial10Query$data;
  variables: partial10Query$variables;
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
        "name": "messageType",
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
        "kind": "ScalarField",
        "name": "originalArrivalTime",
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
    "name": "partial10Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial10Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "00ead7ad25078be0090294fd648c5cf3",
    "id": null,
    "metadata": {},
    "name": "partial10Query",
    "operationKind": "query",
    "text": "query partial10Query(\n  $convId: ID!\n) {\n  messages(convId: $convId) {\n    messageType\n    content\n    from\n    originalArrivalTime\n    __typename\n    id\n    emotions {\n      users {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "479e16fef5cbf37d0a17711ec93cda0a";

export default node;
