/**
 * @generated SignedSource<<34c4add0caaf5883f508e176d3f06cb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Activity = "Available" | "Away" | "BeRightBack" | "Busy" | "DoNotDisturb" | "InACall" | "InAConferenceCall" | "InAMeeting" | "Inactive" | "OffWork" | "Offline" | "OutOfOffice" | "PresenceUnknown" | "Presenting" | "UrgentInterruptionsOnly" | "%future added value";
export type partial02Query$variables = {
  userId: string;
};
export type partial02Query$data = {
  readonly presence: {
    readonly __typename: "Presence";
    readonly activity: Activity | null;
    readonly id: string | null;
  } | null;
};
export type partial02Query = {
  response: partial02Query$data;
  variables: partial02Query$variables;
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
    "name": "partial02Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "partial02Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "268c043a18844020287034cf0f38c57c",
    "id": null,
    "metadata": {},
    "name": "partial02Query",
    "operationKind": "query",
    "text": "query partial02Query(\n  $userId: ID!\n) {\n  presence(userId: $userId) {\n    activity\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "de05a257b4ed027274fe5164934f6970";

export default node;
