/**
 * @generated SignedSource<<494a841a1bed4ec0f8031f4f687c7ea1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial01Query$variables = Record<PropertyKey, never>;
export type partial01Query$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly id: string;
    readonly repositories: {
      readonly __typename: "RepositoryConnection";
      readonly nodes: ReadonlyArray<{
        readonly __typename: "Repository";
        readonly id: string;
        readonly issues: {
          readonly __typename: "IssueConnection";
          readonly nodes: ReadonlyArray<{
            readonly __typename: "Issue";
            readonly id: string;
            readonly repository: {
              readonly __typename: "Repository";
              readonly id: string;
            };
            readonly title: string;
          } | null | undefined> | null | undefined;
        };
      } | null | undefined> | null | undefined;
    };
  } | null | undefined;
};
export type partial01Query = {
  response: partial01Query$data;
  variables: partial01Query$variables;
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
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "repository",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": "issues(first:10,states:\"OPEN\")"
              },
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "repositories(first:10)"
      },
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": "organization(login:\"facebook\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partial01Query",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial01Query",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "f484c767843a90bfa2abd7787cc76f9b",
    "id": null,
    "metadata": {},
    "name": "partial01Query",
    "operationKind": "query",
    "text": "query partial01Query {\n  organization(login: \"facebook\") {\n    repositories(first: 10) {\n      nodes {\n        issues(first: 10, states: OPEN) {\n          nodes {\n            title\n            __typename\n            id\n            repository {\n              __typename\n              id\n            }\n          }\n          __typename\n        }\n        __typename\n        id\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a71ccbfecd72d473470afaae94ac59c9";

export default node;
