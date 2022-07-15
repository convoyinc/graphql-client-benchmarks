#!/usr/bin/env bash
set -x

# find dirs in examples dir and save them
DIRECTORIES=$(find ./examples -type d -maxdepth 1 -not -path './examples')

# create partial artifacts
node ./src/node_scripts/generatePartial.js

# loop through example dirs and run compiler for each
for DIRECTORY in $DIRECTORIES; do
  # make temp artifacts dir
  mkdir $DIRECTORY/__artifacts__
  # compile artifacts
  yarn relay $DIRECTORY/relay.config.json
  # remove raw query, move generated root artifact and rename
  rm $DIRECTORY/operation.gql.ts
  mv $DIRECTORY/__artifacts__/operationQuery.graphql.ts $DIRECTORY/relayArtifact.graphql.ts
  # remove raw fragment, move generated fragment and rename
  rm $DIRECTORY/fragment.gql.ts
  mv $DIRECTORY/__artifacts__/fragment.graphql.ts $DIRECTORY/fragment_relayArtifact.graphql.ts
  mv $DIRECTORY/__artifacts__/fragmentOwnerQuery.graphql.ts $DIRECTORY/fragmentOwner_relayArtifact.graphql.ts
  # remove all temp versions of partial relay artifacts and replace them with the compiled ones
  rm -rf $DIRECTORY/__partials__/relay/*
  mv $DIRECTORY/__artifacts__/* $DIRECTORY/__partials__/relay/
  # remove temp folder
  rm -rf $DIRECTORY/__artifacts__
done