/**
 * @generated SignedSource<<56c46ba061a206c922f7b2bfc96570a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fragmentOwnerQuery$variables = {};
export type fragmentOwnerQuery$data = {
  readonly organization: {
    readonly repositories: {
      readonly nodes: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"fragment">;
      } | null> | null;
    };
  } | null;
};
export type fragmentOwnerQuery = {
  response: fragmentOwnerQuery$data;
  variables: fragmentOwnerQuery$variables;
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
  "value": 10
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
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "fragmentOwnerQuery",
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
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "fragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:10)"
          }
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
    "name": "fragmentOwnerQuery",
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
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "homepageUrl",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      (v1/*: any*/),
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
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Repository",
                            "kind": "LinkedField",
                            "name": "repository",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issues(first:10,states:\"OPEN\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:10)"
          },
          (v4/*: any*/)
        ],
        "storageKey": "organization(login:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "7d6276a79ae519770d6af3a57d4a77a1",
    "id": null,
    "metadata": {},
    "name": "fragmentOwnerQuery",
    "operationKind": "query",
    "text": "query fragmentOwnerQuery {\n  organization(login: \"facebook\") {\n    repositories(first: 10) {\n      nodes {\n        ...fragment\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment fragment on Repository {\n  __typename\n  id\n  createdAt\n  homepageUrl\n  issues(first: 10, states: OPEN) {\n    __typename\n    nodes {\n      __typename\n      id\n      createdAt\n      title\n      repository {\n        __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ef8c10c4c3b784882db34b29365abf98";

export default node;
