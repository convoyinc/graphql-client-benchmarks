/* eslint-disable no-console */
import { Event } from '../../Event';

const { Subject, Type } = Event;

export function consoleReporter(event: Event) {
  if (event.subject === Subject.SUITE && event.type === Type.START) {
    console.log(`Starting Benchmark Suite`);
    console.log();
  } else if (event.subject === Subject.BENCHMARK && event.type === Type.START) {
    console.log(`Benchmark: ${event.benchmark.title}`);
  } else if (event.subject === Subject.CLIENT_BENCHMARK && event.type === Type.END) {
    console.log(`  ${event.client.name}:`, event.stats, event.failure);
  } else if (event.subject === Subject.BENCHMARK && event.type === Type.END) {
    console.log();
  } else if (event.subject === Subject.SUITE && event.type === Type.END) {
    console.log(`Benchmark Suite Complete`);
  }
}
/* eslint-enable no-console */
