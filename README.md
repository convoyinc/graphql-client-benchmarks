# TO RUN LOCALLY (before new docs come)
- run `yarn compile-ts`
- run `yarn dev`

# GraphQL Client Benchmarks

A benchmarking suite for GraphQL clients, with focus on their cache implementations.

If you'd like to run them in a browser, there is a built copy hosted at: https://convoyinc.github.io/graphql-client-benchmarks/

If you want to run them in node, it is also available as a node module that exposes a bin script that executes the CLI runner.

```
npm install -g graphql-client-benchmarks
graphql-client-benchmarks
```

## Contributing & Advanced Use

For any other case, you'll want to check out the repository, or depend on the package directly.

These approaches are mostly undocumented and lightly supported—expect to roll up your sleeves!

## Examples

The benchmarking suite is set up to support many example queries and responses. If you have some you'd like to add to the suite, you can add them to the [`examples`](./examples) folder, following the same structure. They'll automatically be pulled into the benchmarking suite. If you decide to add new examples/change the existing ones, run `yarn compile-artifacts` before running the benchamrking suite with `yarn dev`. This takes care about compiling your newly added queries for Relay. (Only add/edit, metadata.json/operation.gql/schema.gql/response.json other files are generated )

## Environments

The benchmarks are designed to be run in three different ways:

**web**: The [web reporter](./src/reporters/web) provides a UI for running the baked in examples, as well as an editor to enter your own. It can be run locally via `yarn dev` or `yarn compile`.

**cli**: The [CLI reporter](./src/reporters/cli) provides a UI for running the baked in examples on a terminal. It can be

**api**: The benchmark suite and runner is also exposed via [an API](./src/index.ts) that you can use to run the examples, or provide your own. The primary entry point is [`runSuite`](./src/execution.ts). Take a look at the web or cli reporters for an idea of how to run it, and you'll probably want to leverage the [console reporter](./src/reporters/console) to get started.

# New Docs (WIP)
## What is this?
Benchmark to measure the performance of caches of various GraphQL clients.

## Why?
This is a useful tool to use when starting a new project and thinking about the tech stack to use. If you know what operations will your app perform the most, you can use this as a guide to pick the client which provides the best performance for you and then argue your choice using the results, if needed.

This could be helpful for Teams as well.

Furthermore, teams who build these GQL clients can use this as a guideline to what they need to optimize in their products.

## How does it work?
This benchmark doesn’t use the client’s React API’s, but rather uses the core API’s of the clients to measure their data store performance. This way it provides framework agnostic results which measure the pure performance of the cache.

### Customisation
This benchmark is easily customisable, you can add new example queries and benchmarks which suite your needs, you can alternate between different examples or just use the ones’ provided.

### Why testing result cache in Apollo
Currently there are 2 parts of the Apollo cache - `EntityStore` and `ResultCache`.

`EntityStore` is the main cache which holds normalized data, therefore when data is read from it, it needs to be de-normalized

`ResultCache` has been introduced to help with the denormalization problem. Therefore, when the first `read` of a query is executed against the `EntityStore` the de-normalized data is memoized in the `ResultCache` and this then makes all upcoming `reads` of the identical query very fast. However, this comes with the overhead of having to write into the `ResultCache` on every first `read` operation on some query that has not yet been memoized. (The match has to be 1:1 exact here)

## Benchmarks
We have 3 major test groups - **read**, **write** and **update**
...
## Future
In the future, we might 
- add URQL client to the benchmark as well to provide a better choice for people depending on this with their decision.
- add more example queries which cover more real-life usages, especially in TMP