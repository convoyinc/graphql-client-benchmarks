import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// // Assert that we export values that conform to Webpack's configuration.
// function assertValidConfiguration(config: webpack.Configuration) {}
// assertValidConfiguration(exports as typeof import('./webpack.config'));

// https://webpack.js.org/concepts/mode/
export const mode = 'production';

// https://webpack.js.org/configuration/entry-context/#context
export const context = path.resolve(__dirname, '..', '..', '..');

// https://webpack.js.org/configuration/entry-context/#entry
export const entry = './src/reporters/web/entry';

// https://webpack.js.org/guides/development/#using-source-maps
export const devtool = 'inline-source-map';

// https://webpack.js.org/guides/development/#using-webpack-dev-server
export const devServer = {
  static: './dist'
}
export const optimization = {
  runtimeChunk: 'single'
}

// // https://webpack.js.org/concepts/output/
// export const output = {
//   path: path.resolve(__dirname, 'dist'),
//   filename: "[name].bundle.js"
// }

// https://webpack.js.org/configuration/resolve/
export const resolve = {
  // https://webpack.js.org/configuration/resolve/#resolve-extensions
  extensions: ['.ts', '.tsx', '.js'],
  fallback: {
    "path": require.resolve("path-browserify"),
    "process": require.resolve("process")
  }
};

// https://webpack.js.org/configuration/module/
export const module = {
  // https://webpack.js.org/configuration/module/#module-rules
  rules: [
    // https://github.com/TypeStrong/ts-loader#configuration
    { test: /\.tsx?$/, loader: 'ts-loader' },
    // https://github.com/webpack-contrib/raw-loader#getting-started
    { test: /\.gql$/, loader: 'raw-loader' },
    // https://github.com/graphql/graphql-js/issues/1272
    {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto' as 'javascript/auto', // screw you, type widening.
    },
  ],
};

export const plugins = [
  // https://github.com/jantimon/html-webpack-plugin#options
  new HtmlWebpackPlugin({
    title: `GraphQL Client Benchmarks`,
  }),
  new webpack.ProvidePlugin({
    process: 'process'
  }),
  // Ignore Node-side polyfills that we depend upon.
  new webpack.IgnorePlugin({resourceRegExp: /(^|\/)(fs|require-context)(\/|$)/}),
  // relay-compiler and its transitive dependencies expect a Node environment,
  // but we are careful to avoid Node-dependent functionality.
  new webpack.IgnorePlugin({resourceRegExp: /(^|\/)(child_process|fs|fb-watchman)(\/|$)/}),
  // Similarly, make sure that webpack doesn't suck in our other reporters.
  new webpack.IgnorePlugin({resourceRegExp: /src\/reporters\/(?!web)[^/]+(\/|$)/}),
];

// https://webpack.js.org/configuration/externals/
export const externals = {};

