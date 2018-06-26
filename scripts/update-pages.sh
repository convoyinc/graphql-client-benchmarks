#!/usr/bin/env bash
set -x

CURRENT_COMMIT=$(git rev-parse HEAD)

rm -rf ./dist
git clone -b gh-pages https://github.com/convoyinc/graphql-client-benchmarks ./dist

./scripts/compile-web.sh

cd ./dist
git add .
git commit -m "Built web reporter for ${CURRENT_COMMIT}"
git push origin gh-pages
