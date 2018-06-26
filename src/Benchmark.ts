import { Client } from './Client';
import { Example } from '.';

export interface BenchmarkMetadata {
  title: string;
}

export interface BenchmarkConstructor<TBenchmark extends Benchmark = Benchmark> {
  metadata: BenchmarkMetadata;
  new (client: Client, example: Example): TBenchmark;
}

export abstract class Benchmark {
  async setup(): Promise<void> {}

  abstract run(): Promise<void>;

  abstract verify(): Promise<void>;

  async teardown(): Promise<void> {}

  constructor(protected client: Client, protected example: Example) {}
}
