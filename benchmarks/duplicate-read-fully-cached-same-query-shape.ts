import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class ReadDuplicate extends Benchmark {
  static metadata = {
    title: `duplicate read (fully cached, same query shape)`,
  };

  result?: ReadResult;

  async setup() {
    await this.client.write(this.example);
    await this.client.read(this.example);
  }

  async run() {
    const sameShape = this.example.partials[0];
    this.result = await this.client.read(sameShape);
  }

  async verify() {
    expect(this.result!.data, 'to satisfy', this.example.response);
  }
}
