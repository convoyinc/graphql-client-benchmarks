import { Hermes } from 'apollo-cache-hermes';
import packageInfo from 'apollo-cache-hermes/package.json';

import { ApolloInMemory } from './apollo-inmemory';

export class ApolloHermesStrict extends ApolloInMemory {
  static metadata = {
    name: `Apollo (Hermes, strict v${(packageInfo as any).version})`,
  };

  constructor() {
    super(new Hermes({ strict: true }));
  }
}
