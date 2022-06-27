# !/bin/bash

# find dirs in examples dir and save them
DIRECTORIES=$(find ./examples -type d -maxdepth 1 -not -path './examples')

# loop through example dirs and run compiler for each
for DIRECTORY in $DIRECTORIES; do
  # make temp artifacts dir
  mkdir $DIRECTORY/_artifacts
  # compile artifacts
  yarn relay $DIRECTORY/relay.config.json
  # move generated artifacts and rename
  mv $DIRECTORY/_artifacts/relayRawQuery.graphql.ts $DIRECTORY/relayArtifact.graphql.ts
  # remove temp folder
  rm -rf $DIRECTORY/_artifacts
done
