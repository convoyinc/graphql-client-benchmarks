import { Component } from 'ink';

import { Event } from '../../Event';

import { SuiteSummary } from './SuiteSummary';
import { Summary, SuiteSummaryCollector } from '../../reporting';

interface RootProps {
  onExit: () => void;
  registerEventHandler: (onEvent: (event: Event) => void) => void;
}

// Update at a lowish framerate to give priority to benchmarks.
const UPDATE_DELAY_MS = 50;

export class Root extends Component<RootProps> {
  private _summary?: Summary;
  // And update at a slower framerate
  private _updateTimer: any;

  private _collector = new SuiteSummaryCollector(
    summary => {
      this._summary = summary;

      if (this._updateTimer) return;
      this._updateTimer = setTimeout(() => this.forceUpdate(), UPDATE_DELAY_MS);
    },
    () => {
      this.forceUpdate();
    },
  );

  componentDidMount() {
    this.props.registerEventHandler(this._collector.consumeEvent);
  }

  render() {
    if (this._updateTimer) {
      clearTimeout(this._updateTimer);
      this._updateTimer = null;
    }

    if (!this._summary) return '';
    
    return <SuiteSummary {...this._summary} />;
  }

  componentWillUnmount() {
    this.props.onExit();
  }
}
