declare module 'ink' {
  import * as react from 'react';

  export import h = react.createElement;
  export import Component = react.Component;

  export function render(tree: JSX.Element, prevTree?: JSX.Element): () => void;
  export function renderToString(element: JSX.Element): string;
}
