import expect from 'unexpected';

import { Benchmark, ReadResult, Observer } from '../src';

export default class WriteWithHundredTwentyFiveObserversAndEmptyCache extends Benchmark {
  static metadata = {
    title: `write (125 observers, empty cache)`,
  };

  observers: Observer[] = [];

  async setup() {
    for (let i = 0; i < 125; i++) {
      this.observers.push(this.client.observe(this.example.partials[i % this.example.partials.length]));
    }
  }

  async run() {
    await this.client.write(this.example);
  }

  async verify() {
    for (let i = 0; i < 125; i++) {
      const observer = this.observers[i];
      const { response } = this.example.partials[i % this.example.partials.length];
      expect(observer.mostRecentResult().data, 'to satisfy', response);
    }
  }

  async teardown() {
    for (const observer of this.observers) {
      observer.unsubscribe();
    }
  }
}
