/**
 * Ensure that we (and our dependencies) can run in node, and browser
 * environments.
 */
export function polyfillEnvironment() {
  if (typeof window === 'undefined') {
    polyfillNode();
  } else {
    polyfillBrowser();
  }
}

function polyfillNode() {
  // Webpack exposes a require.context for loading directories of modules; this
  // allows us to rely on the same interface in Node for CLI usage.
  require('require-context/register'); // eslint-disable-line import/no-internal-modules, global-require

  const fs = require('fs'); // eslint-disable-line global-require, typescript/no-var-requires

  // In order to interoperate with Webpack, we need to be able to "statically"
  // load .gql files. Easiest way is to match Webpack's raw-loader behavior:
  require.extensions['.gql'] = function loadGraphQLDocument(module, filename) {
    module.exports = fs.readFileSync(filename, { encoding: 'utf-8' });
  };
  // require.extensions['.graphql.js'] = function loadGraphQLDocument(module, filename) {
  //   module.exports = {default: JSON.stringify(require(filename).default)};
  // };
}

function polyfillBrowser() {
  require('process').hrtime = require('browser-process-hrtime'); // eslint-disable-line global-require
}
