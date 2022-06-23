import graphql from 'babel-plugin-relay/macro';

graphql`
  query cyclicGitHubIssuesQuery {
    organization(login: "facebook") {
      __typename
      id
      repositories(first: 10) {
        __typename
        nodes {
          __typename
          id
          createdAt
          homepageUrl
          issues(first: 10, states: OPEN) {
            __typename
            nodes {
              __typename
              id
              createdAt
              title
              repository {
                __typename
                id
              }
            }
          }
        }
      }
    }
  }
`