import * as dapper from '@convoy/dapper';

import benchmarks from '../../../benchmarks';
import clients from '../../../clients';
import examples from '../../../examples';
import { Summary, SuiteSummaryCollector } from '../../reporting';
import { runSuite, SuitePromise } from '../../execution';
import { SuiteSummary } from './SuiteSummary';
import { RawExample } from '../../Example';
import { ExampleEditor } from './ExampleEditor';


// Update at a lowish framerate to give priority to benchmarks.
const UPDATE_DELAY_MS = 50;

enum RunState {
  PENDING,
  RUNNING,
  CANCELED,
  COMPLETE,
}

interface RootState {
  runState: RunState;
  editing: boolean;
  examples: RawExample[];
  exampleIndex: number;
}

const MODES: { [key: string]: (args: { state?: RootState }) => boolean } = {
  pending: ({ state }) => !state || state.runState === RunState.PENDING,
  running: ({ state }) => state && state.runState === RunState.RUNNING,
  canceled: ({ state }) => state && state.runState === RunState.CANCELED,
  complete: ({ state }) => state && state.runState === RunState.COMPLETE,
  idle: ({ state }) => !state || state.runState !== RunState.RUNNING,
};

const STYLES = dapper.compile({
  global: {
    fontFamily: `"Proxima Nova", ProximaNova, "Helvetica Neue", Helvetica, sans-serif`,
    fontSize: 16,
    lineHeight: '22px',
  },
  root: {
    border: `3px solid #15455a`,
    backgroundColor: '#0b2127',
    color: '#ffffff',
  },
  header: {
    display: 'flex',
    background: 'linear-gradient(to bottom, #15455a, #0b2127)',
    color: '#ffffff',
    padding: 10,
    fontSize: 20,
    lineHeight: '28px',
    'button, select': {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      backgroundColor: 'transparent',
      color: '#ffffff',
    },
  },
  status: {
    $running: {
      color: '#5b666b',
    },
    $complete: {
      color: '#4aa54f',
    },
    $canceled: {
      color: '#f8cc1c',
    },
  },
  about: {
    flex: 1,
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  buttons: {
    button: {
      marginLeft: 14,
    },
  },
  exampleSelectorContainer: {
    flex: 1,
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    lineHeight: '34px',
  },
  toggle: {
    $idle: {
      backgroundColor: '#f7f9fa',
      color: '#125571',
    },
  },
  summary: {
    $canceled: {
      // opacity: 0.5,
    },
  },
});

export class Root extends React.PureComponent<{}, RootState> {
  private _suitePromise: SuitePromise;
  // We collect summary updates as they come in…
  private _collector?: SuiteSummaryCollector;
  private _summary?: Summary;
  // …and display those at a slower framerate
  private _updateTimer: any;

  styles = dapper.reactTo(this, STYLES, MODES);

  state = {
    runState: RunState.PENDING,
    editing: false,
    examples,
    exampleIndex: 0,
  };

  componentDidMount() {
    if (module.hot) {
      module.hot.dispose(() => {
        this._suitePromise.cancel();
      });
    }
  }

  render() {
    if (this._updateTimer) {
      clearTimeout(this._updateTimer);
      this._updateTimer = null;
    }

    return (
      <div className={this.styles.global}>
        <div className={this.styles.root}>
          {this._renderHeader()}
          {!!this._summary && <SuiteSummary {...this._summary} className={this.styles.summary} />}
        </div>
        {this._maybeRenderEditor()}
      </div>
    );
  }

  private _renderHeader() {
    const { runState } = this.state;

    return (
      <header className={this.styles.header}>
        <div className={this.styles.about}>
          <div className={this.styles.title}>GraphQL Client Benchmark Suite</div>
          <div className={this.styles.status}>{this._statusLabel()}</div>
        </div>
        <div className={this.styles.controls}>
          <div className={this.styles.exampleSelectorContainer}>
            Example Query: {this._renderExampleSelector()}
          </div>
          <div className={this.styles.buttons}>
            <button onClick={this._onEditCurrentExample}>Edit</button>
            <button onClick={this._onToggleSuite} className={this.styles.toggle}>
              {runState === RunState.RUNNING ? 'Stop' : 'Start'}
            </button>
          </div>
        </div>
      </header>
    );
  }

  private _statusLabel() {
    const { runState } = this.state;
    if (runState === RunState.RUNNING) {
      return 'running…';
    } else if (runState === RunState.CANCELED) {
      return 'canceled';
    } else if (runState === RunState.COMPLETE) {
      return 'benchmark suite complete';
    } else {
      return null;
    }
  }

  private _renderExampleSelector() {
    const { examples, exampleIndex } = this.state;
    return (
      <select className={this.styles.exampleSelectorContainer} value={exampleIndex} onChange={this._onChangeExample}>
        {examples.map((example, index) => (
          <option value={index} key={index}>
            {example.title}
          </option>
        ))}
        <option value={examples.length}>Add Query…</option>
      </select>
    );
  }

  private _maybeRenderEditor() {
    const { editing, examples, exampleIndex } = this.state;
    if (!editing) return null;

    const example: RawExample = examples[exampleIndex] || {
      title: `New Example`,
      operation: '',
      schema: '',
      response: {},
      partials: [],
    };

    return (
      <ExampleEditor
        example={example}
        onChange={this._onCurrentExampleEdited}
        onCancel={this._onEditorCanceled}
      />
    );
  }

  start() {
    const { examples, exampleIndex } = this.state;

    if (this._suitePromise) {
      // Cancel, wait for it, and have the user press again.
      this.stop();
      return;
    }

    this._collector = new SuiteSummaryCollector(
      summary => {
        this._summary = summary;

        if (this._updateTimer) return;
        this._updateTimer = setTimeout(() => this.forceUpdate(), UPDATE_DELAY_MS);
      },
      ({ benchmark, client, phase, error }) => {
        console.error(`Error during ${phase} of`, { benchmark, client }, error);
      },
    );

    const example = examples[exampleIndex];
    this._suitePromise = runSuite(this._collector.consumeEvent, benchmarks, clients, example);
    this._suitePromise.then(canceled => {
      this.setState({
        runState: canceled !== null ? RunState.CANCELED : RunState.COMPLETE,
      });
      this._suitePromise = null;
    });

    this.setState({
      runState: RunState.RUNNING,
    });
  }

  stop() {
    if (!this._suitePromise) return;
    this._suitePromise.cancel();
  }

  private _onToggleSuite = () => {
    const { runState } = this.state;

    if (runState === RunState.RUNNING) {
      this.stop();
    } else {
      this.start();
    }
  };

  private _onEditCurrentExample = () => {
    this.setState({ editing: true });
  };

  private _onCurrentExampleEdited = (newExample: RawExample) => {
    const { examples, exampleIndex } = this.state;

    const newExamples = [...examples];
    newExamples[exampleIndex] = newExample;

    this.setState({ examples: newExamples, editing: false });
  };

  private _onEditorCanceled = () => {
    this.setState({ editing: false });
  };

  private _onChangeExample = event => {
    const { examples } = this.state;

    this.stop(); // Always.

    const exampleIndex = parseInt(event.target.value);
    // Are we adding a new one?
    if (exampleIndex >= examples.length) {
      this.setState({ exampleIndex, editing: true });
    } else {
      this.setState({ exampleIndex });
    }
  };
}
