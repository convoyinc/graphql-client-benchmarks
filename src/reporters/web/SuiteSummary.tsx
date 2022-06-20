import * as dapper from '@convoy/dapper';

import { Summary } from '../../reporting';
import { ResultsCell } from './ResultsCell';

const STYLES = dapper.compile({
  root: {
    borderCollapse: 'collapse',
    'td, th': {
      padding: `5px 10px`,
      border: '1px solid #0b2127',
    },
    th: {
      color: '#e6e8e9',
      fontWeight: 'normal',
      whiteSpace: 'pre',
    },
  },
  infoCell: {
    width: 200,
  },
  resultsCell: {
    width: 300,
    height: 66,
  },
});

export interface SuiteSummaryProps extends Summary {
  className?: string;
}

export class SuiteSummary extends React.PureComponent<SuiteSummaryProps> {
  styles = dapper.reactTo(this, STYLES);

  render() {
    const { className, title } = this.props;

    return (
      <table className={`${this.styles.root} ${className}`}>
        <thead>{this._renderHeader()}</thead>
        <tbody>{this._renderRows()}</tbody>
      </table>
    );
  }

  private _renderHeader() {
    const { clients } = this.props;
    if (!clients) return null;

    return (
      <tr>
        <th />
        {clients.map(client => (
          <th key={client.name}>{client.name.replace(' (', '\n(')}</th>
        ))}
      </tr>
    );
  }

  private _renderRows() {
    const { clients, benchmarks } = this.props;
    if (!benchmarks) return null;

    return benchmarks.map(benchmark => (
      <tr key={benchmark.title}>
        <th className={this.styles.infoCell}>{benchmark.title.replace(' (', '\n(')}</th>
        {clients.map(client => this._renderResults(benchmark.title, client.name))}
      </tr>
    ));
  }

  private _renderResults(benchmarkTitle: string, clientName: string) {
    const { results } = this.props;
    const result = (results[benchmarkTitle] && results[benchmarkTitle][clientName]) || {};

    return <ResultsCell {...result} className={this.styles.resultsCell} key={clientName} />;
  }
}
