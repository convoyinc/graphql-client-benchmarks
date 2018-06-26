#!/usr/bin/env bash
set -x

./node_modules/.bin/webpack \
  --config ./src/reporters/web/webpack.config.js \
  --mode production
