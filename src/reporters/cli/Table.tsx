import { Component, renderToString } from 'ink';
import LeTable from 'le-table';

export class Table extends Component<Table.Props> {
  render() {
    const { children, ...options } = this.props;

    const table = new LeTable(options);
    for (const row of toArray(children)) {
      const cells = toArray(row.props.children).map(this._renderCell);
      table.addRow(cells);
    }

    return table.stringify();
  }

  _renderCell = (cell: React.ReactElement<Table.CellProps>) => {
    const { children, ...options } = cell.props;

    return {
      text: renderToString(<span>{children}</span>),
      data: options,
    };
  };
}

export namespace Table {
  type OnlyElementType<TComponent> = React.ReactElement<TComponent> | OnlyElementTypeArray<TComponent>;
  interface OnlyElementTypeArray<TComponent> extends Array<OnlyElementType<TComponent>> {}

  // https://www.npmjs.com/package/le-table#params
  export interface Props {
    children: OnlyElementType<Row>;
    cell?: CellProps;
    marks?: {
      nw: string;
      n: string;
      ne: string;
      e: string;
      se: string;
      s: string;
      sw: string;
      w: string;
      b: string;
      mt: string;
      ml: string;
      mr: string;
      mb: string;
      mm: string;
    };
    noAnsi?: boolean;
  }

  export interface RowProps extends CellProps {
    children: OnlyElementType<Cell>;
  }

  export interface CellProps {
    children: React.ReactNode;
    hAlign?: 'left' | 'center' | 'right';
    vAlign?: 'top' | 'middle' | 'bottom';
    autoEOL?: boolean;
    stretch?: boolean;
    width?: number;
    height?: number;
  }

  export class Row extends Component<CellProps> {}

  export class Cell extends Component<CellProps> {
    render() {
      return <span>{this.props.children}</span>;
    }
  }
}

function toArray(value: any): any[] {
  return Array.isArray(value) ? value : [value];
}
