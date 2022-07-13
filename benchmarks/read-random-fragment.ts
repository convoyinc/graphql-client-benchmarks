import expect from 'unexpected';

import { Benchmark, ReadResult, Fragment } from '../src';

export default class ReadSatisfied extends Benchmark {
  static metadata = {
    title: `random read (fragment, fully cached)`,
  };

  result?: ReadResult;
  fragment?: Fragment;

  async setup() {
    await this.client.write(this.example);
    if (this.example.fragment.fragmentPool)
        this.fragment = this.example.fragment.fragmentPool[Math.floor(Math.random() * this.example.fragment.fragmentPool.length)]            
  }

  async run() {
    this.result = await this.client.readFragment(this.example, this.fragment);
  }

  async verify() {
    expect(this.result!.data, 'to satisfy', this.fragment.response);
  }
}
