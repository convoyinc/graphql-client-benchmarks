import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class ReadSatisfied extends Benchmark {
  static metadata = {
    title: `read (satisfied)`,
  };

  result?: ReadResult;

  async setup() {
    await this.client.write(this.example);
  }

  async run() {
    this.result = await this.client.read(this.example.partials[1]);
  }

  async verify() {
    expect(this.result!.data, 'to satisfy', this.example.partials[1].response);
  }
}
