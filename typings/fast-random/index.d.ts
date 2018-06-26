declare module 'fast-random' {
  function fastRandom(seed: number): fastRandom.FastRandomGenerator;

  namespace fastRandom {
    interface FastRandomGenerator {
      seed(newSeed: number): void;
      nextInt(): number;
      nextFloat(): number;
    }
  }

  export = fastRandom;
}
