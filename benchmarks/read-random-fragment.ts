import expect from 'unexpected';

import { Benchmark, ReadResult, FragmentId, FragmentResponse } from '../src';

export default class ReadSatisfied extends Benchmark {
  static metadata = {
    title: `random read (fragment, fully cached)`,
  };

  result?: ReadResult;
  fragmentId?: FragmentId;
  fragmentResponse?: FragmentResponse;

  async setup() {
    await this.client.write(this.example);
    if (this.example.fragmentIdPool) {
        this.fragmentId = this.example.fragmentIdPool[Math.floor(Math.random() * this.example.fragmentIdPool.length)]
        console.log(this.example)
        this.fragmentResponse = this.example.fragmentResponsePool.filter(x => x.id === this.fragmentId.id)[0]
    }
  }

  async run() {
    this.result = await this.client.readFragment(this.example, this.fragmentId);
    console.log(this.result)
  }

  async verify() {
    expect(this.result!.data, 'to satisfy', this.fragmentResponse );
  }
}
