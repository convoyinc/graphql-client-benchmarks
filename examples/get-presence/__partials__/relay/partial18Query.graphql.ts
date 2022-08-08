/**
 * @generated SignedSource<<da919bc6be01e59ec5a1202a58f4f160>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Activity = "Available" | "Away" | "BeRightBack" | "Busy" | "DoNotDisturb" | "InACall" | "InAConferenceCall" | "InAMeeting" | "Inactive" | "OffWork" | "Offline" | "OutOfOffice" | "PresenceUnknown" | "Presenting" | "UrgentInterruptionsOnly" | "%future added value";
export type Availability = "Available" | "AvailableIdle" | "Away" | "BeRightBack" | "Busy" | "BusyIdle" | "DoNotDisturb" | "Offline" | "PresenceUnknown" | "%future added value";
export type partial18Query$variables = {
  userId: string;
};
export type partial18Query$data = {
  readonly presence: {
    readonly __typename: "Presence";
    readonly activity: Activity | null;
    readonly availability: Availability | null;
    readonly id: string | null;
  } | null;
};
export type partial18Query = {
  response: partial18Query$data;
  variables: partial18Query$variables;
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
    "name": "partial18Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial18Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "44b090f395badc2931ad552804bd45c6",
    "id": null,
    "metadata": {},
    "name": "partial18Query",
    "operationKind": "query",
    "text": "query partial18Query(\n  $userId: ID!\n) {\n  presence(userId: $userId) {\n    activity\n    availability\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c6ff0cb8b4d91c177791d8e4942bd15";

export default node;
