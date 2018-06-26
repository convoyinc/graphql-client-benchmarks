import expect from 'unexpected';

import { Benchmark, ReadResult, Observer } from '../src';

export default class WriteWithTenObserversAndCompleteCache extends Benchmark {
  static metadata = {
    title: `write (8 identical observers, fully cached, identical query written)`,
  };

  observers: Observer[] = [];

  async setup() {
    await this.client.write(this.example);
    for (let i = 0; i < 8; i++) {
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
