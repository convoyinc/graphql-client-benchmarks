import * as dapper from '@convoy/dapper';
import chroma from 'chroma-js';

import { Results, Summary } from '../../reporting';

const BACKGROUND_COLOR_SCALE = chroma.scale([
  chroma('#4aa54f').luminance(0.75),
  chroma('#f8cc1c').luminance(0.75),
  chroma('#ee251a').luminance(0.75),
]);

export interface ResultsCellProps extends Results {
  className?: string;
}

const MODES: { [key: string]: (args: { props: ResultsCellProps }) => boolean } = {
  pending: ({ props }) => !props.phase && !props.stats,
  active: ({ props }) => !!props.phase && !props.complete,
  iterating: ({ props }) => !!props.stats && !props.complete,
  complete: ({ props }) => props.complete,
  error: ({ props }) => !!props.failure,
};

const STYLES = dapper.compile({
  root: {
    transition: 'all 250ms ease-in-out',
    willChange: 'transition',
    $pending: {
      color: '#5b666b',
    },
    $active: {
      color: '#f7f9fa',
    },
    $iterating: {
      backgroundColor: '#14a9e6',
    },
    $complete: {
      backgroundColor: '#f7f9fa',
      color: '#0b2127',
    },
    $error: {
      backgroundColor: '#a11a12',
      color: '#f7f9fa',
    },
  },
  status: {
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
  },
  mean: {
    whiteSpace: 'nowrap',
  },
});

export class ResultsCell extends React.PureComponent<ResultsCellProps> {
  styles = dapper.reactTo(this, STYLES, MODES);

  render() {
    const { className, stats, failure } = this.props;

    let content;
    if (failure) {
      content = this._renderFailure();
    } else if (stats) {
      content = this._renderStats();
    } else {
      content = this._renderPhase();
    }

    return (
      <td className={`${this.styles.root} ${className}`} style={this._inlineStyles()}>
        {content}
      </td>
    );
  }

  _renderFailure() {
    const { phase } = this.props.failure!;

    return <div className={this.styles.error}>Error during {phase}</div>;
  }

  _renderStats() {
    const { stats } = this.props;
    return (
      <React.Fragment>
        <div>
          mean:{' '}
          <strong className={this.styles.mean}>
            {stats.mean.toFixed(3)}ms ±{stats.marginOfError.toFixed(3)}ms
          </strong>
        </div>
        <div>confidence: {(100 - stats.percentRelativeMarginOfError).toFixed(2)}%</div>
        <div>
          samples: {stats.iterations} range: {stats.min.toFixed(0)}-{stats.max.toFixed(0)}ms
        </div>
      </React.Fragment>
    );
  }

  _renderPhase() {
    const { phase } = this.props;
    return <div className={this.styles.status}>{phase || 'pending'}…</div>;
  }

  _inlineStyles() {
    const { percentOfRange } = this.props;
    if (typeof percentOfRange !== 'number') return undefined;

    // Color on a simple curve, assuming slower results are more likely to be
    // far away from the rest of the results.
    const colorOffset = Math.sqrt(percentOfRange);

    return {
      backgroundColor: BACKGROUND_COLOR_SCALE(colorOffset).css(),
    };
  }
}
