import { render } from 'ink';

import benchmarks from '../../../benchmarks';
import examples from '../../../examples';
import clients from '../../../clients';
import { Event } from '../../Event';
import { Root } from './Root';
import { runSuite, SuitePromise, Reporter } from '../../execution';

const [example] = examples;

export async function main() {
  let componentEventHandler;
  function registerEventHandler(eventHandler) {
    componentEventHandler = eventHandler;
  }
  function reporter(event: Event) {
    if (!componentEventHandler) return;
    componentEventHandler(event);
  }

  let suitePromise: SuitePromise; // eslint-disable-line prefer-const
  function onExit() {
    if (!suitePromise) return;
    suitePromise.cancel();
  }

  const stopRendering = render(<Root registerEventHandler={registerEventHandler} onExit={onExit} />);
  suitePromise = runSuite(reporter, benchmarks, clients, example);

  const canceled = await suitePromise;
  // Give it a chance to render a final time.
  await new Promise(resolve => setTimeout(resolve, 0));

  if (!canceled) {
    stopRendering();
  }
}
