import * as path from 'path';

import { RawExample, Fragment, restructurePartialExamples } from '../src';

// Collect all files for examples in this directory (recursively)
const exampleContext = require.context(
  '.',
  true,
  /(metadata\.json|operation\.gql|response\.json|schema\.gql|relayArtifact\.graphql\.ts|fragment\.gql)$/,
);

const partialContext = require.context(
  '.',
  true,
  /(partial.+\.gql|partial.+Query\.graphql\.ts)$/,
)

const examplesByDirname: any = {};
// Walk all asset files, and group them into examples (by dirname).
exampleContext.keys().forEach(assetPath => {
  const examplePath = path.dirname(assetPath).replace(/(\.|\/)/gm,"");
  if (!examplesByDirname[examplePath]) {
    examplesByDirname[examplePath] = {};
  }

  let assetType = path.basename(assetPath, path.extname(assetPath));
  // Remove the secondary ".graphql" extension from relayArtifact
  assetType = assetType.replace(".graphql", "")
  const assetContent = exampleContext(assetPath)

  console.log(assetType)
  if (assetType == 'metadata') {
    examplesByDirname[examplePath] = { ...examplesByDirname[examplePath], ...assetContent };
  } else if (assetType == 'fragment') {
    examplesByDirname[examplePath][assetType] = {operation: assetContent}
  } else {
    examplesByDirname[examplePath][assetType] = assetContent;
  }
});

// Go through all partials and group them by example 
partialContext.keys().forEach(assetPath => {
  const partialBaseDir = path.dirname(assetPath.replace(/(^(\.\/)|^\.|^\/)/gm, "")).split("/")[0];
  if (!('rawPartials' in examplesByDirname[partialBaseDir])) {
    examplesByDirname[partialBaseDir].rawPartials = {};
  }

  let assetType = path.basename(assetPath, path.extname(assetPath));
  // Remove the secondary ".graphql" extension from relayArtifact
  assetType = assetType.replace(".graphql", "")
  const assetContent = partialContext(assetPath)

  if (!examplesByDirname[partialBaseDir].rawPartials[assetType.replace("Query", "")]) {
    examplesByDirname[partialBaseDir].rawPartials[assetType.replace("Query", "")] = {};
  }

  if (assetType.includes("Query")) {
    examplesByDirname[partialBaseDir].rawPartials[assetType.replace("Query", "")]["relayArtifact"] = assetContent;
  } else {
    examplesByDirname[partialBaseDir].rawPartials[assetType]["operation"] = assetContent;
  }
})

const examples: Array<RawExample> = [];
for (const dirname of Object.keys(examplesByDirname)) {
  // Parse fragment id pool from fragment path
  if("fragmentPath" in examplesByDirname[dirname]) {
    const responsePool = examplesByDirname[dirname]
      .fragmentPath.split(".").reduce((a, b) => a[b], examplesByDirname[dirname].response)      

    examplesByDirname[dirname].fragment.fragmentPool = responsePool
      .map((x) => ({
        typename: x.__typename,
        id: x.id,
        response: x
      }) as Fragment);

    delete examplesByDirname[dirname].fragmentPath
  }

  const example = examplesByDirname[dirname];
  if (!isRawExample(example)) {
    throw new Error(
      `examples/${dirname} is not a fully formed example. Required: title, operation, response, schema`,
    );
  }

  example.partials = restructurePartialExamples(example);
  delete example.rawPartials;

  examples.push(example);
}

function isRawExample(value: any): value is RawExample {
  return value.title && value.operation && value.response && value.schema;
}

console.log("Examples", examples)

export = examples;
