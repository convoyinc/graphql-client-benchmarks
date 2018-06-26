import { consoleReporter } from './reporters/console'; // eslint-disable-line import/no-internal-modules
import { polyfillEnvironment } from './environment';

polyfillEnvironment();

export { consoleReporter };

export * from './Benchmark';
export * from './Client';
export * from './Example';
export * from './environment';
export * from './execution';
export * from './partial';

export function loadBenchmarks(): typeof import('../benchmarks') {
  return require('../benchmarks'); // eslint-disable-line global-require
}

export function loadClients(): typeof import('../clients') {
  return require('../clients'); // eslint-disable-line global-require
}

export function loadExamples(): typeof import('../examples') {
  return require('../examples'); // eslint-disable-line global-require
}
