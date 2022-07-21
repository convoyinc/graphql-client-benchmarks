import expect from 'unexpected';

import { Benchmark } from '../src';

export default class WriteNoObserversEmptyCache extends Benchmark {
  static metadata = {
    title: `write (no observers, empty cache)`,
  };

  async run() {
    await this.client.write(this.example);
  }

  async verify() {
    const result = await this.client.read(this.example);
    expect(result.data, 'to satisfy', this.example.response);
  }
}
