import performanceNow from 'performance-now';
import { Stats } from 'fast-stats';

import { Benchmark, BenchmarkMetadata, BenchmarkConstructor } from './Benchmark';
import { Client, ClientMetadata, ClientConstructor } from './Client';
import { Event } from './Event';
import { Example, RawExample } from './Example';

const { Phase, Subject, Type } = Event;

export interface Configuration {
  // Run the benchmark and verify() results this many times to ferret out bugs.
  verifyPasses: number;
  // Run the benchmark this many times to warm up the VM's cache.
  warmups: number;
  // Minimum number of samples (before we start checking the margin of error).
  minSamples: number;
  // Maximum duration of an entire benchmark run.
  maxDurationMs: number;
  // Desired percent relative margin of error
  targetRelativeMarginOfError: number;
}

interface Context {
  reporter: Reporter;
  config: Configuration;
  rawExample: RawExample;
  eventCommon: Event.SuiteValues;
  canceled?: true;
  failure?: Event.Failure;
}

export interface Reporter {
  (event: Event): void;
}

export interface SuitePromise extends Promise<void> {
  cancel(): void;
}

const DEFAULT_CONFIG: Configuration = {
  verifyPasses: 2,
  warmups: 10,
  minSamples: 25,
  maxDurationMs: 15 /* seconds */ * 1e3,
  targetRelativeMarginOfError: 5.0,
};

export function runSuite(
  reporter: Reporter,
  benchmarkClasses: BenchmarkConstructor[],
  clientClasses: ClientConstructor[],
  rawExample: RawExample,
  config: Configuration = DEFAULT_CONFIG,
): SuitePromise {
  const context: Context = {
    reporter,
    config,
    rawExample,
    eventCommon: {
      clients: clientClasses.map(c => c.metadata),
      benchmarks: benchmarkClasses.map(b => b.metadata),
      example: rawExample,
      canceled: false,
    },
  };

  const innerPromise = _runSuite(context, benchmarkClasses, clientClasses);

  const promise: SuitePromise = innerPromise.then(() => {
    return context.canceled;
  }) as any;
  promise.cancel = function cancel() {
    context.canceled = true;
    context.eventCommon.canceled = true;
  };

  return promise;
}

export async function _runSuite(
  context: Context,
  benchmarkClasses: BenchmarkConstructor[],
  clientClasses: ClientConstructor[],
) {
  const { reporter, rawExample } = context;
  reporter({ ...context.eventCommon, subject: Subject.SUITE, type: Type.START });

  for (const BenchmarkClass of benchmarkClasses) {
    if (context.canceled) break;
    reporter({
      ...context.eventCommon,
      subject: Subject.BENCHMARK,
      type: Type.START,
      benchmark: BenchmarkClass.metadata,
    });

    for (const ClientClass of clientClasses) {
      if (context.canceled) break;
      await runClientBenchmark(context, BenchmarkClass, ClientClass);
    }

    reporter({
      ...context.eventCommon,
      subject: Subject.BENCHMARK,
      type: Type.END,
      benchmark: BenchmarkClass.metadata,
    });
  }

  reporter({ ...context.eventCommon, subject: Subject.SUITE, type: Type.END });
}

