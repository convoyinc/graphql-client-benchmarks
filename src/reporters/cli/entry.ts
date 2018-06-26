#!/usr/bin/env node
import { h } from 'ink';

import { polyfillEnvironment } from '../../environment';

// So that we can load examples, benchmarks, etc.
polyfillEnvironment();
// So that we can compile all JSX logic for Ink, and for React, with the same
// TypeScript configuration.
(global as any).React = { createElement: h };

// Aaaaand go (lazily).
require('./main')
  .main()
  .catch(error => process.stderr.write(error.stack));
