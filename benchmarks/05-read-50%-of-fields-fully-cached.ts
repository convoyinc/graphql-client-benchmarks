import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class ReadDuplicate extends Benchmark {
  static metadata = {
    title: `read 50% of fields (fully cached)`,
  };

  result?: ReadResult;
  midpoint?: number;

  async setup() {
    await this.client.write(this.example);
    await this.client.read(this.example);    
    this.midpoint = Math.floor(this.example.partials.length / 2 - 1);
  }

  async run() {
    const halfQuery = this.example.partials[this.midpoint];
    this.result = await this.client.read(halfQuery);
  }

  async verify() {
    const { response } = this.example.partials[this.midpoint];
    expect(this.result!.data, 'to satisfy', response);
  }
}
