#!/usr/bin/env bash
set -x

CURRENT_COMMIT=$(git rev-parse HEAD)

rm -rf ./dist
git clone -b gh-pages ./ ./dist

./scripts/compile-web.sh

# get origin url of main repo
REMOTE=$(git remote get-url origin)

cd ./dist
git remote set-url origin $REMOTE
git pull origin
git add .
git commit -m "Built web reporter for ${CURRENT_COMMIT}"
git push origin gh-pages
