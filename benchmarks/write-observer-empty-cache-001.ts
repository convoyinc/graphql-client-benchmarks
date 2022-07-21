import expect from 'unexpected';

import { Benchmark, ReadResult, Observer } from '../src';

export default class WriteWithOneObserverAndEmptyCache extends Benchmark {
  static metadata = {
    title: `write (1 observer, empty cache)`,
  };

  observer?: Observer;

  async setup() {
    this.observer = this.client.observe(this.example);
  }

  async run() {
    await this.client.write(this.example);
  }

  async verify() {
    expect(this.observer!.mostRecentResult().data, 'to satisfy', this.example.response);
  }

  async teardown() {
    this.observer!.unsubscribe();
  }
}
