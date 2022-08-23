#!/usr/bin/env bash
set -x

webpack \
  --config ./src/reporters/web/webpack.config.js \
  --mode production
