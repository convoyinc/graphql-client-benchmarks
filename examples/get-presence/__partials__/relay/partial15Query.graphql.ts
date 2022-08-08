/**
 * @generated SignedSource<<999294120aedf62d6bb1a16b0c5578f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Activity = "Available" | "Away" | "BeRightBack" | "Busy" | "DoNotDisturb" | "InACall" | "InAConferenceCall" | "InAMeeting" | "Inactive" | "OffWork" | "Offline" | "OutOfOffice" | "PresenceUnknown" | "Presenting" | "UrgentInterruptionsOnly" | "%future added value";
export type Availability = "Available" | "AvailableIdle" | "Away" | "BeRightBack" | "Busy" | "BusyIdle" | "DoNotDisturb" | "Offline" | "PresenceUnknown" | "%future added value";
export type partial15Query$variables = {
  userId: string;
};
export type partial15Query$data = {
  readonly presence: {
    readonly __typename: "Presence";
    readonly activity: Activity | null;
    readonly availability: Availability | null;
    readonly id: string | null;
  } | null;
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
        "name": "availability",
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
    "name": "partial15Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial15Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bae6f015f023092e12ce6b94c932d704",
    "id": null,
    "metadata": {},
    "name": "partial15Query",
    "operationKind": "query",
    "text": "query partial15Query(\n  $userId: ID!\n) {\n  presence(userId: $userId) {\n    activity\n    availability\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8d63616893673ca330e3f371e6e9a755";

export default node;
