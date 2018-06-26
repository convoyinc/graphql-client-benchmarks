import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class ReadDuplicate extends Benchmark {
  static metadata = {
    title: `read 50% of fields (fully cached)`,
  };

  result?: ReadResult;

  async setup() {
    await this.client.write(this.example);
    await this.client.read(this.example);
  }

  async run() {
    const halfQuery = this.example.partials[3];
    this.result = await this.client.read(halfQuery);
  }

  async verify() {
    const { response } = this.example.partials[3];
    expect(this.result!.data, 'to satisfy', response);
  }
}
