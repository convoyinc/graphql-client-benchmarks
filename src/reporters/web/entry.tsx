import * as react from 'react';
import { render } from 'react-dom';

// So that we can compile all JSX logic for Ink, and for React, with the same
// TypeScript configuration.
(global as any).React = react;

import { Root } from './Root';

const renderTarget = document.createElement('div');
document.body.appendChild(renderTarget);
render(<Root />, renderTarget);

if (module.hot) {
  module.hot.dispose(() => {
    renderTarget.remove();
  });
}
