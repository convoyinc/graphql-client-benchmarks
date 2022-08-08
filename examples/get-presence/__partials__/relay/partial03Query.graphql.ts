/**
 * @generated SignedSource<<a2d47027ae301846a30cfe54982df038>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Activity = "Available" | "Away" | "BeRightBack" | "Busy" | "DoNotDisturb" | "InACall" | "InAConferenceCall" | "InAMeeting" | "Inactive" | "OffWork" | "Offline" | "OutOfOffice" | "PresenceUnknown" | "Presenting" | "UrgentInterruptionsOnly" | "%future added value";
export type partial03Query$variables = {
  userId: string;
};
export type partial03Query$data = {
  readonly presence: {
    readonly __typename: "Presence";
    readonly activity: Activity | null;
    readonly id: string | null;
  } | null;
};
export type partial03Query = {
  response: partial03Query$data;
  variables: partial03Query$variables;
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
    "name": "partial03Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial03Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e44fa5c506b794df74536d4310bbf598",
    "id": null,
    "metadata": {},
    "name": "partial03Query",
    "operationKind": "query",
    "text": "query partial03Query(\n  $userId: ID!\n) {\n  presence(userId: $userId) {\n    activity\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a9a27f232b6e1c25386ee164dab1def";

export default node;
