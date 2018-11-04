import _ from 'lodash';
import expect from 'unexpected';

import { Benchmark, Observer, Client, Example, SingleExample } from '../src';

export default class UpdateOneObserver extends Benchmark {
  static metadata = {
    title: `update (1 observer)`,
  };

  observer: Observer;
  updatedResponse: any;

  constructor(client: Client, example: Example) {
    super(client, example);

    // This is a bit hacky, but does a decent job of exploring partial updates.
    const update = updateScalarFields(example.partials[example.partials.length / 2 - 1].response);
    this.updatedResponse = _.merge({}, example.response, update);
  }

  async setup() {
    await this.client.write(this.example);
    this.observer = this.client.observe(this.example);
  }

  async run() {
    await this.client.write({ ...this.example, response: this.updatedResponse } as SingleExample);
  }

  async verify() {
    expect(this.observer.mostRecentResult().data, 'to satisfy', this.updatedResponse);
  }

  async teardown() {
    this.observer.unsubscribe();
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
