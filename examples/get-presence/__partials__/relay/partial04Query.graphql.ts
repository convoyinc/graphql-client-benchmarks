/**
 * @generated SignedSource<<5b1fb2e9b6c5771e8bff553abed4e215>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Activity = "Available" | "Away" | "BeRightBack" | "Busy" | "DoNotDisturb" | "InACall" | "InAConferenceCall" | "InAMeeting" | "Inactive" | "OffWork" | "Offline" | "OutOfOffice" | "PresenceUnknown" | "Presenting" | "UrgentInterruptionsOnly" | "%future added value";
export type partial04Query$variables = {
  userId: string;
};
export type partial04Query$data = {
  readonly presence: {
    readonly __typename: "Presence";
    readonly activity: Activity | null;
    readonly id: string | null;
  } | null;
};
export type partial04Query = {
  response: partial04Query$data;
  variables: partial04Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Presence",
    "kind": "LinkedField",
    "name": "presence",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "activity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "partial04Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial04Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "52d5fdd6c2ef9d2da688fa065b5bc792",
    "id": null,
    "metadata": {},
    "name": "partial04Query",
    "operationKind": "query",
    "text": "query partial04Query(\n  $userId: ID!\n) {\n  presence(userId: $userId) {\n    activity\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "786f43f28a60aa9558aba90c1c7f316d";

export default node;
