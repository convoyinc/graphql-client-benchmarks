import { BenchmarkMetadata } from './Benchmark';
import { ClientMetadata } from './Client';
import { RawExample } from './Example';

export namespace Event {
  export enum Subject {
    SUITE = 'suite',
    BENCHMARK = 'benchmark',
    CLIENT_BENCHMARK = 'client_benchmark',
    CLIENT_BENCHMARK_PHASE = 'client_benchmark_phase',
  }

  export enum Type {
    START = 'start',
    END = 'end',
  }

  // Specific to client benchmarks.
  export enum Phase {
    VERIFY = 'verify',
    WARMUP = 'warmup',
    ITERATION = 'iteration',
  }

  // Values common to all suite events.
  export interface SuiteValues {
    example: RawExample;
    clients: ClientMetadata[];
    benchmarks: BenchmarkMetadata[];
    canceled: boolean;
  }

  // Values common to all benchmark events.
  export interface BenchmarkValues extends SuiteValues {
    benchmark: BenchmarkMetadata;
  }

  // Values common to all client benchmark events.
  export interface ClientBenchmarkValues extends BenchmarkValues {
    client: ClientMetadata;
  }

  export interface ClientBenchmarkStats {
    iterations: number;
    min: number;
    mean: number;
    max: number;
    marginOfError: number;
    percentRelativeMarginOfError: number;
  }

  export interface Failure {
    error: Error;
    phase: Phase;
  }

  // The Events

  export interface SuiteStart extends SuiteValues {
    subject: Subject.SUITE;
    type: Type.START;
  }

  export interface BenchmarkStart extends BenchmarkValues {
    subject: Subject.BENCHMARK;
    type: Type.START;
  }

  export interface ClientBenchmarkStart extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK;
    type: Type.START;
  }

  export interface ClientBenchmarkPhaseVerifyStart extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK_PHASE;
    phase: Phase.VERIFY;
    type: Type.START;
  }

  export interface ClientBenchmarkPhaseVerifyEnd extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK_PHASE;
    phase: Phase.VERIFY;
    type: Type.END;
    duration: number;
    failure: Failure | undefined;
  }

  export interface ClientBenchmarkPhaseWarmupStart extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK_PHASE;
    phase: Phase.WARMUP;
    type: Type.START;
  }

  export interface ClientBenchmarkPhaseWarmupEnd extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK_PHASE;
    phase: Phase.WARMUP;
    type: Type.END;
    duration: number;
    failure: Failure | undefined;
  }

  export interface ClientBenchmarkPhaseIterationStart extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK_PHASE;
    phase: Phase.ITERATION;
    type: Type.START;
  }

  export interface ClientBenchmarkPhaseIterationEnd extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK_PHASE;
    phase: Phase.ITERATION;
    type: Type.END;
    duration: number;
    stats: ClientBenchmarkStats;
    failure: Failure | undefined;
  }

  export interface ClientBenchmarkEnd extends ClientBenchmarkValues {
    subject: Subject.CLIENT_BENCHMARK;
    type: Type.END;
    stats: ClientBenchmarkStats;
    failure: Failure | undefined;
  }

  export interface BenchmarkEnd extends BenchmarkValues {
    subject: Subject.BENCHMARK;
    type: Type.END;
  }

  export interface SuiteEnd extends SuiteValues {
    subject: Subject.SUITE;
    type: Type.END;
  }
}

export type ClientBenchmarkPhaseEvent =
  | Event.ClientBenchmarkPhaseWarmupStart
  | Event.ClientBenchmarkPhaseWarmupEnd
  | Event.ClientBenchmarkPhaseVerifyStart
  | Event.ClientBenchmarkPhaseVerifyEnd
  | Event.ClientBenchmarkPhaseIterationStart
  | Event.ClientBenchmarkPhaseIterationEnd;

export type Event =
  | Event.SuiteStart
  | Event.BenchmarkStart
  | Event.ClientBenchmarkStart
  | ClientBenchmarkPhaseEvent
  | Event.ClientBenchmarkEnd
  | Event.BenchmarkEnd
  | Event.SuiteEnd;
