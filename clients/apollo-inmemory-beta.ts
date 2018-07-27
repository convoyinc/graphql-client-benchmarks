import { InMemoryCache } from 'apollo-cache-inmemory-beta';

import { ApolloInMemory } from './apollo-inmemory';

export class ApolloInMemoryBeta extends ApolloInMemory {
  static metadata = {
    name: `Apollo (InMemory 1.3.0-beta.6)`,
  };

  constructor() {
    super(new InMemoryCache());
  }
}
