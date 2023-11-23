/**
 * @generated SignedSource<<818bbb89c818f89ce6c840dec59e2348>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial03Query$variables = Record<PropertyKey, never>;
export type partial03Query$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly id: string;
    readonly repositories: {
      readonly __typename: "RepositoryConnection";
      readonly nodes: ReadonlyArray<{
        readonly __typename: "Repository";
        readonly createdAt: any;
        readonly id: string;
        readonly issues: {
          readonly __typename: "IssueConnection";
          readonly nodes: ReadonlyArray<{
            readonly __typename: "Issue";
            readonly createdAt: any;
            readonly id: string;
            readonly repository: {
              readonly __typename: "Repository";
              readonly id: string;
            };
          } | null | undefined> | null | undefined;
        };
      } | null | undefined> | null | undefined;
    };
  } | null | undefined;
};
export type partial03Query = {
  response: partial03Query$data;
  variables: partial03Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "login",
        "value": "facebook"
      }
    ],
    "concreteType": "Organization",
    "kind": "LinkedField",
    "name": "organization",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          (v0/*: any*/)
        ],
        "concreteType": "RepositoryConnection",
        "kind": "LinkedField",
        "name": "repositories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": [
                  (v0/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "states",
                    "value": "OPEN"
                  }
                ],
                "concreteType": "IssueConnection",
                "kind": "LinkedField",
                "name": "issues",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Issue",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "repository",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": "issues(first:10,states:\"OPEN\")"
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "repositories(first:10)"
      },
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "storageKey": "organization(login:\"facebook\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partial03Query",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial03Query",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "b6f3d749b9532cb0b2a30cf3a37b5dbd",
    "id": null,
    "metadata": {},
    "name": "partial03Query",
    "operationKind": "query",
    "text": "query partial03Query {\n  organization(login: \"facebook\") {\n    repositories(first: 10) {\n      nodes {\n        createdAt\n        issues(first: 10, states: OPEN) {\n          nodes {\n            createdAt\n            __typename\n            id\n            repository {\n              __typename\n              id\n            }\n          }\n          __typename\n        }\n        __typename\n        id\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8cfd638ae118b0dee4df1a015184e5c5";

export default node;
