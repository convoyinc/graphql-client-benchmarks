import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class ReadDuplicate extends Benchmark {
  static metadata = {
    title: `duplicate read (fully cached, identical query)`,
  };

  result?: ReadResult;

  async setup() {
    await this.client.write(this.example);
    await this.client.read(this.example);
  }

  async run() {
    this.result = await this.client.read(this.example);
  }

  async verify() {
    expect(this.result!.data, 'to satisfy', this.example.response);
  }
}
