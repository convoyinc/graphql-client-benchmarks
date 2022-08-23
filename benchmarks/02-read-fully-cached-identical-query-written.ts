import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class ReadWithCompleteCache extends Benchmark {
  static metadata = {
    title: `read (fully cached, identical query written)`,
  };

  result?: ReadResult;

  async setup() {
    await this.client.write(this.example);
  }

  async run() {
    this.result = await this.client.read(this.example);
  }

  async verify() {
    expect(this.result!.data, 'to satisfy', this.example.response);
  }
}
