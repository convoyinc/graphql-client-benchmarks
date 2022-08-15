import { ClientMetadata } from './Client';
import { BenchmarkMetadata } from './Benchmark';
import { Event } from './Event';

const { Subject, Type, Phase } = Event;

export interface Results {
  complete?: boolean;
  phase?: Event.Phase;
  stats?: Event.ClientBenchmarkStats;
  percentOfRange?: number;
  failure?: Event.Failure;
}

export interface Summary {
  title: string;
  clients: ClientMetadata[];
  benchmarks: BenchmarkMetadata[];
  running: boolean;
  canceled: boolean;
  results: {
    [benchmarkTitle: string]: {
      [clientName: string]: Results;
    };
  };
}

export interface SummaryUpdateHandler {
  (summary: Summary): void;
}

export interface SummaryErrorHandler {
  (result: { benchmark: string; client: string; phase: Event.Phase; error: Error }): void;
}

/**
 * A helper that collects suite run summaries for tabular display.
 */
export class SuiteSummaryCollector {
  private _summary: Summary;

  constructor(private onUpdate: SummaryUpdateHandler, private onError?: SummaryErrorHandler) {}

  /**
   * Must be called with every event emitted by the suite runner (a reporter).
   */
  consumeEvent = (event: Event) => {
    if (event.subject === Subject.SUITE && event.type === Type.START) {
      this._summary = {
        title: event.example.title,
        benchmarks: event.benchmarks,
        clients: event.clients,
        running: true,
        canceled: false,
        results: {},
      };
      this.onUpdate(this._summary);
    } else if (event.subject === Subject.CLIENT_BENCHMARK_PHASE && event.type === Type.START) {
      this._updateBenchmarkResult(event, { phase: event.phase });
    } else if (
      event.subject === Subject.CLIENT_BENCHMARK_PHASE &&
      event.phase === Phase.ITERATION &&
      event.type === Type.END
    ) {
      this._updateBenchmarkResult(event, { stats: event.stats });
    } else if (event.subject === Subject.CLIENT_BENCHMARK_PHASE && event.type === Type.END && event.failure) {
      if (this.onError) {
        this.onError({
          benchmark: event.benchmark.title,
          client: event.client.name,
          phase: event.phase,
          error: event.failure.error,
        });
      }
    } else if (event.subject === Subject.CLIENT_BENCHMARK && event.type === Type.END) {
      this._updateBenchmarkResult(event, { complete: true, failure: event.failure });      
    } else if (event.subject === Subject.BENCHMARK && event.type === Type.END) {
      const { benchmark, clients } = event;
      const benchmarkResults = this._summary.results[benchmark.title];

      let minMean = Infinity;
      let maxMean = 0;
      for (const client of clients) {
        const clientResults = benchmarkResults[client.name];
        if (!clientResults || !clientResults.stats) return; // We interrupted the benchmark

        const { mean } = clientResults.stats;
        minMean = Math.min(mean, minMean);
        maxMean = Math.max(mean, maxMean);
      }

      for (const client of clients) {
        const { mean } = benchmarkResults[client.name].stats!;
        this._updateBenchmarkResult(
          { benchmark, client },
          {
            percentOfRange: (mean - minMean) / (maxMean - minMean),
          },
        );
      }
    } else if (event.subject === Subject.SUITE && event.type === Type.END) {
      this._summary.running = false;
      this._summary.canceled = event.canceled;
      this.onUpdate(this._summary);
    }
  };

  private _updateBenchmarkResult(
    { benchmark, client }: { benchmark: BenchmarkMetadata; client: ClientMetadata },
    update: Partial<Results>,
  ) {
    const { results } = this._summary;
    this._summary = {
      ...this._summary,
      results: {
        ...results,
        [benchmark.title]: {
          ...results[benchmark.title],
          [client.name]: {
            ...(results[benchmark.title] && results[benchmark.title][client.name]),
            ...update,
          },
        },
      },
    };

    this.onUpdate(this._summary);
  }
}
