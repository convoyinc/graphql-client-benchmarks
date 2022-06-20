import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class ReadWithEmptyCache extends Benchmark {
  static metadata = {
    title: `read (empty cache)`,
  };

  result?: ReadResult;

  async run() {
    this.result = await this.client.read(this.example);
  }

  async verify() {
    expect(this.result.data, 'to be', null);
  }
}