#!/usr/bin/env bash
set -x

./scripts/compile-ts.sh
./scripts/compile-artifacts.sh
./scripts/compile-web.sh