async function runClientBenchmark(
  context: Context,
  BenchmarkClass: BenchmarkConstructor,
  ClientClass: ClientConstructor,
) {
  const { reporter, rawExample, config } = context;

  const eventCommon = {
    ...context.eventCommon,
    benchmark: BenchmarkClass.metadata,
    client: ClientClass.metadata,
  };
  reporter({
    ...eventCommon,
    subject: Subject.CLIENT_BENCHMARK,
    type: Type.START,
  });

  const client: Client = new ClientClass();

  const { title, schema, partials } = rawExample;

  // Preprocess & Verify

  reporter({
    ...eventCommon,
    subject: Subject.CLIENT_BENCHMARK_PHASE,
    phase: Phase.VERIFY,
    type: Type.START,
  });
  const verifyStart = performanceNow();

  let example: Example;
  try {
    const rootExample = client.transformRawExample(rawExample, schema);
    example = {
      ...rootExample,
      title,
      partials: partials.map(p => client.transformRawExample(p, schema)),
    };
  } catch (error) {
    context.failure = { error, phase: Phase.VERIFY };
  }

  for (let i = 0; i < config.verifyPasses; i++) {
    if (context.canceled || context.failure) break;
    await runSingleBenchmarkPass(context, BenchmarkClass, ClientClass, example, Phase.VERIFY, {
      verify: true,
    });
  }
  reporter({
    ...eventCommon,
    subject: Subject.CLIENT_BENCHMARK_PHASE,
    phase: Phase.VERIFY,
    type: Type.END,
    duration: performanceNow() - verifyStart,
    failure: context.failure,
  });

  // Brief pause to give the UI (and maybe GC) a chance to catch up.
  await new Promise(resolve => setTimeout(resolve, 50));

  // Warmup

  if (!context.canceled && !context.failure) {
    reporter({
      ...eventCommon,
      subject: Subject.CLIENT_BENCHMARK_PHASE,
      phase: Phase.WARMUP,
      type: Type.START,
    });
    const warmupStart = performanceNow();
    for (let i = 0; i < config.warmups; i++) {
      if (context.canceled || context.failure) break;
      await runSingleBenchmarkPass(context, BenchmarkClass, ClientClass, example, Phase.WARMUP);
    }
    reporter({
      ...eventCommon,
      subject: Subject.CLIENT_BENCHMARK_PHASE,
      phase: Phase.WARMUP,
      type: Type.END,
      duration: performanceNow() - warmupStart,
      failure: context.failure,
    });
  }

  // Brief pause to give the UI (and maybe GC) a chance to catch up.
  await new Promise(resolve => setTimeout(resolve, 50));

  // Iterations

  const stats = new Stats();
  const runStart = performanceNow();
  if (!context.canceled && !context.failure) {
    while (true) {
      if (context.canceled || context.failure) break;

      reporter({
        ...eventCommon,
        subject: Subject.CLIENT_BENCHMARK_PHASE,
        phase: Phase.ITERATION,
        type: Type.START,
      });

      const duration = await runSingleBenchmarkPass(
        context,
        BenchmarkClass,
        ClientClass,
        example,
        Phase.ITERATION,
      );
      if (typeof duration !== 'undefined') {
        stats.push(duration);
      }

      reporter({
        ...eventCommon,
        subject: Subject.CLIENT_BENCHMARK_PHASE,
        phase: Phase.ITERATION,
        type: Type.END,
        duration,
        stats: statsSummary(stats),
        failure: context.failure,
      });

      if (isFinalIteration(config, runStart, stats)) break;
    }
  }

  // Brief pause to give the UI (and maybe GC) a chance to catch up.
  await new Promise(resolve => setTimeout(resolve, 50));

  // Remove outliers.
  const finalStats = statsSummary(stats.iqr());

  reporter({
    ...eventCommon,
    subject: Subject.CLIENT_BENCHMARK,
    type: Type.END,
    stats: finalStats,
    failure: context.failure,
  });

  // And we're done with the failure
  context.failure = undefined;

  return finalStats;
}

function isFinalIteration(config: Configuration, runStart: number, stats: Stats) {
  if (stats.length < config.minSamples) return false;
  if (performanceNow() - runStart > config.maxDurationMs) return true;
  if (percentRelativeMarginOfError(stats) <= config.targetRelativeMarginOfError) return true;
  return false;
}

async function runSingleBenchmarkPass(
  context: Context,
  BenchmarkClass: BenchmarkConstructor,
  ClientClass: ClientConstructor,
  example: Example,
  phase: Event.Phase,
  { verify = false } = {},
) {
  try {
    const benchmark: Benchmark = new BenchmarkClass(new ClientClass(), example);
    await benchmark.setup();

    const start = performanceNow();
    await benchmark.run();
    const duration = performanceNow() - start;

    if (verify) {
      await benchmark.verify();
    }
    await benchmark.teardown();

    // Yield the run loop.
    await new Promise(resolve => setTimeout(resolve, 0));

    return duration;
  } catch (error) {
    context.failure = { error, phase };
    return undefined;
  }
}

function percentRelativeMarginOfError(stats: Stats) {
  return (stats.moe() / stats.amean()) * 100;
}

function statsSummary(stats: Stats): Event.ClientBenchmarkStats {
  const [min, max] = stats.range();
  return {
    iterations: stats.length,
    min,
    mean: stats.amean(),
    max,
    marginOfError: stats.moe(),
    percentRelativeMarginOfError: percentRelativeMarginOfError(stats),
  };
}
