import { BenchmarkConstructor } from '../src';

// Find and export all benchmarks in this directory (recursively)
const benchmarkContext = require.context('.', true, /\.js$/);
const benchmarks: BenchmarkConstructor[] = benchmarkContext
  .keys()
  .filter(path => !/(^|[\\/])index\.js$/.test(path))
  .map(path => benchmarkContext(path))
  .map(exports => exports.default);

export = benchmarks;
