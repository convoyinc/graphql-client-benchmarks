import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class WriteWithEmptyCache extends Benchmark {
  static metadata = {
    title: `write (empty cache)`,
  };

  async run() {
    await this.client.write(this.example);
  }

  async verify() {
    const { data } = await this.client.read(this.example);
    expect(data, 'to satisfy', this.example.response);
  }
}
