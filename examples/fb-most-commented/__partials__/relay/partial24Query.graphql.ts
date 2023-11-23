/**
 * @generated SignedSource<<361cbc7cd2803b68ac0c7a71d244c3f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial24Query$variables = Record<PropertyKey, never>;
export type partial24Query$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly repositories: {
      readonly __typename: "RepositoryConnection";
      readonly nodes: ReadonlyArray<{
        readonly __typename: "Repository";
        readonly createdAt: any;
        readonly homepageUrl: any | null | undefined;
        readonly issues: {
          readonly __typename: "IssueConnection";
          readonly nodes: ReadonlyArray<{
            readonly __typename: "Issue";
            readonly comments: {
              readonly __typename: "IssueCommentConnection";
              readonly totalCount: number;
            };
            readonly createdAt: any;
            readonly id: string;
            readonly title: string;
          } | null | undefined> | null | undefined;
        };
      } | null | undefined> | null | undefined;
    };
  } | null | undefined;
};
export type partial24Query = {
  response: partial24Query$data;
  variables: partial24Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "facebook"
  }
],
v1 = {
  "kind": "Literal",
  "name": "first",
  "value": 50
},
v2 = [
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": [
    (v1/*: any*/),
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "DESC",
        "field": "COMMENTS"
      }
    },
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
          "concreteType": "IssueCommentConnection",
          "kind": "LinkedField",
          "name": "comments",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        (v3/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "storageKey": "issues(first:50,orderBy:{\"direction\":\"DESC\",\"field\":\"COMMENTS\"},states:\"OPEN\")"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "homepageUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partial24Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "organization",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "repositories(first:50)"
          },
          (v3/*: any*/)
        ],
        "storageKey": "organization(login:\"facebook\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partial24Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "organization",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "repositories(first:50)"
          },
          (v3/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": "organization(login:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "e360f5c8c2c65b6d6cd7d6daa7b2e02c",
    "id": null,
    "metadata": {},
    "name": "partial24Query",
    "operationKind": "query",
    "text": "query partial24Query {\n  organization(login: \"facebook\") {\n    repositories(first: 50) {\n      nodes {\n        issues(first: 50, states: OPEN, orderBy: {field: COMMENTS, direction: DESC}) {\n          nodes {\n            comments {\n              totalCount\n              __typename\n            }\n            createdAt\n            title\n            __typename\n            id\n          }\n          __typename\n        }\n        homepageUrl\n        createdAt\n        __typename\n        id\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b570a2f9547988511dcdd8b012de1a00";

export default node;
