/**
 * @generated SignedSource<<2d7d40f487b7d6077c88f8546ec59022>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type partial02Query$variables = Record<PropertyKey, never>;
export type partial02Query$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly repositories: {
      readonly __typename: "RepositoryConnection";
      readonly nodes: ReadonlyArray<{
        readonly __typename: "Repository";
        readonly homepageUrl: any | null | undefined;
        readonly issues: {
          readonly __typename: "IssueConnection";
          readonly nodes: ReadonlyArray<{
            readonly __typename: "Issue";
            readonly comments: {
              readonly __typename: "IssueCommentConnection";
            };
            readonly id: string;
          } | null | undefined> | null | undefined;
        };
      } | null | undefined> | null | undefined;
    };
  } | null | undefined;
};
export type partial02Query = {
  response: partial02Query$data;
  variables: partial02Query$variables;
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
  "name": "homepageUrl",
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
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Issue",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v4/*: any*/),
        (v5/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "IssueCommentConnection",
          "kind": "LinkedField",
          "name": "comments",
          "plural": false,
          "selections": [
            (v4/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "issues(first:50,orderBy:{\"direction\":\"DESC\",\"field\":\"COMMENTS\"},states:\"OPEN\")"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partial02Query",
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/)
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
    "name": "partial02Query",
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/),
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
    "cacheID": "d5b08bcd393031ce9de8e5c0d4342bc8",
    "id": null,
    "metadata": {},
    "name": "partial02Query",
    "operationKind": "query",
    "text": "query partial02Query {\n  organization(login: \"facebook\") {\n    repositories(first: 50) {\n      nodes {\n        homepageUrl\n        __typename\n        issues(first: 50, states: OPEN, orderBy: {field: COMMENTS, direction: DESC}) {\n          __typename\n          nodes {\n            __typename\n            id\n            comments {\n              __typename\n            }\n          }\n        }\n        id\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1fbc6e3c33f5dcfa23e224210a84852f";

export default node;
