import expect from 'unexpected';

import { Benchmark, ReadResult, Observer } from '../src';

export default class WriteWithMaxObserversAndEmptyCache extends Benchmark {
  static metadata = {
    title: `write (25 identical observers, empty cache)`,
  };

  observers: Observer[] = [];

  async setup() {
    for (let i = 0; i < 25; i++) {
      this.observers.push(this.client.observe(this.example));
    }
  }

  async run() {
    await this.client.write(this.example);
  }

  async verify() {
    for (const observer of this.observers) {
      expect(observer.mostRecentResult().data, 'to satisfy', this.example.response);
    }
  }

  async teardown() {
    for (const observer of this.observers) {
      observer.unsubscribe();
    }
  }
}
