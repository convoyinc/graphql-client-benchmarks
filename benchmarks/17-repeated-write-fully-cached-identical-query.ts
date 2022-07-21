import expect from 'unexpected';

import { Benchmark, ReadResult } from '../src';

export default class WriteWithCompleteCache extends Benchmark {
  static metadata = {
    title: `repeated write (fully cached, identical query)`,
  };

  async setup() {
    await this.client.write(this.example);
  }

  async run() {
    await this.client.write(this.example);
  }

  async verify() {
    const { data } = await this.client.read(this.example);
    expect(data, 'to satisfy', this.example.response);
  }
}
