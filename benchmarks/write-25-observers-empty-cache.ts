import expect from 'unexpected';

import { Benchmark, ReadResult, Observer } from '../src';

export default class WriteWithTwentyFiveObserversAndEmptyCache extends Benchmark {
  static metadata = {
    title: `write (25 observers, empty cache)`,
  };

  observers: Observer[] = [];

  async setup() {
    for (let i = 0; i < 25; i++) {
      this.observers.push(this.client.observe(this.example.partials[i]));
    }
  }

  async run() {
    await this.client.write(this.example);
  }

  async verify() {
    for (let i = 0; i < 8; i++) {
      const observer = this.observers[i];
      const { response } = this.example.partials[i];
      expect(observer.mostRecentResult().data, 'to satisfy', response);
    }
  }

  async teardown() {
    for (const observer of this.observers) {
      observer.unsubscribe();
    }
  }
}
