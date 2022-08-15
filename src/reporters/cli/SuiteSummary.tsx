import { Color, Component, Indent, renderToString } from 'ink';

import { Table } from './Table';
import { Summary } from '../../reporting';

export class SuiteSummary extends Component<Summary> {
  render() {
    const { title, running, canceled } = this.props;
    return (
      <div>
        <Indent size={1}>
          <div />
          <div>
            <Color yellow>GraphQL Client Benchmark Suite</Color>
          </div>
          <div />
          <div>
            Example Query: <Color blue>{title}</Color>
          </div>
        </Indent>
        <div />
        <Table>
          {this._renderHeader()}
          {this._renderRows()}
        </Table>
      </div>
    );
  }

  private _renderHeader() {
    const { clients } = this.props;

    return (
      <Table.Row>
        <Table.Cell width={40} height={3} stretch={false} hAlign="center">
          <Color> Benchmarks </Color>
        </Table.Cell>
        {clients.map(client => (
          <Table.Cell hAlign="center" height={3}>
            <Color yellow> {client.name} </Color>
          </Table.Cell>
        ))}
      </Table.Row>
    );
  }

  private _renderRows() {
    const { clients, benchmarks } = this.props;

    return benchmarks.map(benchmark => (
      <Table.Row>
        <Table.Cell width={40} height={5} stretch={false}>
          <Color blue> {benchmark.title} </Color>
        </Table.Cell>
        {clients.map(client => this._renderStats(benchmark.title, client.name))}
      </Table.Row>
    ));
  }

  private _renderStats(benchmarkTitle: string, clientName: string) {
    const { results } = this.props;
    const result = results[benchmarkTitle] && results[benchmarkTitle][clientName];

    if (result && result.failure) {
      return (
        <Table.Cell hAlign="center" vAlign="middle" height={5}>
          <Color white bgRed>
            {' '}
            Error during {result.phase} {String(result.failure.error.message)}
          </Color>
          {'\u200b'}
        </Table.Cell>
      );
    } else if (!result || !result.stats) {
      const status = result ? result.phase : 'pending';

      return (
        <Table.Cell hAlign="center" vAlign="middle" height={5}>
          <Color dim>{status}…</Color>
        </Table.Cell>
      );
    }
    const { complete, stats } = result;
      
    return (
      <Table.Cell height={5}>
        <Color dim={!complete}>        
          {'\u200b'}
          mean: {stats.mean.toFixed(3)}ms ±{stats.marginOfError.toFixed(3)}ms
          {'\n'}
          {'\u200b'}
          confidence: {(100 - stats.percentRelativeMarginOfError).toFixed(2)}%
          {'\n'}
          {'\u200b'}
          count: {stats.iterations} range: {stats.min.toFixed(0)}-{stats.max.toFixed(0)}ms
          {'\n'}
          {'\u200b'}
          memory:
          {'\n'}
          {'\u200b'}
          -- Heap used DIFF: {Math.floor((stats.memoryUsage.heapUsed - stats.memoryUsage.heapUsedBase)/1000)}kB
          {/* {'\n'}
          {'\u200b'}
          -- Heap Total DIFF: {Math.floor((stats.memoryUsage.heapTotal - stats.memoryUsage.heapTotalBase)/1000)}kB                 */}
        </Color>
      </Table.Cell>
    );
  }

  writeData() {
    const {results} = this.props
    console.log(results)
  }
}
