/**
 * @generated SignedSource<<971eb05bf672ea4d591cca1843ff0662>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Activity = "Available" | "Away" | "BeRightBack" | "Busy" | "DoNotDisturb" | "InACall" | "InAConferenceCall" | "InAMeeting" | "Inactive" | "OffWork" | "Offline" | "OutOfOffice" | "PresenceUnknown" | "Presenting" | "UrgentInterruptionsOnly" | "%future added value";
export type Availability = "Available" | "AvailableIdle" | "Away" | "BeRightBack" | "Busy" | "BusyIdle" | "DoNotDisturb" | "Offline" | "PresenceUnknown" | "%future added value";
export type partial20Query$variables = {
  userId: string;
};
export type partial20Query$data = {
  readonly presence: {
    readonly __typename: "Presence";
    readonly activity: Activity | null;
    readonly availability: Availability | null;
    readonly id: string | null;
  } | null;
};
export type partial20Query = {
  response: partial20Query$data;
  variables: partial20Query$variables;
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
    "name": "partial20Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial20Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e60a7a25ce08aee5c7159397a3a004e7",
    "id": null,
    "metadata": {},
    "name": "partial20Query",
    "operationKind": "query",
    "text": "query partial20Query(\n  $userId: ID!\n) {\n  presence(userId: $userId) {\n    activity\n    availability\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fb6c669999279a0c1a112503e5545e73";

export default node;
