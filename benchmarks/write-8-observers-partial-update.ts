import _ from 'lodash';
import expect from 'unexpected';

import { Benchmark, Observer, Client, Example } from '../src';

export default class WriteEightObserversPartialUpdate extends Benchmark {
  static metadata = {
    title: `write (8 observers, partial update)`,
  };

  observers: Observer[] = [];
  updatedResponses: any[] = [];

  constructor(client: Client, example: Example) {
    super(client, example);

    // This is a bit hacky, but does a decent job of exploring partial updates.
    const update = updateScalarFields(example.partials[7].response);
    for (let i = 0; i < 8; i++) {
      this.updatedResponses.push(_.merge({}, example.partials[i].response, update));
    }
  }

  async setup() {
    await this.client.write(this.example);
    for (let i = 0; i < 8; i++) {
      this.observers.push(this.client.observe(this.example.partials[i]));
    }
  }

  async run() {
    await this.client.write({
      ...this.example.partials[7],
      response: this.updatedResponses[7],
    });
  }

  async verify() {
    for (let i = 0; i < 8; i++) {
      const observer = this.observers[i];
      const updatedResponse = this.updatedResponses[i];

      expect(observer.mostRecentResult().data, 'to satisfy', updatedResponse);
    }
  }

  async teardown() {
    for (const observer of this.observers) {
      observer.unsubscribe();
    }
  }
}

/**
 * Swaps out any scalar fields (except id and __typename), replacing them with
 * new values, in order to simulate an updated response.
 */
function updateScalarFields(response: any) {
  return _.cloneDeepWith(response, (value, key) => {
    if (key === 'id') return;
    if (key === '__typename') return;
    if (typeof value === 'string') return `new ${value}`;
    if (typeof value === 'number') return value + 1;
    if (typeof value === 'boolean') return !value;
  });
}
