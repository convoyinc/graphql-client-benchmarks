declare module 'ink' {
  import { Chalk } from 'chalk';

  type ColorPropNames = { [Key in keyof Chalk]: Chalk[Key] extends Chalk ? Key : never }[keyof Chalk];
  type ColorProps = { [Key in ColorPropNames]?: boolean };
  export class Color extends Component<ColorProps> {}

  interface IndentProps {
    size: number;
  }
  export class Indent extends Component<IndentProps> {}
}
