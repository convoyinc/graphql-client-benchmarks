import * as path from 'path';

import { RawExample, generatePartialExamples } from '../src';

// Collect all files for examples in this directory (recursively)
const exampleContext = require.context(
  '.',
  true,
  /(metadata\.json|operation\.gql|response\.json|schema\.gql)$/,
);

const examplesByDirname = {};
// Walk all asset files, and group them into examples (by dirname).
exampleContext.keys().forEach(assetPath => {
  const examplePath = path.dirname(assetPath);
  if (!examplesByDirname[examplePath]) {
    examplesByDirname[examplePath] = {};
  }

  const assetType = path.basename(assetPath, path.extname(assetPath));
  const assetContent = exampleContext(assetPath);

  if (assetType == 'metadata') {
    examplesByDirname[examplePath] = { ...examplesByDirname[examplePath], ...assetContent };
  } else {
    examplesByDirname[examplePath][assetType] = assetContent;
  }
});

const examples: RawExample[] = [];
for (const dirname of Object.keys(examplesByDirname)) {
  const example = examplesByDirname[dirname];
  if (!isRawExample(example)) {
    throw new Error(
      `examples/${dirname} is not a fully formed example. Required: title, operation, response, schema`,
    );
  }

  example.partials = generatePartialExamples(example);

  examples.push(example);
}

function isRawExample(value: any): value is RawExample {
  return value.title && value.operation && value.response && value.schema;
}

export = examples;
