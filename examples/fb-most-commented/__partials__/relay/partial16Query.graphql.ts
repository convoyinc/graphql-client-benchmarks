/**
 * @generated SignedSource<<6e62d0023e07d90d16c4bdc20c918831>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial16Query$variables = {};
export type partial16Query$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly repositories: {
      readonly __typename: "RepositoryConnection";
      readonly nodes: ReadonlyArray<{
        readonly __typename: "Repository";
        readonly createdAt: any;
        readonly homepageUrl: any | null;
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
          } | null> | null;
        };
      } | null> | null;
    };
  } | null;
};
export type partial16Query = {
  response: partial16Query$data;
  variables: partial16Query$variables;
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
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
        (v3/*: any*/),
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
            (v4/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    (v4/*: any*/)
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
    "name": "partial16Query",
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
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": "repositories(first:50)"
          },
          (v4/*: any*/)
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
    "name": "partial16Query",
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
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": "repositories(first:50)"
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": "organization(login:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "739c71ea42f9a3d05270922284d05274",
    "id": null,
    "metadata": {},
    "name": "partial16Query",
    "operationKind": "query",
    "text": "query partial16Query {\n  organization(login: \"facebook\") {\n    repositories(first: 50) {\n      nodes {\n        issues(first: 50, states: OPEN, orderBy: {field: COMMENTS, direction: DESC}) {\n          nodes {\n            createdAt\n            comments {\n              totalCount\n              __typename\n            }\n            title\n            __typename\n            id\n          }\n          __typename\n        }\n        createdAt\n        homepageUrl\n        __typename\n        id\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "50aa6fe5568f9aa1d253f32b447d81b0";

export default node;
