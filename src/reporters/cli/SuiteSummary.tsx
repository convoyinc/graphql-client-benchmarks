// import { Text, Component, Indent, renderToString } from 'ink';
import {Text} from '../../../node_modules/ink';
import {render, Indent, Component} from 'ink'

import { Table } from './Table';
import { Summary } from '../../reporting';

export class SuiteSummary extends Component<Summary> {
  render() {
    const { title } = this.props;
    return (
      <div>
        <Indent {...{size:1}}>
          <div />
          <div>
            <Text color="yellow">GraphQL Client Benchmark Suite</Text>
          </div>
          <div />
          <div>
            Example Query: <Text color="blue">{title}</Text>
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
          <Text> Benchmarks </Text>
        </Table.Cell>
        {clients.map(client => (
          <Table.Cell hAlign="center">
            <Text color="yellow"> {client.name} </Text>
          </Table.Cell>
        ))}
      </Table.Row>
    );
  }

  private _renderRows() {
    const { clients, benchmarks } = this.props;

    return benchmarks.map(benchmark => (
      <Table.Row>
        <Table.Cell width={40} height={3} stretch={false}>
          <Text color="blue"> {benchmark.title} </Text>
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
        <Table.Cell hAlign="center" vAlign="middle">
          <Text color="white" backgroundColor="bgRed">
            {' '}
            Error during {result.phase}{' '}
          </Text>
          {'\u200b'}
        </Table.Cell>
      );
    } else if (!result || !result.stats) {
      const status = result ? result.phase : 'pending';

      return (
        <Table.Cell hAlign="center" vAlign="middle">
          <Text>{status}…</Text>
        </Table.Cell>
      );
    }
    const { complete, stats } = result;

    return (
      <Table.Cell>
        <Text>
          {'\u200b'}
          mean: {stats.mean.toFixed(3)}ms ±{stats.marginOfError.toFixed(3)}ms
          {'\n'}
          {'\u200b'}
          confidence: {(100 - stats.percentRelativeMarginOfError).toFixed(2)}%
          {'\n'}
          {'\u200b'}
          count: {stats.iterations} range: {stats.min.toFixed(0)}-{stats.max.toFixed(0)}ms
        </Text>
      </Table.Cell>
    );
  }
}
