[![pages-build-deployment](https://github.com/Andycko/graphql-client-benchmarks/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Andycko/graphql-client-benchmarks/actions/workflows/pages/pages-build-deployment)
# Table of contents
- [GQLCBench - GraphQL Client Benchmarks](#graphql-client-benchmarks)
  - [Intro](#intro)
  - [Goals](#goals)
  - [How does it work?](#how-does-it-work)
    - [Running the benchmark](#running-the-benchmark)
      - [Run without building in browser](#run-without-building-in-browser)
      - [Run locally](#run-locally)
        - [Web](#web)
        - [CLI](#cli)
  - [Customisation](#customisation)
    - [Examples](#examples)
    - [Environments](#environments)
    - [Contributing & Advanced Use](#contributing--advanced-use)
  - [Why testing result cache in Apollo](#why-testing-result-cache-in-apollo)
  - [Benchmarks](#benchmarks)
  - [Findings](#findings)
  - [Future](#future)
# GQLCBench - GraphQL Client Benchmarsk
## Intro
A tool to benchmark the cache performance of various GraphQL clients in reading/writing/updating data in the cache. It uses the core APIs of the GraphQL clients to measure to achieve front-end framework agnostic results.

## Goals
The goal of this tool is to provide reliable and holistic data about cache performance that can drive key decisions while choosing a GraphQL client or contributing performance optimizations to existing clients. It should provide a big enough variety of examples to be able to tailor decisions based on individual factors and use cases. One of the main benefits of this benchmark is that it allows people working with GraphQL clients to explore how they behave with their specific scenarios (data size, query shape, etc). Furthemore, the tool can be also used to test experimental cache implementations for various clients.
## How does it work?
This benchmark doesn’t use the client’s React API’s, but rather uses the core API’s of the clients to measure their data store performance. This way it provides framework agnostic results which measure the pure performance of the cache.

### Running the benchmark
#### Run without building in browser
The current release of the web reporter is also deployed to the github pages site of this repository - https://andycko.github.io/graphql-client-benchmarks/
#### Run locally
If you want to run the benchmark locally you have two options - **web** and **CLI**. Both of these perform the same benchmark suite, the difference is only in the reporter. Note that the **CLI** reporter also provides basic memory meassurements from Node.
##### Web 
1. run `yarn install`
3. run `yarn compile` to compile typescript & web reporter artefacts
4. open `index.html` that has been generated in `dist/`

##### CLI
1. run `yarn install`
2. run `yarn compile-ts` to compile typescript
3. run `yarn cli` to start the CLI reporter
## Customisation
This benchmark is easily customisable, you can add new example queries and benchmarks which suite your needs, you can alternate between different examples or just use the ones’ provided.

### Examples
The benchmarking suite is set up to support many example queries and responses. If you have some you'd like to add to the suite, you can add them to the [`examples`](./examples) folder, following the same structure. They'll automatically be pulled into the benchmarking suite. If you decide to add new examples/change the existing ones, run `yarn compile-artifacts` before running the benchamrking suite with `yarn dev`. This takes care about compiling your newly added queries for Relay. (Only add/edit, metadata.json/operation.gql/schema.gql/response.json other files are generated. fragment.gql/fragmentOwner.gql are optional files for testing random fragment reads from big datasets.)

### Environments
The benchmarks are designed to be run in three different ways:

- **web**: The [web reporter](./src/reporters/web) provides a UI for running the baked in examples, as well as an editor to enter your own (This functionality has been suspended due to the pre-runtime relay compilation step).
- **cli**: The [CLI reporter](./src/reporters/cli) provides a UI for running the baked in examples on a terminal. It also performs basic memory meassurements, where it meassures the base heap usage before the client initialization and then meassures it again after the test has run. GC is manually performed before meassurement to make sure we have clean data.
- **api**: The benchmark suite and runner is also exposed via [an API](./src/index.ts) that you can use to run the examples, or provide your own. The primary entry point is [`runSuite`](./src/execution.ts). Furthemore after every run a `findings.json` file is created which holds the resulting data to be used in a statistical analysis. Take a look at the web or cli reporters for an idea of how to run it, and you'll probably want to leverage the [console reporter](./src/reporters/console) to get started.

### Contributing & Advanced Use
For any other case, you'll want to check out the repository, or depend on the package directly.

These approaches are mostly undocumented and lightly supported—expect to roll up your sleeves!

1. run `yarn install`
2. run `yarn compile-ts` to compile all typescript
3. run `yarn dev` to start the development server
## Why testing result cache in Apollo
Currently there are 2 parts of the Apollo cache - `EntityStore` and `ResultCache`.

`EntityStore` is the main cache which holds normalized data, therefore when data is read from it, it needs to be de-normalized

`ResultCache` has been introduced to help with the denormalization problem. Therefore, when the first `read` of a query is executed against the `EntityStore` the de-normalized data is memoized in the `ResultCache` and this then makes all upcoming `reads` of the identical query very fast. However, this comes with the overhead of having to write into the `ResultCache` on every first `read` operation on some query that has not yet been memoized. (The match has to be 1:1 exact here)

## Benchmarks
We have 3 major test groups - **read**, **write** and **update** ...

## Findings
![Benchmark results](./results.png "Benchmark results") 
From the results of the benchmark, we have found that generally through different examples and tests the Relay client has been performing 10x faster throughout the board. This raises questions about what are they doing better and what is stopping people from making Relay their first choice. One of the factors in decision-making is most probably ease of use, as Relay has a steeper learning curve compared to Apollo or others. Furthemore, the need to precompile GraphQL artifacts in Relay might be an incovenience for some as well.

## Future
In the future, we might 
- add URQL client to the benchmark as well to provide a better choice for people depending on this with their decision.
- experiment with pre-normalized cache for Apollo
- add more example queries which cover more real-life usages

