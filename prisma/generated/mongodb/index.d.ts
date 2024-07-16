
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ariticel
 * 
 */
export type Ariticel = $Result.DefaultSelection<Prisma.$AriticelPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ariticels
 * const ariticels = await prisma.ariticel.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ariticels
   * const ariticels = await prisma.ariticel.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.ariticel`: Exposes CRUD operations for the **Ariticel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ariticels
    * const ariticels = await prisma.ariticel.findMany()
    * ```
    */
  get ariticel(): Prisma.AriticelDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ariticel: 'Ariticel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    mongodb?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'ariticel'
      txIsolationLevel: never
    },
    model: {
      Ariticel: {
        payload: Prisma.$AriticelPayload<ExtArgs>
        fields: Prisma.AriticelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AriticelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AriticelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload>
          }
          findFirst: {
            args: Prisma.AriticelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AriticelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload>
          }
          findMany: {
            args: Prisma.AriticelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload>[]
          }
          create: {
            args: Prisma.AriticelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload>
          }
          createMany: {
            args: Prisma.AriticelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AriticelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload>
          }
          update: {
            args: Prisma.AriticelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload>
          }
          deleteMany: {
            args: Prisma.AriticelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AriticelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AriticelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AriticelPayload>
          }
          aggregate: {
            args: Prisma.AriticelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAriticel>
          }
          groupBy: {
            args: Prisma.AriticelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AriticelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AriticelFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AriticelAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AriticelCountArgs<ExtArgs>,
            result: $Utils.Optional<AriticelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Ariticel
   */

  export type AggregateAriticel = {
    _count: AriticelCountAggregateOutputType | null
    _avg: AriticelAvgAggregateOutputType | null
    _sum: AriticelSumAggregateOutputType | null
    _min: AriticelMinAggregateOutputType | null
    _max: AriticelMaxAggregateOutputType | null
  }

  export type AriticelAvgAggregateOutputType = {
    id: number | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    readTime: number | null
    sharesCount: number | null
  }

  export type AriticelSumAggregateOutputType = {
    id: number | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    readTime: number | null
    sharesCount: number | null
  }

  export type AriticelMinAggregateOutputType = {
    id: number | null
    title: string | null
    abstract: string | null
    cover_img: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublished: boolean | null
    authorId: string | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    readTime: number | null
    sharesCount: number | null
  }

  export type AriticelMaxAggregateOutputType = {
    id: number | null
    title: string | null
    abstract: string | null
    cover_img: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublished: boolean | null
    authorId: string | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    readTime: number | null
    sharesCount: number | null
  }

  export type AriticelCountAggregateOutputType = {
    id: number
    title: number
    categories: number
    tags: number
    abstract: number
    cover_img: number
    content: number
    createdAt: number
    updatedAt: number
    isPublished: number
    authorId: number
    viewsCount: number
    likesCount: number
    commentsCount: number
    readTime: number
    sharesCount: number
    _all: number
  }


  export type AriticelAvgAggregateInputType = {
    id?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    readTime?: true
    sharesCount?: true
  }

  export type AriticelSumAggregateInputType = {
    id?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    readTime?: true
    sharesCount?: true
  }

  export type AriticelMinAggregateInputType = {
    id?: true
    title?: true
    abstract?: true
    cover_img?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    isPublished?: true
    authorId?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    readTime?: true
    sharesCount?: true
  }

  export type AriticelMaxAggregateInputType = {
    id?: true
    title?: true
    abstract?: true
    cover_img?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    isPublished?: true
    authorId?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    readTime?: true
    sharesCount?: true
  }

  export type AriticelCountAggregateInputType = {
    id?: true
    title?: true
    categories?: true
    tags?: true
    abstract?: true
    cover_img?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    isPublished?: true
    authorId?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    readTime?: true
    sharesCount?: true
    _all?: true
  }

  export type AriticelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ariticel to aggregate.
     */
    where?: AriticelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ariticels to fetch.
     */
    orderBy?: AriticelOrderByWithRelationInput | AriticelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AriticelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ariticels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ariticels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ariticels
    **/
    _count?: true | AriticelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AriticelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AriticelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AriticelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AriticelMaxAggregateInputType
  }

  export type GetAriticelAggregateType<T extends AriticelAggregateArgs> = {
        [P in keyof T & keyof AggregateAriticel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAriticel[P]>
      : GetScalarType<T[P], AggregateAriticel[P]>
  }




  export type AriticelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AriticelWhereInput
    orderBy?: AriticelOrderByWithAggregationInput | AriticelOrderByWithAggregationInput[]
    by: AriticelScalarFieldEnum[] | AriticelScalarFieldEnum
    having?: AriticelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AriticelCountAggregateInputType | true
    _avg?: AriticelAvgAggregateInputType
    _sum?: AriticelSumAggregateInputType
    _min?: AriticelMinAggregateInputType
    _max?: AriticelMaxAggregateInputType
  }

  export type AriticelGroupByOutputType = {
    id: number
    title: string
    categories: string[]
    tags: string[]
    abstract: string | null
    cover_img: string | null
    content: string
    createdAt: Date
    updatedAt: Date
    isPublished: boolean
    authorId: string | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    readTime: number | null
    sharesCount: number | null
    _count: AriticelCountAggregateOutputType | null
    _avg: AriticelAvgAggregateOutputType | null
    _sum: AriticelSumAggregateOutputType | null
    _min: AriticelMinAggregateOutputType | null
    _max: AriticelMaxAggregateOutputType | null
  }

  type GetAriticelGroupByPayload<T extends AriticelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AriticelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AriticelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AriticelGroupByOutputType[P]>
            : GetScalarType<T[P], AriticelGroupByOutputType[P]>
        }
      >
    >


  export type AriticelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categories?: boolean
    tags?: boolean
    abstract?: boolean
    cover_img?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublished?: boolean
    authorId?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    readTime?: boolean
    sharesCount?: boolean
  }, ExtArgs["result"]["ariticel"]>

  export type AriticelSelectScalar = {
    id?: boolean
    title?: boolean
    categories?: boolean
    tags?: boolean
    abstract?: boolean
    cover_img?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublished?: boolean
    authorId?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    readTime?: boolean
    sharesCount?: boolean
  }



  export type $AriticelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ariticel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      categories: string[]
      tags: string[]
      abstract: string | null
      cover_img: string | null
      content: string
      createdAt: Date
      updatedAt: Date
      isPublished: boolean
      authorId: string | null
      viewsCount: number | null
      likesCount: number | null
      commentsCount: number | null
      readTime: number | null
      sharesCount: number | null
    }, ExtArgs["result"]["ariticel"]>
    composites: {}
  }


  type AriticelGetPayload<S extends boolean | null | undefined | AriticelDefaultArgs> = $Result.GetResult<Prisma.$AriticelPayload, S>

  type AriticelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AriticelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AriticelCountAggregateInputType | true
    }

  export interface AriticelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ariticel'], meta: { name: 'Ariticel' } }
    /**
     * Find zero or one Ariticel that matches the filter.
     * @param {AriticelFindUniqueArgs} args - Arguments to find a Ariticel
     * @example
     * // Get one Ariticel
     * const ariticel = await prisma.ariticel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AriticelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AriticelFindUniqueArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ariticel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AriticelFindUniqueOrThrowArgs} args - Arguments to find a Ariticel
     * @example
     * // Get one Ariticel
     * const ariticel = await prisma.ariticel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AriticelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AriticelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ariticel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AriticelFindFirstArgs} args - Arguments to find a Ariticel
     * @example
     * // Get one Ariticel
     * const ariticel = await prisma.ariticel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AriticelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AriticelFindFirstArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ariticel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AriticelFindFirstOrThrowArgs} args - Arguments to find a Ariticel
     * @example
     * // Get one Ariticel
     * const ariticel = await prisma.ariticel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AriticelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AriticelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ariticels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AriticelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ariticels
     * const ariticels = await prisma.ariticel.findMany()
     * 
     * // Get first 10 Ariticels
     * const ariticels = await prisma.ariticel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ariticelWithIdOnly = await prisma.ariticel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AriticelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AriticelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ariticel.
     * @param {AriticelCreateArgs} args - Arguments to create a Ariticel.
     * @example
     * // Create one Ariticel
     * const Ariticel = await prisma.ariticel.create({
     *   data: {
     *     // ... data to create a Ariticel
     *   }
     * })
     * 
    **/
    create<T extends AriticelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AriticelCreateArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ariticels.
     * @param {AriticelCreateManyArgs} args - Arguments to create many Ariticels.
     * @example
     * // Create many Ariticels
     * const ariticel = await prisma.ariticel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AriticelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AriticelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ariticel.
     * @param {AriticelDeleteArgs} args - Arguments to delete one Ariticel.
     * @example
     * // Delete one Ariticel
     * const Ariticel = await prisma.ariticel.delete({
     *   where: {
     *     // ... filter to delete one Ariticel
     *   }
     * })
     * 
    **/
    delete<T extends AriticelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AriticelDeleteArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ariticel.
     * @param {AriticelUpdateArgs} args - Arguments to update one Ariticel.
     * @example
     * // Update one Ariticel
     * const ariticel = await prisma.ariticel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AriticelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AriticelUpdateArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ariticels.
     * @param {AriticelDeleteManyArgs} args - Arguments to filter Ariticels to delete.
     * @example
     * // Delete a few Ariticels
     * const { count } = await prisma.ariticel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AriticelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AriticelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ariticels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AriticelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ariticels
     * const ariticel = await prisma.ariticel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AriticelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AriticelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ariticel.
     * @param {AriticelUpsertArgs} args - Arguments to update or create a Ariticel.
     * @example
     * // Update or create a Ariticel
     * const ariticel = await prisma.ariticel.upsert({
     *   create: {
     *     // ... data to create a Ariticel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ariticel we want to update
     *   }
     * })
    **/
    upsert<T extends AriticelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AriticelUpsertArgs<ExtArgs>>
    ): Prisma__AriticelClient<$Result.GetResult<Prisma.$AriticelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Ariticels that matches the filter.
     * @param {AriticelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ariticel = await prisma.ariticel.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AriticelFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ariticel.
     * @param {AriticelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ariticel = await prisma.ariticel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AriticelAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Ariticels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AriticelCountArgs} args - Arguments to filter Ariticels to count.
     * @example
     * // Count the number of Ariticels
     * const count = await prisma.ariticel.count({
     *   where: {
     *     // ... the filter for the Ariticels we want to count
     *   }
     * })
    **/
    count<T extends AriticelCountArgs>(
      args?: Subset<T, AriticelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AriticelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ariticel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AriticelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AriticelAggregateArgs>(args: Subset<T, AriticelAggregateArgs>): Prisma.PrismaPromise<GetAriticelAggregateType<T>>

    /**
     * Group by Ariticel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AriticelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AriticelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AriticelGroupByArgs['orderBy'] }
        : { orderBy?: AriticelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AriticelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAriticelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ariticel model
   */
  readonly fields: AriticelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ariticel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AriticelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ariticel model
   */ 
  interface AriticelFieldRefs {
    readonly id: FieldRef<"Ariticel", 'Int'>
    readonly title: FieldRef<"Ariticel", 'String'>
    readonly categories: FieldRef<"Ariticel", 'String[]'>
    readonly tags: FieldRef<"Ariticel", 'String[]'>
    readonly abstract: FieldRef<"Ariticel", 'String'>
    readonly cover_img: FieldRef<"Ariticel", 'String'>
    readonly content: FieldRef<"Ariticel", 'String'>
    readonly createdAt: FieldRef<"Ariticel", 'DateTime'>
    readonly updatedAt: FieldRef<"Ariticel", 'DateTime'>
    readonly isPublished: FieldRef<"Ariticel", 'Boolean'>
    readonly authorId: FieldRef<"Ariticel", 'String'>
    readonly viewsCount: FieldRef<"Ariticel", 'Int'>
    readonly likesCount: FieldRef<"Ariticel", 'Int'>
    readonly commentsCount: FieldRef<"Ariticel", 'Int'>
    readonly readTime: FieldRef<"Ariticel", 'Int'>
    readonly sharesCount: FieldRef<"Ariticel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ariticel findUnique
   */
  export type AriticelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * Filter, which Ariticel to fetch.
     */
    where: AriticelWhereUniqueInput
  }

  /**
   * Ariticel findUniqueOrThrow
   */
  export type AriticelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * Filter, which Ariticel to fetch.
     */
    where: AriticelWhereUniqueInput
  }

  /**
   * Ariticel findFirst
   */
  export type AriticelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * Filter, which Ariticel to fetch.
     */
    where?: AriticelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ariticels to fetch.
     */
    orderBy?: AriticelOrderByWithRelationInput | AriticelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ariticels.
     */
    cursor?: AriticelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ariticels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ariticels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ariticels.
     */
    distinct?: AriticelScalarFieldEnum | AriticelScalarFieldEnum[]
  }

  /**
   * Ariticel findFirstOrThrow
   */
  export type AriticelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * Filter, which Ariticel to fetch.
     */
    where?: AriticelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ariticels to fetch.
     */
    orderBy?: AriticelOrderByWithRelationInput | AriticelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ariticels.
     */
    cursor?: AriticelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ariticels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ariticels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ariticels.
     */
    distinct?: AriticelScalarFieldEnum | AriticelScalarFieldEnum[]
  }

  /**
   * Ariticel findMany
   */
  export type AriticelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * Filter, which Ariticels to fetch.
     */
    where?: AriticelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ariticels to fetch.
     */
    orderBy?: AriticelOrderByWithRelationInput | AriticelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ariticels.
     */
    cursor?: AriticelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ariticels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ariticels.
     */
    skip?: number
    distinct?: AriticelScalarFieldEnum | AriticelScalarFieldEnum[]
  }

  /**
   * Ariticel create
   */
  export type AriticelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * The data needed to create a Ariticel.
     */
    data: XOR<AriticelCreateInput, AriticelUncheckedCreateInput>
  }

  /**
   * Ariticel createMany
   */
  export type AriticelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ariticels.
     */
    data: AriticelCreateManyInput | AriticelCreateManyInput[]
  }

  /**
   * Ariticel update
   */
  export type AriticelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * The data needed to update a Ariticel.
     */
    data: XOR<AriticelUpdateInput, AriticelUncheckedUpdateInput>
    /**
     * Choose, which Ariticel to update.
     */
    where: AriticelWhereUniqueInput
  }

  /**
   * Ariticel updateMany
   */
  export type AriticelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ariticels.
     */
    data: XOR<AriticelUpdateManyMutationInput, AriticelUncheckedUpdateManyInput>
    /**
     * Filter which Ariticels to update
     */
    where?: AriticelWhereInput
  }

  /**
   * Ariticel upsert
   */
  export type AriticelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * The filter to search for the Ariticel to update in case it exists.
     */
    where: AriticelWhereUniqueInput
    /**
     * In case the Ariticel found by the `where` argument doesn't exist, create a new Ariticel with this data.
     */
    create: XOR<AriticelCreateInput, AriticelUncheckedCreateInput>
    /**
     * In case the Ariticel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AriticelUpdateInput, AriticelUncheckedUpdateInput>
  }

  /**
   * Ariticel delete
   */
  export type AriticelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
    /**
     * Filter which Ariticel to delete.
     */
    where: AriticelWhereUniqueInput
  }

  /**
   * Ariticel deleteMany
   */
  export type AriticelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ariticels to delete
     */
    where?: AriticelWhereInput
  }

  /**
   * Ariticel findRaw
   */
  export type AriticelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ariticel aggregateRaw
   */
  export type AriticelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ariticel without action
   */
  export type AriticelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ariticel
     */
    select?: AriticelSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AriticelScalarFieldEnum: {
    id: 'id',
    title: 'title',
    categories: 'categories',
    tags: 'tags',
    abstract: 'abstract',
    cover_img: 'cover_img',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isPublished: 'isPublished',
    authorId: 'authorId',
    viewsCount: 'viewsCount',
    likesCount: 'likesCount',
    commentsCount: 'commentsCount',
    readTime: 'readTime',
    sharesCount: 'sharesCount'
  };

  export type AriticelScalarFieldEnum = (typeof AriticelScalarFieldEnum)[keyof typeof AriticelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AriticelWhereInput = {
    AND?: AriticelWhereInput | AriticelWhereInput[]
    OR?: AriticelWhereInput[]
    NOT?: AriticelWhereInput | AriticelWhereInput[]
    id?: IntFilter<"Ariticel"> | number
    title?: StringFilter<"Ariticel"> | string
    categories?: StringNullableListFilter<"Ariticel">
    tags?: StringNullableListFilter<"Ariticel">
    abstract?: StringNullableFilter<"Ariticel"> | string | null
    cover_img?: StringNullableFilter<"Ariticel"> | string | null
    content?: StringFilter<"Ariticel"> | string
    createdAt?: DateTimeFilter<"Ariticel"> | Date | string
    updatedAt?: DateTimeFilter<"Ariticel"> | Date | string
    isPublished?: BoolFilter<"Ariticel"> | boolean
    authorId?: StringNullableFilter<"Ariticel"> | string | null
    viewsCount?: IntNullableFilter<"Ariticel"> | number | null
    likesCount?: IntNullableFilter<"Ariticel"> | number | null
    commentsCount?: IntNullableFilter<"Ariticel"> | number | null
    readTime?: IntNullableFilter<"Ariticel"> | number | null
    sharesCount?: IntNullableFilter<"Ariticel"> | number | null
  }

  export type AriticelOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    categories?: SortOrder
    tags?: SortOrder
    abstract?: SortOrder
    cover_img?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    readTime?: SortOrder
    sharesCount?: SortOrder
  }

  export type AriticelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AriticelWhereInput | AriticelWhereInput[]
    OR?: AriticelWhereInput[]
    NOT?: AriticelWhereInput | AriticelWhereInput[]
    title?: StringFilter<"Ariticel"> | string
    categories?: StringNullableListFilter<"Ariticel">
    tags?: StringNullableListFilter<"Ariticel">
    abstract?: StringNullableFilter<"Ariticel"> | string | null
    cover_img?: StringNullableFilter<"Ariticel"> | string | null
    content?: StringFilter<"Ariticel"> | string
    createdAt?: DateTimeFilter<"Ariticel"> | Date | string
    updatedAt?: DateTimeFilter<"Ariticel"> | Date | string
    isPublished?: BoolFilter<"Ariticel"> | boolean
    authorId?: StringNullableFilter<"Ariticel"> | string | null
    viewsCount?: IntNullableFilter<"Ariticel"> | number | null
    likesCount?: IntNullableFilter<"Ariticel"> | number | null
    commentsCount?: IntNullableFilter<"Ariticel"> | number | null
    readTime?: IntNullableFilter<"Ariticel"> | number | null
    sharesCount?: IntNullableFilter<"Ariticel"> | number | null
  }, "id">

  export type AriticelOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    categories?: SortOrder
    tags?: SortOrder
    abstract?: SortOrder
    cover_img?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    readTime?: SortOrder
    sharesCount?: SortOrder
    _count?: AriticelCountOrderByAggregateInput
    _avg?: AriticelAvgOrderByAggregateInput
    _max?: AriticelMaxOrderByAggregateInput
    _min?: AriticelMinOrderByAggregateInput
    _sum?: AriticelSumOrderByAggregateInput
  }

  export type AriticelScalarWhereWithAggregatesInput = {
    AND?: AriticelScalarWhereWithAggregatesInput | AriticelScalarWhereWithAggregatesInput[]
    OR?: AriticelScalarWhereWithAggregatesInput[]
    NOT?: AriticelScalarWhereWithAggregatesInput | AriticelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ariticel"> | number
    title?: StringWithAggregatesFilter<"Ariticel"> | string
    categories?: StringNullableListFilter<"Ariticel">
    tags?: StringNullableListFilter<"Ariticel">
    abstract?: StringNullableWithAggregatesFilter<"Ariticel"> | string | null
    cover_img?: StringNullableWithAggregatesFilter<"Ariticel"> | string | null
    content?: StringWithAggregatesFilter<"Ariticel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ariticel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ariticel"> | Date | string
    isPublished?: BoolWithAggregatesFilter<"Ariticel"> | boolean
    authorId?: StringNullableWithAggregatesFilter<"Ariticel"> | string | null
    viewsCount?: IntNullableWithAggregatesFilter<"Ariticel"> | number | null
    likesCount?: IntNullableWithAggregatesFilter<"Ariticel"> | number | null
    commentsCount?: IntNullableWithAggregatesFilter<"Ariticel"> | number | null
    readTime?: IntNullableWithAggregatesFilter<"Ariticel"> | number | null
    sharesCount?: IntNullableWithAggregatesFilter<"Ariticel"> | number | null
  }

  export type AriticelCreateInput = {
    id: number
    title: string
    categories?: AriticelCreatecategoriesInput | string[]
    tags?: AriticelCreatetagsInput | string[]
    abstract?: string | null
    cover_img?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublished?: boolean
    authorId?: string | null
    viewsCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    readTime?: number | null
    sharesCount?: number | null
  }

  export type AriticelUncheckedCreateInput = {
    id: number
    title: string
    categories?: AriticelCreatecategoriesInput | string[]
    tags?: AriticelCreatetagsInput | string[]
    abstract?: string | null
    cover_img?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublished?: boolean
    authorId?: string | null
    viewsCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    readTime?: number | null
    sharesCount?: number | null
  }

  export type AriticelUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    categories?: AriticelUpdatecategoriesInput | string[]
    tags?: AriticelUpdatetagsInput | string[]
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    sharesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AriticelUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    categories?: AriticelUpdatecategoriesInput | string[]
    tags?: AriticelUpdatetagsInput | string[]
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    sharesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AriticelCreateManyInput = {
    id: number
    title: string
    categories?: AriticelCreatecategoriesInput | string[]
    tags?: AriticelCreatetagsInput | string[]
    abstract?: string | null
    cover_img?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublished?: boolean
    authorId?: string | null
    viewsCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    readTime?: number | null
    sharesCount?: number | null
  }

  export type AriticelUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    categories?: AriticelUpdatecategoriesInput | string[]
    tags?: AriticelUpdatetagsInput | string[]
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    sharesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AriticelUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    categories?: AriticelUpdatecategoriesInput | string[]
    tags?: AriticelUpdatetagsInput | string[]
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    sharesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type AriticelCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categories?: SortOrder
    tags?: SortOrder
    abstract?: SortOrder
    cover_img?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    readTime?: SortOrder
    sharesCount?: SortOrder
  }

  export type AriticelAvgOrderByAggregateInput = {
    id?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    readTime?: SortOrder
    sharesCount?: SortOrder
  }

  export type AriticelMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    abstract?: SortOrder
    cover_img?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    readTime?: SortOrder
    sharesCount?: SortOrder
  }

  export type AriticelMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    abstract?: SortOrder
    cover_img?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    readTime?: SortOrder
    sharesCount?: SortOrder
  }

  export type AriticelSumOrderByAggregateInput = {
    id?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    readTime?: SortOrder
    sharesCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type AriticelCreatecategoriesInput = {
    set: string[]
  }

  export type AriticelCreatetagsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AriticelUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AriticelUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AriticelDefaultArgs instead
     */
    export type AriticelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AriticelDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}