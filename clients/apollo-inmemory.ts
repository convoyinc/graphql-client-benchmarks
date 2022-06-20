// Updated imports
import graphqlTag from 'graphql-tag';
import {
  ApolloClient,
  ApolloLink,
  ApolloCache,
  InMemoryCache,
  ObservableQuery,
  ObservableSubscription,
// eslint-disable-next-line import/no-internal-modules
} from '@apollo/client/core';
// eslint-disable-next-line import/no-internal-modules
import packageInfo from '@apollo/client/package.json';

import { Client, Observer, SingleExample, SingleRawExample } from '../src';

class ApolloObserver implements Observer {
  private _mostRecentResult?: any = null;
  private _subscription?: ObservableSubscription;
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

export class ApolloInMemory extends Client {
  static metadata = {
    name: `Apollo (InMemory v${(packageInfo as any).version})`,
  };

  apollo: ApolloClient<any>;

  constructor(cache: ApolloCache<any> = new InMemoryCache()) {
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
