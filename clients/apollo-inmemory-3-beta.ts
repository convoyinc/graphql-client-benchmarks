import graphqlTag from 'graphql-tag';
import { ApolloCache, ApolloLink, ApolloClient, ObservableQuery, InMemoryCache } from '@apollo/client';
// eslint-disable-next-line import/no-internal-modules
import { Subscription } from '@apollo/client/utilities/observables/Observable';
// import packageInfo from '@apollo-client/package.json';

import { Client, Observer, SingleExample, SingleRawExample } from '../src';

class ApolloObserver implements Observer {
  private _mostRecentResult?: any = null;
  private _subscription?: Subscription;
  constructor(observable: ObservableQuery<any>) {
    this._subscription = observable.subscribe(
      ({ data }) => {
        this._mostRecentResult = { data };
      },
      error => {
        this._mostRecentResult = { errors: [error] };
      },
    );
  }

  unsubscribe() {
    this._subscription.unsubscribe();
  }

  mostRecentResult() {
    return this._mostRecentResult;
  }
}

interface ApolloExample extends SingleExample {
  operation: any;
  variables?: object;
}

export class ApolloInMemoryThree extends Client {
  static metadata = {
    name: `Apollo (InMemory v3.0)`,
  };

  apollo: ApolloClient<any>;

  constructor(
    cache: ApolloCache<any> = new InMemoryCache({
      typePolicies: {
        Issue: {
          keyFields: false,
        },
        Repository: {
          keyFields: false,
        },
        RepositoryConnection: {
          keyFields: false,
        },
        Organization: {
          keyFields: false,
        },
      },
    }),
  ) {
    super();

    this.apollo = new ApolloClient({
      cache,
      link: new ApolloLink(),
    });
  }

  transformRawExample(rawExample: SingleRawExample): ApolloExample {
    return {
      operation: graphqlTag(rawExample.operation),
      response: rawExample.response,
      variables: rawExample.variables,
    };
  }

  async read({ operation, variables }: ApolloExample) {
    try {
      return {
        data: this.apollo.readQuery({ query: operation, variables }),
      };
    } catch (error) {
      // Apollo throws if data is missing
      return null;
    }
  }

  async write({ operation, response, variables }: ApolloExample) {
    this.apollo.writeQuery({
      data: response,
      query: operation,
      variables,
    });
  }

  observe({ operation, variables }: ApolloExample) {
    const observable = this.apollo.watchQuery({
      query: operation,
      variables,
      fetchPolicy: 'cache-only',
    });
    return new ApolloObserver(observable);
  }
}
