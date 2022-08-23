/**
 * @generated SignedSource<<3c59e7fe2b7189094dd627dc0df59bbc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial12Query$variables = {};
export type partial12Query$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly id: string;
    readonly repositories: {
      readonly __typename: "RepositoryConnection";
      readonly nodes: ReadonlyArray<{
        readonly __typename: "Repository";
        readonly createdAt: any;
        readonly homepageUrl: any | null;
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
            readonly title: string;
          } | null> | null;
        };
      } | null> | null;
    };
  } | null;
};
export type partial12Query = {
  response: partial12Query$data;
  variables: partial12Query$variables;
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "homepageUrl",
                "storageKey": null
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
    "name": "partial12Query",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial12Query",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "319035d7f0a376b9357d07f4c0347cf7",
    "id": null,
    "metadata": {},
    "name": "partial12Query",
    "operationKind": "query",
    "text": "query partial12Query {\n  organization(login: \"facebook\") {\n    repositories(first: 10) {\n      nodes {\n        createdAt\n        issues(first: 10, states: OPEN) {\n          nodes {\n            createdAt\n            title\n            __typename\n            id\n            repository {\n              __typename\n              id\n            }\n          }\n          __typename\n        }\n        homepageUrl\n        __typename\n        id\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4fb14cd928afc19f2e387f666baebdb4";

export default node;
