import _ from 'lodash';
import expect from 'unexpected';

import { Benchmark, Observer, Client, Example } from '../src';

export default class UpdateTwentyFiveObservers extends Benchmark {
  numObservers = 25;

  static metadata = {
    title: `update (25 observers)`,
  };

  observers: Observer[] = [];
  updatedResponses: any[] = [];

  constructor(client: Client, example: Example) {
    super(client, example);

    // This is a bit hacky, but does a decent job of exploring partial updates.
    const update = updateScalarFields(example.partials[0].response);
    for (let i = 0; i < this.numObservers; i++) {
      this.updatedResponses.push(overlayResponse(example.partials[i].response, update));
    }
  }

  async setup() {
    await this.client.write(this.example);
    for (let i = 0; i < this.numObservers; i++) {
      this.observers.push(this.client.observe(this.example.partials[i]));
    }
  }

  async run() {
    await this.client.write({
      ...this.example.partials[0],
      response: this.updatedResponses[0],
    });
  }

  async verify() {
    for (let i = 0; i < this.numObservers; i++) {
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

/**
 * Overlays any values found in `source` on top of `response`, if `response` has
 * values at that path.
 */
function overlayResponse(response: any, source: any) {
  if (Array.isArray(response)) {
    return response.map((v, i) => overlayResponse(v, _.get(source, i)));
  } else if (_.isObject(response)) {
    return _.mapValues(response, (v, k) => overlayResponse(v, _.get(source, k)));
  } else if (response === undefined) {
    return undefined;
  } else if (source) {
    return source;
  } else {
    return response;
  }
}
