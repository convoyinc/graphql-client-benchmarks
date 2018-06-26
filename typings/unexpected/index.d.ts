// Would like to break this into multiple files, but am blocked by
// https://github.com/Microsoft/TypeScript/issues/11243
declare module 'unexpected' {
  import BluebirdPromise from 'bluebird';

  // http://unexpected.js.org/api/addType/
  // https://github.com/unexpectedjs/unexpected/blob/master/lib/types.js
  interface Types {
    any: any;
    arguments: IArguments;
    array: Array<any>;
    'array-like': { length: number; [key: number]: any };
    binaryArray: { length: number; [key: number]: any };
    boolean: boolean;
    // 'Buffer': Buffer;
    date: Date;
    Error: Error;
    function: Function;
    Int8Array: Int8Array;
    Int16Array: Int16Array;
    Int32Array: Int32Array;
    NaN: number;
    null: null;
    number: number;
    object: object;
    regex: RegExp;
    regexp: RegExp;
    'regular expression': RegExp;
    string: string;
    Uint8Array: Uint8Array;
    Uint16Array: Uint16Array;
    Uint32Array: Uint32Array;
    undefined: undefined;
  }
  type Type = keyof Types;

  interface ChainableExpectation<TSubject> extends BluebirdPromise<TSubject> {
    and: And<TSubject>;
  }

  interface Expect {
    // http://unexpected.js.org/assertions/any/to-be/
    <TSubject>(subject: TSubject, assertion: 'to be', value: any): ChainableExpectation<TSubject>;
    <TSubject>(subject: TSubject, assertion: 'not to be', value: any): ChainableExpectation<TSubject>;

    // http://unexpected.js.org/assertions/any/to-be-a/
    <TSubject, TType extends Type>(subject: TSubject, assertion: 'to be a', type: TType): ChainableExpectation<Types[TType]>;
    <TSubject, TType extends Type>(subject: TSubject, assertion: 'to be an', type: TType): ChainableExpectation<Types[TType]>;
    <TSubject, TType extends Type>(subject: TSubject, assertion: 'not to be a', type: TType): ChainableExpectation<any>;
    <TSubject, TType extends Type>(subject: TSubject, assertion: 'not to be an', type: TType): ChainableExpectation<any>;

    <TSubject>(subject: TSubject, assertion: 'to be a boolean'): ChainableExpectation<boolean>;
    <TSubject>(subject: TSubject, assertion: 'to be a date'): ChainableExpectation<Date>;
    <TSubject>(subject: TSubject, assertion: 'to be a function'): ChainableExpectation<Function>;
    <TSubject>(subject: TSubject, assertion: 'to be a number'): ChainableExpectation<number>;
    <TSubject>(subject: TSubject, assertion: 'to be a regex'): ChainableExpectation<RegExp>;
    <TSubject>(subject: TSubject, assertion: 'to be a regexp'): ChainableExpectation<RegExp>;
    <TSubject>(subject: TSubject, assertion: 'to be a regular expression'): ChainableExpectation<RegExp>;
    <TSubject>(subject: TSubject, assertion: 'to be a string'): ChainableExpectation<string>;
    <TSubject>(subject: TSubject, assertion: 'to be an array'): ChainableExpectation<Array<any>>;
    <TSubject>(subject: TSubject, assertion: 'to be an object'): ChainableExpectation<object>;

    <TSubject>(subject: TSubject, assertion: 'not to be a boolean'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be a date'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be a function'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be a number'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be a regex'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be a regexp'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be a regular expression'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be a string'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be an array'): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to be an object'): ChainableExpectation<any>;

    // http://unexpected.js.org/assertions/any/to-be-defined/
    <TSubject>(subject: TSubject, assertion: 'to be defined'): ChainableExpectation<TSubject>;
    <TSubject>(subject: TSubject, assertion: 'not to be defined'): ChainableExpectation<undefined>;

    // …

    // http://unexpected.js.org/assertions/any/to-satisfy/
    <TSubject>(subject: TSubject, assertion: 'to satisfy', value: any): ChainableExpectation<TSubject>;
    <TSubject>(subject: TSubject, assertion: 'to exhaustively satisfy', value: any): ChainableExpectation<TSubject>;
    <TSubject>(subject: TSubject, assertion: 'not to satisfy', value: any): ChainableExpectation<any>;
    <TSubject>(subject: TSubject, assertion: 'not to exhaustively satisfy', value: any): ChainableExpectation<any>;
  }

  // Becomes much less complicated if https://github.com/Microsoft/TypeScript/issues/5453 happens.
  interface And<TSubject> {
    // http://unexpected.js.org/assertions/any/to-be/
    (assertion: 'to be', value: any): ChainableExpectation<TSubject>;
    (assertion: 'not to be', value: any): ChainableExpectation<TSubject>;

    // http://unexpected.js.org/assertions/any/to-be-a/
    <TType extends Type>(assertion: 'to be a', type: TType): ChainableExpectation<Types[TType]>;
    <TType extends Type>(assertion: 'to be an', type: TType): ChainableExpectation<Types[TType]>;
    <TType extends Type>(assertion: 'not to be a', type: TType): ChainableExpectation<any>;
    <TType extends Type>(assertion: 'not to be an', type: TType): ChainableExpectation<any>;

    (assertion: 'to be a boolean'): ChainableExpectation<boolean>;
    (assertion: 'to be a date'): ChainableExpectation<Date>;
    (assertion: 'to be a function'): ChainableExpectation<Function>;
    (assertion: 'to be a number'): ChainableExpectation<number>;
    (assertion: 'to be a regex'): ChainableExpectation<RegExp>;
    (assertion: 'to be a regexp'): ChainableExpectation<RegExp>;
    (assertion: 'to be a regular expression'): ChainableExpectation<RegExp>;
    (assertion: 'to be a string'): ChainableExpectation<string>;
    (assertion: 'to be an array'): ChainableExpectation<Array<any>>;
    (assertion: 'to be an object'): ChainableExpectation<object>;

    (assertion: 'not to be a boolean'): ChainableExpectation<any>;
    (assertion: 'not to be a date'): ChainableExpectation<any>;
    (assertion: 'not to be a function'): ChainableExpectation<any>;
    (assertion: 'not to be a number'): ChainableExpectation<any>;
    (assertion: 'not to be a regex'): ChainableExpectation<any>;
    (assertion: 'not to be a regexp'): ChainableExpectation<any>;
    (assertion: 'not to be a regular expression'): ChainableExpectation<any>;
    (assertion: 'not to be a string'): ChainableExpectation<any>;
    (assertion: 'not to be an array'): ChainableExpectation<any>;
    (assertion: 'not to be an object'): ChainableExpectation<any>;

    // http://unexpected.js.org/assertions/any/to-be-defined/
    (assertion: 'to be defined'): ChainableExpectation<TSubject>;
    (assertion: 'not to be defined'): ChainableExpectation<undefined>;

    // …

    // http://unexpected.js.org/assertions/any/to-satisfy/
    (assertion: 'to satisfy', value: any): ChainableExpectation<TSubject>;
    (assertion: 'to exhaustively satisfy', value: any): ChainableExpectation<TSubject>;
    (assertion: 'not to satisfy', value: any): ChainableExpectation<any>;
    (assertion: 'not to exhaustively satisfy', value: any): ChainableExpectation<any>;
  }

  const expect: Expect;
  export = expect;
}
