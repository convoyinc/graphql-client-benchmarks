#!/usr/bin/env bash
set -x

./scripts/compile-artifacts.sh
./scripts/compile-ts.sh
./scripts/compile-web.sh
