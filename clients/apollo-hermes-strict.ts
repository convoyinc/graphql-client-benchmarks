import { Hermes } from 'apollo-cache-hermes';

import { ApolloInMemory } from './apollo-inmemory';

export class ApolloHermesStrict extends ApolloInMemory {
  static metadata = {
    name: `Apollo (Hermes, strict)`,
  };

  constructor() {
    super(new Hermes({ strict: true }));
  }
}
