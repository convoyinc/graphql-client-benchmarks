import * as reactPackage from 'react';

declare global {
  const React: typeof reactPackage;

  namespace NodeJS {
    export interface Global {
      React: typeof reactPackage;
    }
  }
}
