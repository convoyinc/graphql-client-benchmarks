import expect from 'unexpected';

import { Benchmark, ReadResult, Fragment, populateResponse } from '../src';

export default class RandomRead extends Benchmark {
  static metadata = {
    title: `random read (fragment, fully cached, expanded response)`,
  };

  result: ReadResult;
  fragment: Fragment;
  fragmentRes: object;

  async setup() {
    // Expand response
    this.example.response = populateResponse(this.example.response);
    // Write to cache
    await this.client.write(this.example);

    if ('fragment' in this.example && this.example.fragment) {      
      // find all responses which match the fragmentPath, pick a random one
      // and save it
      const responsePool = this.example.fragment.fragmentPath
        .split('.')
        .reduce((a, b) => a[b], this.example.response);
      const tmp = responsePool[Math.floor(Math.random() * responsePool.length)];
      this.fragment = {
        typename: tmp.__typename,
        id: tmp.id,
        response: tmp,
      };
    }
  }

  async run() {
    this.result = await this.client.readFragment(this.example, this.fragment);
  }

  async verify() {
    expect(this.result!.data, 'to satisfy', this.fragment.response);
  }
}
