[![pages-build-deployment](https://github.com/Andycko/graphql-client-benchmarks/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Andycko/graphql-client-benchmarks/actions/workflows/pages/pages-build-deployment)

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

The benchmarking suite is set up to support many example queries and responses. If you have some you'd like to add to the suite, you can add them to the [`examples`](./examples) folder, following the same structure. They'll automatically be pulled into the benchmarking suite.

## Environments

The benchmarks are designed to be run in three different ways:

**web**: The [web reporter](./src/reporters/web) provides a UI for running the baked in examples, as well as an editor to enter your own. It can be run locally via `yarn dev` or `yarn compile`.

**cli**: The [CLI reporter](./src/reporters/cli) provides a UI for running the baked in examples on a terminal. It can be

**api**: The benchmark suite and runner is also exposed via [an API](./src/index.ts) that you can use to run the examples, or provide your own. The primary entry point is [`runSuite`](./src/execution.ts). Take a look at the web or cli reporters for an idea of how to run it, and you'll probably want to leverage the [console reporter](./src/reporters/console) to get started.
