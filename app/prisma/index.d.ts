
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MembershipPackage
 * 
 */
export type MembershipPackage = $Result.DefaultSelection<Prisma.$MembershipPackagePayload>
/**
 * Model BrokerMembership
 * 
 */
export type BrokerMembership = $Result.DefaultSelection<Prisma.$BrokerMembershipPayload>
/**
 * Model Statistic
 * 
 */
export type Statistic = $Result.DefaultSelection<Prisma.$StatisticPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ListingType
 * 
 */
export type ListingType = $Result.DefaultSelection<Prisma.$ListingTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipPackage`: Exposes CRUD operations for the **MembershipPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipPackages
    * const membershipPackages = await prisma.membershipPackage.findMany()
    * ```
    */
  get membershipPackage(): Prisma.MembershipPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brokerMembership`: Exposes CRUD operations for the **BrokerMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrokerMemberships
    * const brokerMemberships = await prisma.brokerMembership.findMany()
    * ```
    */
  get brokerMembership(): Prisma.BrokerMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statistic`: Exposes CRUD operations for the **Statistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics
    * const statistics = await prisma.statistic.findMany()
    * ```
    */
  get statistic(): Prisma.StatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listingType`: Exposes CRUD operations for the **ListingType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListingTypes
    * const listingTypes = await prisma.listingType.findMany()
    * ```
    */
  get listingType(): Prisma.ListingTypeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Property: 'Property',
    Category: 'Category',
    Favorite: 'Favorite',
    Appointment: 'Appointment',
    Transaction: 'Transaction',
    Message: 'Message',
    MembershipPackage: 'MembershipPackage',
    BrokerMembership: 'BrokerMembership',
    Statistic: 'Statistic',
    Review: 'Review',
    ListingType: 'ListingType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "property" | "category" | "favorite" | "appointment" | "transaction" | "message" | "membershipPackage" | "brokerMembership" | "statistic" | "review" | "listingType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MembershipPackage: {
        payload: Prisma.$MembershipPackagePayload<ExtArgs>
        fields: Prisma.MembershipPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>
          }
          findFirst: {
            args: Prisma.MembershipPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>
          }
          findMany: {
            args: Prisma.MembershipPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>[]
          }
          create: {
            args: Prisma.MembershipPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>
          }
          createMany: {
            args: Prisma.MembershipPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>[]
          }
          delete: {
            args: Prisma.MembershipPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>
          }
          update: {
            args: Prisma.MembershipPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>
          }
          deleteMany: {
            args: Prisma.MembershipPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>[]
          }
          upsert: {
            args: Prisma.MembershipPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPackagePayload>
          }
          aggregate: {
            args: Prisma.MembershipPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipPackage>
          }
          groupBy: {
            args: Prisma.MembershipPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipPackageCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipPackageCountAggregateOutputType> | number
          }
        }
      }
      BrokerMembership: {
        payload: Prisma.$BrokerMembershipPayload<ExtArgs>
        fields: Prisma.BrokerMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrokerMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrokerMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>
          }
          findFirst: {
            args: Prisma.BrokerMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrokerMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>
          }
          findMany: {
            args: Prisma.BrokerMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>[]
          }
          create: {
            args: Prisma.BrokerMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>
          }
          createMany: {
            args: Prisma.BrokerMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrokerMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>[]
          }
          delete: {
            args: Prisma.BrokerMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>
          }
          update: {
            args: Prisma.BrokerMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>
          }
          deleteMany: {
            args: Prisma.BrokerMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrokerMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrokerMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>[]
          }
          upsert: {
            args: Prisma.BrokerMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerMembershipPayload>
          }
          aggregate: {
            args: Prisma.BrokerMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrokerMembership>
          }
          groupBy: {
            args: Prisma.BrokerMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrokerMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrokerMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<BrokerMembershipCountAggregateOutputType> | number
          }
        }
      }
      Statistic: {
        payload: Prisma.$StatisticPayload<ExtArgs>
        fields: Prisma.StatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findFirst: {
            args: Prisma.StatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findMany: {
            args: Prisma.StatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          create: {
            args: Prisma.StatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          createMany: {
            args: Prisma.StatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          delete: {
            args: Prisma.StatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          update: {
            args: Prisma.StatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          deleteMany: {
            args: Prisma.StatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          upsert: {
            args: Prisma.StatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          aggregate: {
            args: Prisma.StatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatistic>
          }
          groupBy: {
            args: Prisma.StatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ListingType: {
        payload: Prisma.$ListingTypePayload<ExtArgs>
        fields: Prisma.ListingTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>
          }
          findFirst: {
            args: Prisma.ListingTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>
          }
          findMany: {
            args: Prisma.ListingTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>[]
          }
          create: {
            args: Prisma.ListingTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>
          }
          createMany: {
            args: Prisma.ListingTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>[]
          }
          delete: {
            args: Prisma.ListingTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>
          }
          update: {
            args: Prisma.ListingTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>
          }
          deleteMany: {
            args: Prisma.ListingTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>[]
          }
          upsert: {
            args: Prisma.ListingTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingTypePayload>
          }
          aggregate: {
            args: Prisma.ListingTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListingType>
          }
          groupBy: {
            args: Prisma.ListingTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ListingTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    property?: PropertyOmit
    category?: CategoryOmit
    favorite?: FavoriteOmit
    appointment?: AppointmentOmit
    transaction?: TransactionOmit
    message?: MessageOmit
    membershipPackage?: MembershipPackageOmit
    brokerMembership?: BrokerMembershipOmit
    statistic?: StatisticOmit
    review?: ReviewOmit
    listingType?: ListingTypeOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    properties: number
    favorites: number
    appointmentsAsCustomer: number
    appointmentsAsBroker: number
    transactionsAsBuyer: number
    transactionsAsBroker: number
    messagesSent: number
    messagesReceived: number
    brokerMemberships: number
    statistics: number
    reviewsGiven: number
    reviewsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    appointmentsAsCustomer?: boolean | UserCountOutputTypeCountAppointmentsAsCustomerArgs
    appointmentsAsBroker?: boolean | UserCountOutputTypeCountAppointmentsAsBrokerArgs
    transactionsAsBuyer?: boolean | UserCountOutputTypeCountTransactionsAsBuyerArgs
    transactionsAsBroker?: boolean | UserCountOutputTypeCountTransactionsAsBrokerArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
    brokerMemberships?: boolean | UserCountOutputTypeCountBrokerMembershipsArgs
    statistics?: boolean | UserCountOutputTypeCountStatisticsArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsAsBrokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsAsBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsAsBrokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBrokerMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrokerMembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    favorites: number
    appointments: number
    transactions: number
    reviews: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | PropertyCountOutputTypeCountFavoritesArgs
    appointments?: boolean | PropertyCountOutputTypeCountAppointmentsArgs
    transactions?: boolean | PropertyCountOutputTypeCountTransactionsArgs
    reviews?: boolean | PropertyCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    properties: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | CategoryCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type MembershipPackageCountOutputType
   */

  export type MembershipPackageCountOutputType = {
    brokerMemberships: number
  }

  export type MembershipPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brokerMemberships?: boolean | MembershipPackageCountOutputTypeCountBrokerMembershipsArgs
  }

  // Custom InputTypes
  /**
   * MembershipPackageCountOutputType without action
   */
  export type MembershipPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackageCountOutputType
     */
    select?: MembershipPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembershipPackageCountOutputType without action
   */
  export type MembershipPackageCountOutputTypeCountBrokerMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrokerMembershipWhereInput
  }


  /**
   * Count Type ListingTypeCountOutputType
   */

  export type ListingTypeCountOutputType = {
    properties: number
  }

  export type ListingTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | ListingTypeCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * ListingTypeCountOutputType without action
   */
  export type ListingTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingTypeCountOutputType
     */
    select?: ListingTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingTypeCountOutputType without action
   */
  export type ListingTypeCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phoneNumber: string | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phoneNumber: string | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    phoneNumber: number
    role: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phoneNumber?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phoneNumber?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phoneNumber?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    phoneNumber: string | null
    role: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | User$propertiesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    appointmentsAsCustomer?: boolean | User$appointmentsAsCustomerArgs<ExtArgs>
    appointmentsAsBroker?: boolean | User$appointmentsAsBrokerArgs<ExtArgs>
    transactionsAsBuyer?: boolean | User$transactionsAsBuyerArgs<ExtArgs>
    transactionsAsBroker?: boolean | User$transactionsAsBrokerArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    brokerMemberships?: boolean | User$brokerMembershipsArgs<ExtArgs>
    statistics?: boolean | User$statisticsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "phoneNumber" | "role" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | User$propertiesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    appointmentsAsCustomer?: boolean | User$appointmentsAsCustomerArgs<ExtArgs>
    appointmentsAsBroker?: boolean | User$appointmentsAsBrokerArgs<ExtArgs>
    transactionsAsBuyer?: boolean | User$transactionsAsBuyerArgs<ExtArgs>
    transactionsAsBroker?: boolean | User$transactionsAsBrokerArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    brokerMemberships?: boolean | User$brokerMembershipsArgs<ExtArgs>
    statistics?: boolean | User$statisticsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      appointmentsAsCustomer: Prisma.$AppointmentPayload<ExtArgs>[]
      appointmentsAsBroker: Prisma.$AppointmentPayload<ExtArgs>[]
      transactionsAsBuyer: Prisma.$TransactionPayload<ExtArgs>[]
      transactionsAsBroker: Prisma.$TransactionPayload<ExtArgs>[]
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      messagesReceived: Prisma.$MessagePayload<ExtArgs>[]
      brokerMemberships: Prisma.$BrokerMembershipPayload<ExtArgs>[]
      statistics: Prisma.$StatisticPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      phoneNumber: string | null
      role: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentsAsCustomer<T extends User$appointmentsAsCustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsCustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentsAsBroker<T extends User$appointmentsAsBrokerArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsBrokerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionsAsBuyer<T extends User$transactionsAsBuyerArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsAsBuyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionsAsBroker<T extends User$transactionsAsBrokerArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsAsBrokerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesReceived<T extends User$messagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brokerMemberships<T extends User$brokerMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$brokerMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statistics<T extends User$statisticsArgs<ExtArgs> = {}>(args?: Subset<T, User$statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.appointmentsAsCustomer
   */
  export type User$appointmentsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.appointmentsAsBroker
   */
  export type User$appointmentsAsBrokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.transactionsAsBuyer
   */
  export type User$transactionsAsBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.transactionsAsBroker
   */
  export type User$transactionsAsBrokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.messagesReceived
   */
  export type User$messagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.brokerMemberships
   */
  export type User$brokerMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    where?: BrokerMembershipWhereInput
    orderBy?: BrokerMembershipOrderByWithRelationInput | BrokerMembershipOrderByWithRelationInput[]
    cursor?: BrokerMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrokerMembershipScalarFieldEnum | BrokerMembershipScalarFieldEnum[]
  }

  /**
   * User.statistics
   */
  export type User$statisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    cursor?: StatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    area: Decimal | null
    categoryId: number | null
    ownerId: number | null
    listingTypeId: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    area: Decimal | null
    categoryId: number | null
    ownerId: number | null
    listingTypeId: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    address: string | null
    area: Decimal | null
    categoryId: number | null
    ownerId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    listingTypeId: number | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    address: string | null
    area: Decimal | null
    categoryId: number | null
    ownerId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    listingTypeId: number | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    address: number
    area: number
    images: number
    categoryId: number
    ownerId: number
    status: number
    createdAt: number
    updatedAt: number
    listingTypeId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    price?: true
    area?: true
    categoryId?: true
    ownerId?: true
    listingTypeId?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    price?: true
    area?: true
    categoryId?: true
    ownerId?: true
    listingTypeId?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    address?: true
    area?: true
    categoryId?: true
    ownerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    listingTypeId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    address?: true
    area?: true
    categoryId?: true
    ownerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    listingTypeId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    address?: true
    area?: true
    images?: true
    categoryId?: true
    ownerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    listingTypeId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    title: string
    description: string | null
    price: Decimal
    address: string
    area: Decimal | null
    images: string[]
    categoryId: number | null
    ownerId: number
    status: string
    createdAt: Date
    updatedAt: Date
    listingTypeId: number | null
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    address?: boolean
    area?: boolean
    images?: boolean
    categoryId?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listingTypeId?: boolean
    category?: boolean | Property$categoryArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | Property$favoritesArgs<ExtArgs>
    appointments?: boolean | Property$appointmentsArgs<ExtArgs>
    transactions?: boolean | Property$transactionsArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    listingType?: boolean | Property$listingTypeArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    address?: boolean
    area?: boolean
    images?: boolean
    categoryId?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listingTypeId?: boolean
    category?: boolean | Property$categoryArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    listingType?: boolean | Property$listingTypeArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    address?: boolean
    area?: boolean
    images?: boolean
    categoryId?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listingTypeId?: boolean
    category?: boolean | Property$categoryArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    listingType?: boolean | Property$listingTypeArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    address?: boolean
    area?: boolean
    images?: boolean
    categoryId?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listingTypeId?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "address" | "area" | "images" | "categoryId" | "ownerId" | "status" | "createdAt" | "updatedAt" | "listingTypeId", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Property$categoryArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | Property$favoritesArgs<ExtArgs>
    appointments?: boolean | Property$appointmentsArgs<ExtArgs>
    transactions?: boolean | Property$transactionsArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    listingType?: boolean | Property$listingTypeArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Property$categoryArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    listingType?: boolean | Property$listingTypeArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Property$categoryArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    listingType?: boolean | Property$listingTypeArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      owner: Prisma.$UserPayload<ExtArgs>
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      listingType: Prisma.$ListingTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      price: Prisma.Decimal
      address: string
      area: Prisma.Decimal | null
      images: string[]
      categoryId: number | null
      ownerId: number
      status: string
      createdAt: Date
      updatedAt: Date
      listingTypeId: number | null
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Property$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Property$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favorites<T extends Property$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Property$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Property$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Property$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Property$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Property$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Property$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Property$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listingType<T extends Property$listingTypeArgs<ExtArgs> = {}>(args?: Subset<T, Property$listingTypeArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Decimal'>
    readonly address: FieldRef<"Property", 'String'>
    readonly area: FieldRef<"Property", 'Decimal'>
    readonly images: FieldRef<"Property", 'String[]'>
    readonly categoryId: FieldRef<"Property", 'Int'>
    readonly ownerId: FieldRef<"Property", 'Int'>
    readonly status: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
    readonly listingTypeId: FieldRef<"Property", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.category
   */
  export type Property$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Property.favorites
   */
  export type Property$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Property.appointments
   */
  export type Property$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Property.transactions
   */
  export type Property$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Property.reviews
   */
  export type Property$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Property.listingType
   */
  export type Property$listingTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    where?: ListingTypeWhereInput
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    properties?: boolean | Category$propertiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Category$propertiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Category$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Category$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.properties
   */
  export type Category$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    propertyId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    propertyId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    propertyId: number | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    propertyId: number | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    customerId: number
    propertyId: number
    createdAt: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    customerId?: true
    propertyId?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    customerId?: true
    propertyId?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    customerId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    customerId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    customerId?: true
    propertyId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: number
    customerId: number
    propertyId: number
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    customerId?: boolean
    propertyId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "propertyId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      propertyId: number
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly customerId: FieldRef<"Favorite", 'Int'>
    readonly propertyId: FieldRef<"Favorite", 'Int'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    brokerId: number | null
    propertyId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    brokerId: number | null
    propertyId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    brokerId: number | null
    propertyId: number | null
    appointmentTime: Date | null
    note: string | null
    status: string | null
    createdAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    brokerId: number | null
    propertyId: number | null
    appointmentTime: Date | null
    note: string | null
    status: string | null
    createdAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    customerId: number
    brokerId: number
    propertyId: number
    appointmentTime: number
    note: number
    status: number
    createdAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    customerId?: true
    brokerId?: true
    propertyId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    customerId?: true
    brokerId?: true
    propertyId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    customerId?: true
    brokerId?: true
    propertyId?: true
    appointmentTime?: true
    note?: true
    status?: true
    createdAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    customerId?: true
    brokerId?: true
    propertyId?: true
    appointmentTime?: true
    note?: true
    status?: true
    createdAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    customerId?: true
    brokerId?: true
    propertyId?: true
    appointmentTime?: true
    note?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    customerId: number
    brokerId: number
    propertyId: number
    appointmentTime: Date
    note: string | null
    status: string
    createdAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    brokerId?: boolean
    propertyId?: boolean
    appointmentTime?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    brokerId?: boolean
    propertyId?: boolean
    appointmentTime?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    brokerId?: boolean
    propertyId?: boolean
    appointmentTime?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    customerId?: boolean
    brokerId?: boolean
    propertyId?: boolean
    appointmentTime?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "brokerId" | "propertyId" | "appointmentTime" | "note" | "status" | "createdAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      broker: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      brokerId: number
      propertyId: number
      appointmentTime: Date
      note: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly customerId: FieldRef<"Appointment", 'Int'>
    readonly brokerId: FieldRef<"Appointment", 'Int'>
    readonly propertyId: FieldRef<"Appointment", 'Int'>
    readonly appointmentTime: FieldRef<"Appointment", 'DateTime'>
    readonly note: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    buyerId: number | null
    brokerId: number | null
    price: Decimal | null
    commission: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    buyerId: number | null
    brokerId: number | null
    price: Decimal | null
    commission: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    buyerId: number | null
    brokerId: number | null
    price: Decimal | null
    commission: Decimal | null
    status: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    buyerId: number | null
    brokerId: number | null
    price: Decimal | null
    commission: Decimal | null
    status: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    propertyId: number
    buyerId: number
    brokerId: number
    price: number
    commission: number
    status: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    brokerId?: true
    price?: true
    commission?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    brokerId?: true
    price?: true
    commission?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    brokerId?: true
    price?: true
    commission?: true
    status?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    brokerId?: true
    price?: true
    commission?: true
    status?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    brokerId?: true
    price?: true
    commission?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    propertyId: number
    buyerId: number
    brokerId: number
    price: Decimal
    commission: Decimal
    status: string
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    brokerId?: boolean
    price?: boolean
    commission?: boolean
    status?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    brokerId?: boolean
    price?: boolean
    commission?: boolean
    status?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    brokerId?: boolean
    price?: boolean
    commission?: boolean
    status?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    brokerId?: boolean
    price?: boolean
    commission?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "buyerId" | "brokerId" | "price" | "commission" | "status" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
      broker: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      buyerId: number
      brokerId: number
      price: Prisma.Decimal
      commission: Prisma.Decimal
      status: string
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly propertyId: FieldRef<"Transaction", 'Int'>
    readonly buyerId: FieldRef<"Transaction", 'Int'>
    readonly brokerId: FieldRef<"Transaction", 'Int'>
    readonly price: FieldRef<"Transaction", 'Decimal'>
    readonly commission: FieldRef<"Transaction", 'Decimal'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    sentAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    sentAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: number
    sentAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    sentAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    sentAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    sentAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: string
    sentAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    sentAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    sentAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    sentAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    sentAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "content" | "sentAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      content: string
      sentAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly receiverId: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MembershipPackage
   */

  export type AggregateMembershipPackage = {
    _count: MembershipPackageCountAggregateOutputType | null
    _avg: MembershipPackageAvgAggregateOutputType | null
    _sum: MembershipPackageSumAggregateOutputType | null
    _min: MembershipPackageMinAggregateOutputType | null
    _max: MembershipPackageMaxAggregateOutputType | null
  }

  export type MembershipPackageAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    durationDays: number | null
  }

  export type MembershipPackageSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    durationDays: number | null
  }

  export type MembershipPackageMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    durationDays: number | null
    description: string | null
  }

  export type MembershipPackageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    durationDays: number | null
    description: string | null
  }

  export type MembershipPackageCountAggregateOutputType = {
    id: number
    name: number
    price: number
    durationDays: number
    description: number
    _all: number
  }


  export type MembershipPackageAvgAggregateInputType = {
    id?: true
    price?: true
    durationDays?: true
  }

  export type MembershipPackageSumAggregateInputType = {
    id?: true
    price?: true
    durationDays?: true
  }

  export type MembershipPackageMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationDays?: true
    description?: true
  }

  export type MembershipPackageMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationDays?: true
    description?: true
  }

  export type MembershipPackageCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationDays?: true
    description?: true
    _all?: true
  }

  export type MembershipPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipPackage to aggregate.
     */
    where?: MembershipPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPackages to fetch.
     */
    orderBy?: MembershipPackageOrderByWithRelationInput | MembershipPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipPackages
    **/
    _count?: true | MembershipPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipPackageMaxAggregateInputType
  }

  export type GetMembershipPackageAggregateType<T extends MembershipPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipPackage[P]>
      : GetScalarType<T[P], AggregateMembershipPackage[P]>
  }




  export type MembershipPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipPackageWhereInput
    orderBy?: MembershipPackageOrderByWithAggregationInput | MembershipPackageOrderByWithAggregationInput[]
    by: MembershipPackageScalarFieldEnum[] | MembershipPackageScalarFieldEnum
    having?: MembershipPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipPackageCountAggregateInputType | true
    _avg?: MembershipPackageAvgAggregateInputType
    _sum?: MembershipPackageSumAggregateInputType
    _min?: MembershipPackageMinAggregateInputType
    _max?: MembershipPackageMaxAggregateInputType
  }

  export type MembershipPackageGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    durationDays: number
    description: string | null
    _count: MembershipPackageCountAggregateOutputType | null
    _avg: MembershipPackageAvgAggregateOutputType | null
    _sum: MembershipPackageSumAggregateOutputType | null
    _min: MembershipPackageMinAggregateOutputType | null
    _max: MembershipPackageMaxAggregateOutputType | null
  }

  type GetMembershipPackageGroupByPayload<T extends MembershipPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipPackageGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipPackageGroupByOutputType[P]>
        }
      >
    >


  export type MembershipPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    description?: boolean
    brokerMemberships?: boolean | MembershipPackage$brokerMembershipsArgs<ExtArgs>
    _count?: boolean | MembershipPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipPackage"]>

  export type MembershipPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    description?: boolean
  }, ExtArgs["result"]["membershipPackage"]>

  export type MembershipPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    description?: boolean
  }, ExtArgs["result"]["membershipPackage"]>

  export type MembershipPackageSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    durationDays?: boolean
    description?: boolean
  }

  export type MembershipPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "durationDays" | "description", ExtArgs["result"]["membershipPackage"]>
  export type MembershipPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brokerMemberships?: boolean | MembershipPackage$brokerMembershipsArgs<ExtArgs>
    _count?: boolean | MembershipPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MembershipPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MembershipPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MembershipPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipPackage"
    objects: {
      brokerMemberships: Prisma.$BrokerMembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
      durationDays: number
      description: string | null
    }, ExtArgs["result"]["membershipPackage"]>
    composites: {}
  }

  type MembershipPackageGetPayload<S extends boolean | null | undefined | MembershipPackageDefaultArgs> = $Result.GetResult<Prisma.$MembershipPackagePayload, S>

  type MembershipPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipPackageCountAggregateInputType | true
    }

  export interface MembershipPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipPackage'], meta: { name: 'MembershipPackage' } }
    /**
     * Find zero or one MembershipPackage that matches the filter.
     * @param {MembershipPackageFindUniqueArgs} args - Arguments to find a MembershipPackage
     * @example
     * // Get one MembershipPackage
     * const membershipPackage = await prisma.membershipPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipPackageFindUniqueArgs>(args: SelectSubset<T, MembershipPackageFindUniqueArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipPackageFindUniqueOrThrowArgs} args - Arguments to find a MembershipPackage
     * @example
     * // Get one MembershipPackage
     * const membershipPackage = await prisma.membershipPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPackageFindFirstArgs} args - Arguments to find a MembershipPackage
     * @example
     * // Get one MembershipPackage
     * const membershipPackage = await prisma.membershipPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipPackageFindFirstArgs>(args?: SelectSubset<T, MembershipPackageFindFirstArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPackageFindFirstOrThrowArgs} args - Arguments to find a MembershipPackage
     * @example
     * // Get one MembershipPackage
     * const membershipPackage = await prisma.membershipPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipPackages
     * const membershipPackages = await prisma.membershipPackage.findMany()
     * 
     * // Get first 10 MembershipPackages
     * const membershipPackages = await prisma.membershipPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipPackageWithIdOnly = await prisma.membershipPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipPackageFindManyArgs>(args?: SelectSubset<T, MembershipPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipPackage.
     * @param {MembershipPackageCreateArgs} args - Arguments to create a MembershipPackage.
     * @example
     * // Create one MembershipPackage
     * const MembershipPackage = await prisma.membershipPackage.create({
     *   data: {
     *     // ... data to create a MembershipPackage
     *   }
     * })
     * 
     */
    create<T extends MembershipPackageCreateArgs>(args: SelectSubset<T, MembershipPackageCreateArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipPackages.
     * @param {MembershipPackageCreateManyArgs} args - Arguments to create many MembershipPackages.
     * @example
     * // Create many MembershipPackages
     * const membershipPackage = await prisma.membershipPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipPackageCreateManyArgs>(args?: SelectSubset<T, MembershipPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembershipPackages and returns the data saved in the database.
     * @param {MembershipPackageCreateManyAndReturnArgs} args - Arguments to create many MembershipPackages.
     * @example
     * // Create many MembershipPackages
     * const membershipPackage = await prisma.membershipPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembershipPackages and only return the `id`
     * const membershipPackageWithIdOnly = await prisma.membershipPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembershipPackage.
     * @param {MembershipPackageDeleteArgs} args - Arguments to delete one MembershipPackage.
     * @example
     * // Delete one MembershipPackage
     * const MembershipPackage = await prisma.membershipPackage.delete({
     *   where: {
     *     // ... filter to delete one MembershipPackage
     *   }
     * })
     * 
     */
    delete<T extends MembershipPackageDeleteArgs>(args: SelectSubset<T, MembershipPackageDeleteArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipPackage.
     * @param {MembershipPackageUpdateArgs} args - Arguments to update one MembershipPackage.
     * @example
     * // Update one MembershipPackage
     * const membershipPackage = await prisma.membershipPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipPackageUpdateArgs>(args: SelectSubset<T, MembershipPackageUpdateArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipPackages.
     * @param {MembershipPackageDeleteManyArgs} args - Arguments to filter MembershipPackages to delete.
     * @example
     * // Delete a few MembershipPackages
     * const { count } = await prisma.membershipPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipPackageDeleteManyArgs>(args?: SelectSubset<T, MembershipPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipPackages
     * const membershipPackage = await prisma.membershipPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipPackageUpdateManyArgs>(args: SelectSubset<T, MembershipPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipPackages and returns the data updated in the database.
     * @param {MembershipPackageUpdateManyAndReturnArgs} args - Arguments to update many MembershipPackages.
     * @example
     * // Update many MembershipPackages
     * const membershipPackage = await prisma.membershipPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembershipPackages and only return the `id`
     * const membershipPackageWithIdOnly = await prisma.membershipPackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembershipPackage.
     * @param {MembershipPackageUpsertArgs} args - Arguments to update or create a MembershipPackage.
     * @example
     * // Update or create a MembershipPackage
     * const membershipPackage = await prisma.membershipPackage.upsert({
     *   create: {
     *     // ... data to create a MembershipPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipPackage we want to update
     *   }
     * })
     */
    upsert<T extends MembershipPackageUpsertArgs>(args: SelectSubset<T, MembershipPackageUpsertArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPackageCountArgs} args - Arguments to filter MembershipPackages to count.
     * @example
     * // Count the number of MembershipPackages
     * const count = await prisma.membershipPackage.count({
     *   where: {
     *     // ... the filter for the MembershipPackages we want to count
     *   }
     * })
    **/
    count<T extends MembershipPackageCountArgs>(
      args?: Subset<T, MembershipPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipPackageAggregateArgs>(args: Subset<T, MembershipPackageAggregateArgs>): Prisma.PrismaPromise<GetMembershipPackageAggregateType<T>>

    /**
     * Group by MembershipPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPackageGroupByArgs} args - Group by arguments.
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
      T extends MembershipPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipPackageGroupByArgs['orderBy'] }
        : { orderBy?: MembershipPackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipPackage model
   */
  readonly fields: MembershipPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brokerMemberships<T extends MembershipPackage$brokerMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, MembershipPackage$brokerMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MembershipPackage model
   */
  interface MembershipPackageFieldRefs {
    readonly id: FieldRef<"MembershipPackage", 'Int'>
    readonly name: FieldRef<"MembershipPackage", 'String'>
    readonly price: FieldRef<"MembershipPackage", 'Decimal'>
    readonly durationDays: FieldRef<"MembershipPackage", 'Int'>
    readonly description: FieldRef<"MembershipPackage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MembershipPackage findUnique
   */
  export type MembershipPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPackage to fetch.
     */
    where: MembershipPackageWhereUniqueInput
  }

  /**
   * MembershipPackage findUniqueOrThrow
   */
  export type MembershipPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPackage to fetch.
     */
    where: MembershipPackageWhereUniqueInput
  }

  /**
   * MembershipPackage findFirst
   */
  export type MembershipPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPackage to fetch.
     */
    where?: MembershipPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPackages to fetch.
     */
    orderBy?: MembershipPackageOrderByWithRelationInput | MembershipPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipPackages.
     */
    cursor?: MembershipPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipPackages.
     */
    distinct?: MembershipPackageScalarFieldEnum | MembershipPackageScalarFieldEnum[]
  }

  /**
   * MembershipPackage findFirstOrThrow
   */
  export type MembershipPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPackage to fetch.
     */
    where?: MembershipPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPackages to fetch.
     */
    orderBy?: MembershipPackageOrderByWithRelationInput | MembershipPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipPackages.
     */
    cursor?: MembershipPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipPackages.
     */
    distinct?: MembershipPackageScalarFieldEnum | MembershipPackageScalarFieldEnum[]
  }

  /**
   * MembershipPackage findMany
   */
  export type MembershipPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPackages to fetch.
     */
    where?: MembershipPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPackages to fetch.
     */
    orderBy?: MembershipPackageOrderByWithRelationInput | MembershipPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipPackages.
     */
    cursor?: MembershipPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPackages.
     */
    skip?: number
    distinct?: MembershipPackageScalarFieldEnum | MembershipPackageScalarFieldEnum[]
  }

  /**
   * MembershipPackage create
   */
  export type MembershipPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a MembershipPackage.
     */
    data: XOR<MembershipPackageCreateInput, MembershipPackageUncheckedCreateInput>
  }

  /**
   * MembershipPackage createMany
   */
  export type MembershipPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipPackages.
     */
    data: MembershipPackageCreateManyInput | MembershipPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipPackage createManyAndReturn
   */
  export type MembershipPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * The data used to create many MembershipPackages.
     */
    data: MembershipPackageCreateManyInput | MembershipPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipPackage update
   */
  export type MembershipPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a MembershipPackage.
     */
    data: XOR<MembershipPackageUpdateInput, MembershipPackageUncheckedUpdateInput>
    /**
     * Choose, which MembershipPackage to update.
     */
    where: MembershipPackageWhereUniqueInput
  }

  /**
   * MembershipPackage updateMany
   */
  export type MembershipPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipPackages.
     */
    data: XOR<MembershipPackageUpdateManyMutationInput, MembershipPackageUncheckedUpdateManyInput>
    /**
     * Filter which MembershipPackages to update
     */
    where?: MembershipPackageWhereInput
    /**
     * Limit how many MembershipPackages to update.
     */
    limit?: number
  }

  /**
   * MembershipPackage updateManyAndReturn
   */
  export type MembershipPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * The data used to update MembershipPackages.
     */
    data: XOR<MembershipPackageUpdateManyMutationInput, MembershipPackageUncheckedUpdateManyInput>
    /**
     * Filter which MembershipPackages to update
     */
    where?: MembershipPackageWhereInput
    /**
     * Limit how many MembershipPackages to update.
     */
    limit?: number
  }

  /**
   * MembershipPackage upsert
   */
  export type MembershipPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the MembershipPackage to update in case it exists.
     */
    where: MembershipPackageWhereUniqueInput
    /**
     * In case the MembershipPackage found by the `where` argument doesn't exist, create a new MembershipPackage with this data.
     */
    create: XOR<MembershipPackageCreateInput, MembershipPackageUncheckedCreateInput>
    /**
     * In case the MembershipPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipPackageUpdateInput, MembershipPackageUncheckedUpdateInput>
  }

  /**
   * MembershipPackage delete
   */
  export type MembershipPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
    /**
     * Filter which MembershipPackage to delete.
     */
    where: MembershipPackageWhereUniqueInput
  }

  /**
   * MembershipPackage deleteMany
   */
  export type MembershipPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipPackages to delete
     */
    where?: MembershipPackageWhereInput
    /**
     * Limit how many MembershipPackages to delete.
     */
    limit?: number
  }

  /**
   * MembershipPackage.brokerMemberships
   */
  export type MembershipPackage$brokerMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    where?: BrokerMembershipWhereInput
    orderBy?: BrokerMembershipOrderByWithRelationInput | BrokerMembershipOrderByWithRelationInput[]
    cursor?: BrokerMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrokerMembershipScalarFieldEnum | BrokerMembershipScalarFieldEnum[]
  }

  /**
   * MembershipPackage without action
   */
  export type MembershipPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPackage
     */
    select?: MembershipPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPackage
     */
    omit?: MembershipPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPackageInclude<ExtArgs> | null
  }


  /**
   * Model BrokerMembership
   */

  export type AggregateBrokerMembership = {
    _count: BrokerMembershipCountAggregateOutputType | null
    _avg: BrokerMembershipAvgAggregateOutputType | null
    _sum: BrokerMembershipSumAggregateOutputType | null
    _min: BrokerMembershipMinAggregateOutputType | null
    _max: BrokerMembershipMaxAggregateOutputType | null
  }

  export type BrokerMembershipAvgAggregateOutputType = {
    id: number | null
    brokerId: number | null
    packageId: number | null
  }

  export type BrokerMembershipSumAggregateOutputType = {
    id: number | null
    brokerId: number | null
    packageId: number | null
  }

  export type BrokerMembershipMinAggregateOutputType = {
    id: number | null
    brokerId: number | null
    packageId: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type BrokerMembershipMaxAggregateOutputType = {
    id: number | null
    brokerId: number | null
    packageId: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type BrokerMembershipCountAggregateOutputType = {
    id: number
    brokerId: number
    packageId: number
    startDate: number
    endDate: number
    _all: number
  }


  export type BrokerMembershipAvgAggregateInputType = {
    id?: true
    brokerId?: true
    packageId?: true
  }

  export type BrokerMembershipSumAggregateInputType = {
    id?: true
    brokerId?: true
    packageId?: true
  }

  export type BrokerMembershipMinAggregateInputType = {
    id?: true
    brokerId?: true
    packageId?: true
    startDate?: true
    endDate?: true
  }

  export type BrokerMembershipMaxAggregateInputType = {
    id?: true
    brokerId?: true
    packageId?: true
    startDate?: true
    endDate?: true
  }

  export type BrokerMembershipCountAggregateInputType = {
    id?: true
    brokerId?: true
    packageId?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type BrokerMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrokerMembership to aggregate.
     */
    where?: BrokerMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerMemberships to fetch.
     */
    orderBy?: BrokerMembershipOrderByWithRelationInput | BrokerMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrokerMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrokerMemberships
    **/
    _count?: true | BrokerMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrokerMembershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrokerMembershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrokerMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrokerMembershipMaxAggregateInputType
  }

  export type GetBrokerMembershipAggregateType<T extends BrokerMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateBrokerMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrokerMembership[P]>
      : GetScalarType<T[P], AggregateBrokerMembership[P]>
  }




  export type BrokerMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrokerMembershipWhereInput
    orderBy?: BrokerMembershipOrderByWithAggregationInput | BrokerMembershipOrderByWithAggregationInput[]
    by: BrokerMembershipScalarFieldEnum[] | BrokerMembershipScalarFieldEnum
    having?: BrokerMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrokerMembershipCountAggregateInputType | true
    _avg?: BrokerMembershipAvgAggregateInputType
    _sum?: BrokerMembershipSumAggregateInputType
    _min?: BrokerMembershipMinAggregateInputType
    _max?: BrokerMembershipMaxAggregateInputType
  }

  export type BrokerMembershipGroupByOutputType = {
    id: number
    brokerId: number
    packageId: number
    startDate: Date
    endDate: Date
    _count: BrokerMembershipCountAggregateOutputType | null
    _avg: BrokerMembershipAvgAggregateOutputType | null
    _sum: BrokerMembershipSumAggregateOutputType | null
    _min: BrokerMembershipMinAggregateOutputType | null
    _max: BrokerMembershipMaxAggregateOutputType | null
  }

  type GetBrokerMembershipGroupByPayload<T extends BrokerMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrokerMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrokerMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrokerMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], BrokerMembershipGroupByOutputType[P]>
        }
      >
    >


  export type BrokerMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brokerId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
    broker?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | MembershipPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brokerMembership"]>

  export type BrokerMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brokerId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
    broker?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | MembershipPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brokerMembership"]>

  export type BrokerMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brokerId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
    broker?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | MembershipPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brokerMembership"]>

  export type BrokerMembershipSelectScalar = {
    id?: boolean
    brokerId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type BrokerMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brokerId" | "packageId" | "startDate" | "endDate", ExtArgs["result"]["brokerMembership"]>
  export type BrokerMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broker?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | MembershipPackageDefaultArgs<ExtArgs>
  }
  export type BrokerMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broker?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | MembershipPackageDefaultArgs<ExtArgs>
  }
  export type BrokerMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broker?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | MembershipPackageDefaultArgs<ExtArgs>
  }

  export type $BrokerMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrokerMembership"
    objects: {
      broker: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$MembershipPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brokerId: number
      packageId: number
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["brokerMembership"]>
    composites: {}
  }

  type BrokerMembershipGetPayload<S extends boolean | null | undefined | BrokerMembershipDefaultArgs> = $Result.GetResult<Prisma.$BrokerMembershipPayload, S>

  type BrokerMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrokerMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrokerMembershipCountAggregateInputType | true
    }

  export interface BrokerMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrokerMembership'], meta: { name: 'BrokerMembership' } }
    /**
     * Find zero or one BrokerMembership that matches the filter.
     * @param {BrokerMembershipFindUniqueArgs} args - Arguments to find a BrokerMembership
     * @example
     * // Get one BrokerMembership
     * const brokerMembership = await prisma.brokerMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrokerMembershipFindUniqueArgs>(args: SelectSubset<T, BrokerMembershipFindUniqueArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrokerMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrokerMembershipFindUniqueOrThrowArgs} args - Arguments to find a BrokerMembership
     * @example
     * // Get one BrokerMembership
     * const brokerMembership = await prisma.brokerMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrokerMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, BrokerMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrokerMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerMembershipFindFirstArgs} args - Arguments to find a BrokerMembership
     * @example
     * // Get one BrokerMembership
     * const brokerMembership = await prisma.brokerMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrokerMembershipFindFirstArgs>(args?: SelectSubset<T, BrokerMembershipFindFirstArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrokerMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerMembershipFindFirstOrThrowArgs} args - Arguments to find a BrokerMembership
     * @example
     * // Get one BrokerMembership
     * const brokerMembership = await prisma.brokerMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrokerMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, BrokerMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrokerMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrokerMemberships
     * const brokerMemberships = await prisma.brokerMembership.findMany()
     * 
     * // Get first 10 BrokerMemberships
     * const brokerMemberships = await prisma.brokerMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brokerMembershipWithIdOnly = await prisma.brokerMembership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrokerMembershipFindManyArgs>(args?: SelectSubset<T, BrokerMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrokerMembership.
     * @param {BrokerMembershipCreateArgs} args - Arguments to create a BrokerMembership.
     * @example
     * // Create one BrokerMembership
     * const BrokerMembership = await prisma.brokerMembership.create({
     *   data: {
     *     // ... data to create a BrokerMembership
     *   }
     * })
     * 
     */
    create<T extends BrokerMembershipCreateArgs>(args: SelectSubset<T, BrokerMembershipCreateArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrokerMemberships.
     * @param {BrokerMembershipCreateManyArgs} args - Arguments to create many BrokerMemberships.
     * @example
     * // Create many BrokerMemberships
     * const brokerMembership = await prisma.brokerMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrokerMembershipCreateManyArgs>(args?: SelectSubset<T, BrokerMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrokerMemberships and returns the data saved in the database.
     * @param {BrokerMembershipCreateManyAndReturnArgs} args - Arguments to create many BrokerMemberships.
     * @example
     * // Create many BrokerMemberships
     * const brokerMembership = await prisma.brokerMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrokerMemberships and only return the `id`
     * const brokerMembershipWithIdOnly = await prisma.brokerMembership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrokerMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, BrokerMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrokerMembership.
     * @param {BrokerMembershipDeleteArgs} args - Arguments to delete one BrokerMembership.
     * @example
     * // Delete one BrokerMembership
     * const BrokerMembership = await prisma.brokerMembership.delete({
     *   where: {
     *     // ... filter to delete one BrokerMembership
     *   }
     * })
     * 
     */
    delete<T extends BrokerMembershipDeleteArgs>(args: SelectSubset<T, BrokerMembershipDeleteArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrokerMembership.
     * @param {BrokerMembershipUpdateArgs} args - Arguments to update one BrokerMembership.
     * @example
     * // Update one BrokerMembership
     * const brokerMembership = await prisma.brokerMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrokerMembershipUpdateArgs>(args: SelectSubset<T, BrokerMembershipUpdateArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrokerMemberships.
     * @param {BrokerMembershipDeleteManyArgs} args - Arguments to filter BrokerMemberships to delete.
     * @example
     * // Delete a few BrokerMemberships
     * const { count } = await prisma.brokerMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrokerMembershipDeleteManyArgs>(args?: SelectSubset<T, BrokerMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrokerMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrokerMemberships
     * const brokerMembership = await prisma.brokerMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrokerMembershipUpdateManyArgs>(args: SelectSubset<T, BrokerMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrokerMemberships and returns the data updated in the database.
     * @param {BrokerMembershipUpdateManyAndReturnArgs} args - Arguments to update many BrokerMemberships.
     * @example
     * // Update many BrokerMemberships
     * const brokerMembership = await prisma.brokerMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrokerMemberships and only return the `id`
     * const brokerMembershipWithIdOnly = await prisma.brokerMembership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrokerMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, BrokerMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrokerMembership.
     * @param {BrokerMembershipUpsertArgs} args - Arguments to update or create a BrokerMembership.
     * @example
     * // Update or create a BrokerMembership
     * const brokerMembership = await prisma.brokerMembership.upsert({
     *   create: {
     *     // ... data to create a BrokerMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrokerMembership we want to update
     *   }
     * })
     */
    upsert<T extends BrokerMembershipUpsertArgs>(args: SelectSubset<T, BrokerMembershipUpsertArgs<ExtArgs>>): Prisma__BrokerMembershipClient<$Result.GetResult<Prisma.$BrokerMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrokerMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerMembershipCountArgs} args - Arguments to filter BrokerMemberships to count.
     * @example
     * // Count the number of BrokerMemberships
     * const count = await prisma.brokerMembership.count({
     *   where: {
     *     // ... the filter for the BrokerMemberships we want to count
     *   }
     * })
    **/
    count<T extends BrokerMembershipCountArgs>(
      args?: Subset<T, BrokerMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrokerMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrokerMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrokerMembershipAggregateArgs>(args: Subset<T, BrokerMembershipAggregateArgs>): Prisma.PrismaPromise<GetBrokerMembershipAggregateType<T>>

    /**
     * Group by BrokerMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerMembershipGroupByArgs} args - Group by arguments.
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
      T extends BrokerMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrokerMembershipGroupByArgs['orderBy'] }
        : { orderBy?: BrokerMembershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrokerMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrokerMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrokerMembership model
   */
  readonly fields: BrokerMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrokerMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrokerMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    broker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends MembershipPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipPackageDefaultArgs<ExtArgs>>): Prisma__MembershipPackageClient<$Result.GetResult<Prisma.$MembershipPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BrokerMembership model
   */
  interface BrokerMembershipFieldRefs {
    readonly id: FieldRef<"BrokerMembership", 'Int'>
    readonly brokerId: FieldRef<"BrokerMembership", 'Int'>
    readonly packageId: FieldRef<"BrokerMembership", 'Int'>
    readonly startDate: FieldRef<"BrokerMembership", 'DateTime'>
    readonly endDate: FieldRef<"BrokerMembership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BrokerMembership findUnique
   */
  export type BrokerMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * Filter, which BrokerMembership to fetch.
     */
    where: BrokerMembershipWhereUniqueInput
  }

  /**
   * BrokerMembership findUniqueOrThrow
   */
  export type BrokerMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * Filter, which BrokerMembership to fetch.
     */
    where: BrokerMembershipWhereUniqueInput
  }

  /**
   * BrokerMembership findFirst
   */
  export type BrokerMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * Filter, which BrokerMembership to fetch.
     */
    where?: BrokerMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerMemberships to fetch.
     */
    orderBy?: BrokerMembershipOrderByWithRelationInput | BrokerMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrokerMemberships.
     */
    cursor?: BrokerMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrokerMemberships.
     */
    distinct?: BrokerMembershipScalarFieldEnum | BrokerMembershipScalarFieldEnum[]
  }

  /**
   * BrokerMembership findFirstOrThrow
   */
  export type BrokerMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * Filter, which BrokerMembership to fetch.
     */
    where?: BrokerMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerMemberships to fetch.
     */
    orderBy?: BrokerMembershipOrderByWithRelationInput | BrokerMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrokerMemberships.
     */
    cursor?: BrokerMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrokerMemberships.
     */
    distinct?: BrokerMembershipScalarFieldEnum | BrokerMembershipScalarFieldEnum[]
  }

  /**
   * BrokerMembership findMany
   */
  export type BrokerMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * Filter, which BrokerMemberships to fetch.
     */
    where?: BrokerMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerMemberships to fetch.
     */
    orderBy?: BrokerMembershipOrderByWithRelationInput | BrokerMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrokerMemberships.
     */
    cursor?: BrokerMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerMemberships.
     */
    skip?: number
    distinct?: BrokerMembershipScalarFieldEnum | BrokerMembershipScalarFieldEnum[]
  }

  /**
   * BrokerMembership create
   */
  export type BrokerMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a BrokerMembership.
     */
    data: XOR<BrokerMembershipCreateInput, BrokerMembershipUncheckedCreateInput>
  }

  /**
   * BrokerMembership createMany
   */
  export type BrokerMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrokerMemberships.
     */
    data: BrokerMembershipCreateManyInput | BrokerMembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrokerMembership createManyAndReturn
   */
  export type BrokerMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many BrokerMemberships.
     */
    data: BrokerMembershipCreateManyInput | BrokerMembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrokerMembership update
   */
  export type BrokerMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a BrokerMembership.
     */
    data: XOR<BrokerMembershipUpdateInput, BrokerMembershipUncheckedUpdateInput>
    /**
     * Choose, which BrokerMembership to update.
     */
    where: BrokerMembershipWhereUniqueInput
  }

  /**
   * BrokerMembership updateMany
   */
  export type BrokerMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrokerMemberships.
     */
    data: XOR<BrokerMembershipUpdateManyMutationInput, BrokerMembershipUncheckedUpdateManyInput>
    /**
     * Filter which BrokerMemberships to update
     */
    where?: BrokerMembershipWhereInput
    /**
     * Limit how many BrokerMemberships to update.
     */
    limit?: number
  }

  /**
   * BrokerMembership updateManyAndReturn
   */
  export type BrokerMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * The data used to update BrokerMemberships.
     */
    data: XOR<BrokerMembershipUpdateManyMutationInput, BrokerMembershipUncheckedUpdateManyInput>
    /**
     * Filter which BrokerMemberships to update
     */
    where?: BrokerMembershipWhereInput
    /**
     * Limit how many BrokerMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrokerMembership upsert
   */
  export type BrokerMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the BrokerMembership to update in case it exists.
     */
    where: BrokerMembershipWhereUniqueInput
    /**
     * In case the BrokerMembership found by the `where` argument doesn't exist, create a new BrokerMembership with this data.
     */
    create: XOR<BrokerMembershipCreateInput, BrokerMembershipUncheckedCreateInput>
    /**
     * In case the BrokerMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrokerMembershipUpdateInput, BrokerMembershipUncheckedUpdateInput>
  }

  /**
   * BrokerMembership delete
   */
  export type BrokerMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
    /**
     * Filter which BrokerMembership to delete.
     */
    where: BrokerMembershipWhereUniqueInput
  }

  /**
   * BrokerMembership deleteMany
   */
  export type BrokerMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrokerMemberships to delete
     */
    where?: BrokerMembershipWhereInput
    /**
     * Limit how many BrokerMemberships to delete.
     */
    limit?: number
  }

  /**
   * BrokerMembership without action
   */
  export type BrokerMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerMembership
     */
    select?: BrokerMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerMembership
     */
    omit?: BrokerMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerMembershipInclude<ExtArgs> | null
  }


  /**
   * Model Statistic
   */

  export type AggregateStatistic = {
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  export type StatisticAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalProperties: number | null
    totalTransactions: number | null
    totalIncome: Decimal | null
  }

  export type StatisticSumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalProperties: number | null
    totalTransactions: number | null
    totalIncome: Decimal | null
  }

  export type StatisticMinAggregateOutputType = {
    id: number | null
    userId: number | null
    totalProperties: number | null
    totalTransactions: number | null
    totalIncome: Decimal | null
    createdAt: Date | null
  }

  export type StatisticMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    totalProperties: number | null
    totalTransactions: number | null
    totalIncome: Decimal | null
    createdAt: Date | null
  }

  export type StatisticCountAggregateOutputType = {
    id: number
    userId: number
    totalProperties: number
    totalTransactions: number
    totalIncome: number
    createdAt: number
    _all: number
  }


  export type StatisticAvgAggregateInputType = {
    id?: true
    userId?: true
    totalProperties?: true
    totalTransactions?: true
    totalIncome?: true
  }

  export type StatisticSumAggregateInputType = {
    id?: true
    userId?: true
    totalProperties?: true
    totalTransactions?: true
    totalIncome?: true
  }

  export type StatisticMinAggregateInputType = {
    id?: true
    userId?: true
    totalProperties?: true
    totalTransactions?: true
    totalIncome?: true
    createdAt?: true
  }

  export type StatisticMaxAggregateInputType = {
    id?: true
    userId?: true
    totalProperties?: true
    totalTransactions?: true
    totalIncome?: true
    createdAt?: true
  }

  export type StatisticCountAggregateInputType = {
    id?: true
    userId?: true
    totalProperties?: true
    totalTransactions?: true
    totalIncome?: true
    createdAt?: true
    _all?: true
  }

  export type StatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistic to aggregate.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statistics
    **/
    _count?: true | StatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticMaxAggregateInputType
  }

  export type GetStatisticAggregateType<T extends StatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistic[P]>
      : GetScalarType<T[P], AggregateStatistic[P]>
  }




  export type StatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithAggregationInput | StatisticOrderByWithAggregationInput[]
    by: StatisticScalarFieldEnum[] | StatisticScalarFieldEnum
    having?: StatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticCountAggregateInputType | true
    _avg?: StatisticAvgAggregateInputType
    _sum?: StatisticSumAggregateInputType
    _min?: StatisticMinAggregateInputType
    _max?: StatisticMaxAggregateInputType
  }

  export type StatisticGroupByOutputType = {
    id: number
    userId: number
    totalProperties: number
    totalTransactions: number
    totalIncome: Decimal
    createdAt: Date
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  type GetStatisticGroupByPayload<T extends StatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticGroupByOutputType[P]>
        }
      >
    >


  export type StatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalProperties?: boolean
    totalTransactions?: boolean
    totalIncome?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalProperties?: boolean
    totalTransactions?: boolean
    totalIncome?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalProperties?: boolean
    totalTransactions?: boolean
    totalIncome?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectScalar = {
    id?: boolean
    userId?: boolean
    totalProperties?: boolean
    totalTransactions?: boolean
    totalIncome?: boolean
    createdAt?: boolean
  }

  export type StatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalProperties" | "totalTransactions" | "totalIncome" | "createdAt", ExtArgs["result"]["statistic"]>
  export type StatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatisticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statistic"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      totalProperties: number
      totalTransactions: number
      totalIncome: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["statistic"]>
    composites: {}
  }

  type StatisticGetPayload<S extends boolean | null | undefined | StatisticDefaultArgs> = $Result.GetResult<Prisma.$StatisticPayload, S>

  type StatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatisticCountAggregateInputType | true
    }

  export interface StatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statistic'], meta: { name: 'Statistic' } }
    /**
     * Find zero or one Statistic that matches the filter.
     * @param {StatisticFindUniqueArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticFindUniqueArgs>(args: SelectSubset<T, StatisticFindUniqueArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Statistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatisticFindUniqueOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticFindFirstArgs>(args?: SelectSubset<T, StatisticFindFirstArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics
     * const statistics = await prisma.statistic.findMany()
     * 
     * // Get first 10 Statistics
     * const statistics = await prisma.statistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticWithIdOnly = await prisma.statistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatisticFindManyArgs>(args?: SelectSubset<T, StatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Statistic.
     * @param {StatisticCreateArgs} args - Arguments to create a Statistic.
     * @example
     * // Create one Statistic
     * const Statistic = await prisma.statistic.create({
     *   data: {
     *     // ... data to create a Statistic
     *   }
     * })
     * 
     */
    create<T extends StatisticCreateArgs>(args: SelectSubset<T, StatisticCreateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statistics.
     * @param {StatisticCreateManyArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticCreateManyArgs>(args?: SelectSubset<T, StatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statistics and returns the data saved in the database.
     * @param {StatisticCreateManyAndReturnArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statistics and only return the `id`
     * const statisticWithIdOnly = await prisma.statistic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, StatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Statistic.
     * @param {StatisticDeleteArgs} args - Arguments to delete one Statistic.
     * @example
     * // Delete one Statistic
     * const Statistic = await prisma.statistic.delete({
     *   where: {
     *     // ... filter to delete one Statistic
     *   }
     * })
     * 
     */
    delete<T extends StatisticDeleteArgs>(args: SelectSubset<T, StatisticDeleteArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Statistic.
     * @param {StatisticUpdateArgs} args - Arguments to update one Statistic.
     * @example
     * // Update one Statistic
     * const statistic = await prisma.statistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticUpdateArgs>(args: SelectSubset<T, StatisticUpdateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statistics.
     * @param {StatisticDeleteManyArgs} args - Arguments to filter Statistics to delete.
     * @example
     * // Delete a few Statistics
     * const { count } = await prisma.statistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticDeleteManyArgs>(args?: SelectSubset<T, StatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticUpdateManyArgs>(args: SelectSubset<T, StatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics and returns the data updated in the database.
     * @param {StatisticUpdateManyAndReturnArgs} args - Arguments to update many Statistics.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statistics and only return the `id`
     * const statisticWithIdOnly = await prisma.statistic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, StatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Statistic.
     * @param {StatisticUpsertArgs} args - Arguments to update or create a Statistic.
     * @example
     * // Update or create a Statistic
     * const statistic = await prisma.statistic.upsert({
     *   create: {
     *     // ... data to create a Statistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistic we want to update
     *   }
     * })
     */
    upsert<T extends StatisticUpsertArgs>(args: SelectSubset<T, StatisticUpsertArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticCountArgs} args - Arguments to filter Statistics to count.
     * @example
     * // Count the number of Statistics
     * const count = await prisma.statistic.count({
     *   where: {
     *     // ... the filter for the Statistics we want to count
     *   }
     * })
    **/
    count<T extends StatisticCountArgs>(
      args?: Subset<T, StatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatisticAggregateArgs>(args: Subset<T, StatisticAggregateArgs>): Prisma.PrismaPromise<GetStatisticAggregateType<T>>

    /**
     * Group by Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticGroupByArgs} args - Group by arguments.
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
      T extends StatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticGroupByArgs['orderBy'] }
        : { orderBy?: StatisticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statistic model
   */
  readonly fields: StatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Statistic model
   */
  interface StatisticFieldRefs {
    readonly id: FieldRef<"Statistic", 'Int'>
    readonly userId: FieldRef<"Statistic", 'Int'>
    readonly totalProperties: FieldRef<"Statistic", 'Int'>
    readonly totalTransactions: FieldRef<"Statistic", 'Int'>
    readonly totalIncome: FieldRef<"Statistic", 'Decimal'>
    readonly createdAt: FieldRef<"Statistic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Statistic findUnique
   */
  export type StatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findUniqueOrThrow
   */
  export type StatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findFirst
   */
  export type StatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findFirstOrThrow
   */
  export type StatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findMany
   */
  export type StatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistics to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic create
   */
  export type StatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a Statistic.
     */
    data: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
  }

  /**
   * Statistic createMany
   */
  export type StatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Statistic createManyAndReturn
   */
  export type StatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic update
   */
  export type StatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a Statistic.
     */
    data: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
    /**
     * Choose, which Statistic to update.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic updateMany
   */
  export type StatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
  }

  /**
   * Statistic updateManyAndReturn
   */
  export type StatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic upsert
   */
  export type StatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the Statistic to update in case it exists.
     */
    where: StatisticWhereUniqueInput
    /**
     * In case the Statistic found by the `where` argument doesn't exist, create a new Statistic with this data.
     */
    create: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
    /**
     * In case the Statistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
  }

  /**
   * Statistic delete
   */
  export type StatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter which Statistic to delete.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic deleteMany
   */
  export type StatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistics to delete
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to delete.
     */
    limit?: number
  }

  /**
   * Statistic without action
   */
  export type StatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    targetUserId: number | null
    propertyId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    targetUserId: number | null
    propertyId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    targetUserId: number | null
    propertyId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    targetUserId: number | null
    propertyId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    reviewerId: number
    targetUserId: number
    propertyId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    propertyId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    propertyId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    propertyId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    propertyId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    propertyId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    reviewerId: number
    targetUserId: number | null
    propertyId: number | null
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    propertyId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | Review$targetUserArgs<ExtArgs>
    property?: boolean | Review$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    propertyId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | Review$targetUserArgs<ExtArgs>
    property?: boolean | Review$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    propertyId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | Review$targetUserArgs<ExtArgs>
    property?: boolean | Review$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    propertyId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewerId" | "targetUserId" | "propertyId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | Review$targetUserArgs<ExtArgs>
    property?: boolean | Review$propertyArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | Review$targetUserArgs<ExtArgs>
    property?: boolean | Review$propertyArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | Review$targetUserArgs<ExtArgs>
    property?: boolean | Review$propertyArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewer: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs> | null
      property: Prisma.$PropertyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewerId: number
      targetUserId: number | null
      propertyId: number | null
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends Review$targetUserArgs<ExtArgs> = {}>(args?: Subset<T, Review$targetUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    property<T extends Review$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Review$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly reviewerId: FieldRef<"Review", 'Int'>
    readonly targetUserId: FieldRef<"Review", 'Int'>
    readonly propertyId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.targetUser
   */
  export type Review$targetUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review.property
   */
  export type Review$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model ListingType
   */

  export type AggregateListingType = {
    _count: ListingTypeCountAggregateOutputType | null
    _avg: ListingTypeAvgAggregateOutputType | null
    _sum: ListingTypeSumAggregateOutputType | null
    _min: ListingTypeMinAggregateOutputType | null
    _max: ListingTypeMaxAggregateOutputType | null
  }

  export type ListingTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ListingTypeSumAggregateOutputType = {
    id: number | null
  }

  export type ListingTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ListingTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ListingTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ListingTypeAvgAggregateInputType = {
    id?: true
  }

  export type ListingTypeSumAggregateInputType = {
    id?: true
  }

  export type ListingTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ListingTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ListingTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ListingTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingType to aggregate.
     */
    where?: ListingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingTypes to fetch.
     */
    orderBy?: ListingTypeOrderByWithRelationInput | ListingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListingTypes
    **/
    _count?: true | ListingTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingTypeMaxAggregateInputType
  }

  export type GetListingTypeAggregateType<T extends ListingTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateListingType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListingType[P]>
      : GetScalarType<T[P], AggregateListingType[P]>
  }




  export type ListingTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingTypeWhereInput
    orderBy?: ListingTypeOrderByWithAggregationInput | ListingTypeOrderByWithAggregationInput[]
    by: ListingTypeScalarFieldEnum[] | ListingTypeScalarFieldEnum
    having?: ListingTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingTypeCountAggregateInputType | true
    _avg?: ListingTypeAvgAggregateInputType
    _sum?: ListingTypeSumAggregateInputType
    _min?: ListingTypeMinAggregateInputType
    _max?: ListingTypeMaxAggregateInputType
  }

  export type ListingTypeGroupByOutputType = {
    id: number
    name: string
    _count: ListingTypeCountAggregateOutputType | null
    _avg: ListingTypeAvgAggregateOutputType | null
    _sum: ListingTypeSumAggregateOutputType | null
    _min: ListingTypeMinAggregateOutputType | null
    _max: ListingTypeMaxAggregateOutputType | null
  }

  type GetListingTypeGroupByPayload<T extends ListingTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ListingTypeGroupByOutputType[P]>
        }
      >
    >


  export type ListingTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    properties?: boolean | ListingType$propertiesArgs<ExtArgs>
    _count?: boolean | ListingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingType"]>

  export type ListingTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["listingType"]>

  export type ListingTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["listingType"]>

  export type ListingTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ListingTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["listingType"]>
  export type ListingTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | ListingType$propertiesArgs<ExtArgs>
    _count?: boolean | ListingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ListingTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ListingTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListingType"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["listingType"]>
    composites: {}
  }

  type ListingTypeGetPayload<S extends boolean | null | undefined | ListingTypeDefaultArgs> = $Result.GetResult<Prisma.$ListingTypePayload, S>

  type ListingTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingTypeCountAggregateInputType | true
    }

  export interface ListingTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListingType'], meta: { name: 'ListingType' } }
    /**
     * Find zero or one ListingType that matches the filter.
     * @param {ListingTypeFindUniqueArgs} args - Arguments to find a ListingType
     * @example
     * // Get one ListingType
     * const listingType = await prisma.listingType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingTypeFindUniqueArgs>(args: SelectSubset<T, ListingTypeFindUniqueArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListingType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingTypeFindUniqueOrThrowArgs} args - Arguments to find a ListingType
     * @example
     * // Get one ListingType
     * const listingType = await prisma.listingType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingTypeFindFirstArgs} args - Arguments to find a ListingType
     * @example
     * // Get one ListingType
     * const listingType = await prisma.listingType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingTypeFindFirstArgs>(args?: SelectSubset<T, ListingTypeFindFirstArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingTypeFindFirstOrThrowArgs} args - Arguments to find a ListingType
     * @example
     * // Get one ListingType
     * const listingType = await prisma.listingType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListingTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingTypes
     * const listingTypes = await prisma.listingType.findMany()
     * 
     * // Get first 10 ListingTypes
     * const listingTypes = await prisma.listingType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingTypeWithIdOnly = await prisma.listingType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingTypeFindManyArgs>(args?: SelectSubset<T, ListingTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListingType.
     * @param {ListingTypeCreateArgs} args - Arguments to create a ListingType.
     * @example
     * // Create one ListingType
     * const ListingType = await prisma.listingType.create({
     *   data: {
     *     // ... data to create a ListingType
     *   }
     * })
     * 
     */
    create<T extends ListingTypeCreateArgs>(args: SelectSubset<T, ListingTypeCreateArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListingTypes.
     * @param {ListingTypeCreateManyArgs} args - Arguments to create many ListingTypes.
     * @example
     * // Create many ListingTypes
     * const listingType = await prisma.listingType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingTypeCreateManyArgs>(args?: SelectSubset<T, ListingTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListingTypes and returns the data saved in the database.
     * @param {ListingTypeCreateManyAndReturnArgs} args - Arguments to create many ListingTypes.
     * @example
     * // Create many ListingTypes
     * const listingType = await prisma.listingType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListingTypes and only return the `id`
     * const listingTypeWithIdOnly = await prisma.listingType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListingType.
     * @param {ListingTypeDeleteArgs} args - Arguments to delete one ListingType.
     * @example
     * // Delete one ListingType
     * const ListingType = await prisma.listingType.delete({
     *   where: {
     *     // ... filter to delete one ListingType
     *   }
     * })
     * 
     */
    delete<T extends ListingTypeDeleteArgs>(args: SelectSubset<T, ListingTypeDeleteArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListingType.
     * @param {ListingTypeUpdateArgs} args - Arguments to update one ListingType.
     * @example
     * // Update one ListingType
     * const listingType = await prisma.listingType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingTypeUpdateArgs>(args: SelectSubset<T, ListingTypeUpdateArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListingTypes.
     * @param {ListingTypeDeleteManyArgs} args - Arguments to filter ListingTypes to delete.
     * @example
     * // Delete a few ListingTypes
     * const { count } = await prisma.listingType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingTypeDeleteManyArgs>(args?: SelectSubset<T, ListingTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingTypes
     * const listingType = await prisma.listingType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingTypeUpdateManyArgs>(args: SelectSubset<T, ListingTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingTypes and returns the data updated in the database.
     * @param {ListingTypeUpdateManyAndReturnArgs} args - Arguments to update many ListingTypes.
     * @example
     * // Update many ListingTypes
     * const listingType = await prisma.listingType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListingTypes and only return the `id`
     * const listingTypeWithIdOnly = await prisma.listingType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListingType.
     * @param {ListingTypeUpsertArgs} args - Arguments to update or create a ListingType.
     * @example
     * // Update or create a ListingType
     * const listingType = await prisma.listingType.upsert({
     *   create: {
     *     // ... data to create a ListingType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingType we want to update
     *   }
     * })
     */
    upsert<T extends ListingTypeUpsertArgs>(args: SelectSubset<T, ListingTypeUpsertArgs<ExtArgs>>): Prisma__ListingTypeClient<$Result.GetResult<Prisma.$ListingTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingTypeCountArgs} args - Arguments to filter ListingTypes to count.
     * @example
     * // Count the number of ListingTypes
     * const count = await prisma.listingType.count({
     *   where: {
     *     // ... the filter for the ListingTypes we want to count
     *   }
     * })
    **/
    count<T extends ListingTypeCountArgs>(
      args?: Subset<T, ListingTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingTypeAggregateArgs>(args: Subset<T, ListingTypeAggregateArgs>): Prisma.PrismaPromise<GetListingTypeAggregateType<T>>

    /**
     * Group by ListingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingTypeGroupByArgs} args - Group by arguments.
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
      T extends ListingTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingTypeGroupByArgs['orderBy'] }
        : { orderBy?: ListingTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListingType model
   */
  readonly fields: ListingTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListingType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends ListingType$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, ListingType$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListingType model
   */
  interface ListingTypeFieldRefs {
    readonly id: FieldRef<"ListingType", 'Int'>
    readonly name: FieldRef<"ListingType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ListingType findUnique
   */
  export type ListingTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * Filter, which ListingType to fetch.
     */
    where: ListingTypeWhereUniqueInput
  }

  /**
   * ListingType findUniqueOrThrow
   */
  export type ListingTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * Filter, which ListingType to fetch.
     */
    where: ListingTypeWhereUniqueInput
  }

  /**
   * ListingType findFirst
   */
  export type ListingTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * Filter, which ListingType to fetch.
     */
    where?: ListingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingTypes to fetch.
     */
    orderBy?: ListingTypeOrderByWithRelationInput | ListingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingTypes.
     */
    cursor?: ListingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingTypes.
     */
    distinct?: ListingTypeScalarFieldEnum | ListingTypeScalarFieldEnum[]
  }

  /**
   * ListingType findFirstOrThrow
   */
  export type ListingTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * Filter, which ListingType to fetch.
     */
    where?: ListingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingTypes to fetch.
     */
    orderBy?: ListingTypeOrderByWithRelationInput | ListingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingTypes.
     */
    cursor?: ListingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingTypes.
     */
    distinct?: ListingTypeScalarFieldEnum | ListingTypeScalarFieldEnum[]
  }

  /**
   * ListingType findMany
   */
  export type ListingTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * Filter, which ListingTypes to fetch.
     */
    where?: ListingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingTypes to fetch.
     */
    orderBy?: ListingTypeOrderByWithRelationInput | ListingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListingTypes.
     */
    cursor?: ListingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingTypes.
     */
    skip?: number
    distinct?: ListingTypeScalarFieldEnum | ListingTypeScalarFieldEnum[]
  }

  /**
   * ListingType create
   */
  export type ListingTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ListingType.
     */
    data: XOR<ListingTypeCreateInput, ListingTypeUncheckedCreateInput>
  }

  /**
   * ListingType createMany
   */
  export type ListingTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingTypes.
     */
    data: ListingTypeCreateManyInput | ListingTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingType createManyAndReturn
   */
  export type ListingTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ListingTypes.
     */
    data: ListingTypeCreateManyInput | ListingTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingType update
   */
  export type ListingTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ListingType.
     */
    data: XOR<ListingTypeUpdateInput, ListingTypeUncheckedUpdateInput>
    /**
     * Choose, which ListingType to update.
     */
    where: ListingTypeWhereUniqueInput
  }

  /**
   * ListingType updateMany
   */
  export type ListingTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingTypes.
     */
    data: XOR<ListingTypeUpdateManyMutationInput, ListingTypeUncheckedUpdateManyInput>
    /**
     * Filter which ListingTypes to update
     */
    where?: ListingTypeWhereInput
    /**
     * Limit how many ListingTypes to update.
     */
    limit?: number
  }

  /**
   * ListingType updateManyAndReturn
   */
  export type ListingTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * The data used to update ListingTypes.
     */
    data: XOR<ListingTypeUpdateManyMutationInput, ListingTypeUncheckedUpdateManyInput>
    /**
     * Filter which ListingTypes to update
     */
    where?: ListingTypeWhereInput
    /**
     * Limit how many ListingTypes to update.
     */
    limit?: number
  }

  /**
   * ListingType upsert
   */
  export type ListingTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ListingType to update in case it exists.
     */
    where: ListingTypeWhereUniqueInput
    /**
     * In case the ListingType found by the `where` argument doesn't exist, create a new ListingType with this data.
     */
    create: XOR<ListingTypeCreateInput, ListingTypeUncheckedCreateInput>
    /**
     * In case the ListingType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingTypeUpdateInput, ListingTypeUncheckedUpdateInput>
  }

  /**
   * ListingType delete
   */
  export type ListingTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
    /**
     * Filter which ListingType to delete.
     */
    where: ListingTypeWhereUniqueInput
  }

  /**
   * ListingType deleteMany
   */
  export type ListingTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingTypes to delete
     */
    where?: ListingTypeWhereInput
    /**
     * Limit how many ListingTypes to delete.
     */
    limit?: number
  }

  /**
   * ListingType.properties
   */
  export type ListingType$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * ListingType without action
   */
  export type ListingTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingType
     */
    select?: ListingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingType
     */
    omit?: ListingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    phoneNumber: 'phoneNumber',
    role: 'role',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    address: 'address',
    area: 'area',
    images: 'images',
    categoryId: 'categoryId',
    ownerId: 'ownerId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    listingTypeId: 'listingTypeId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    propertyId: 'propertyId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    brokerId: 'brokerId',
    propertyId: 'propertyId',
    appointmentTime: 'appointmentTime',
    note: 'note',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    buyerId: 'buyerId',
    brokerId: 'brokerId',
    price: 'price',
    commission: 'commission',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    sentAt: 'sentAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MembershipPackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    durationDays: 'durationDays',
    description: 'description'
  };

  export type MembershipPackageScalarFieldEnum = (typeof MembershipPackageScalarFieldEnum)[keyof typeof MembershipPackageScalarFieldEnum]


  export const BrokerMembershipScalarFieldEnum: {
    id: 'id',
    brokerId: 'brokerId',
    packageId: 'packageId',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type BrokerMembershipScalarFieldEnum = (typeof BrokerMembershipScalarFieldEnum)[keyof typeof BrokerMembershipScalarFieldEnum]


  export const StatisticScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalProperties: 'totalProperties',
    totalTransactions: 'totalTransactions',
    totalIncome: 'totalIncome',
    createdAt: 'createdAt'
  };

  export type StatisticScalarFieldEnum = (typeof StatisticScalarFieldEnum)[keyof typeof StatisticScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    reviewerId: 'reviewerId',
    targetUserId: 'targetUserId',
    propertyId: 'propertyId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ListingTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ListingTypeScalarFieldEnum = (typeof ListingTypeScalarFieldEnum)[keyof typeof ListingTypeScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
    favorites?: FavoriteListRelationFilter
    appointmentsAsCustomer?: AppointmentListRelationFilter
    appointmentsAsBroker?: AppointmentListRelationFilter
    transactionsAsBuyer?: TransactionListRelationFilter
    transactionsAsBroker?: TransactionListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
    brokerMemberships?: BrokerMembershipListRelationFilter
    statistics?: StatisticListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    appointmentsAsCustomer?: AppointmentOrderByRelationAggregateInput
    appointmentsAsBroker?: AppointmentOrderByRelationAggregateInput
    transactionsAsBuyer?: TransactionOrderByRelationAggregateInput
    transactionsAsBroker?: TransactionOrderByRelationAggregateInput
    messagesSent?: MessageOrderByRelationAggregateInput
    messagesReceived?: MessageOrderByRelationAggregateInput
    brokerMemberships?: BrokerMembershipOrderByRelationAggregateInput
    statistics?: StatisticOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
    favorites?: FavoriteListRelationFilter
    appointmentsAsCustomer?: AppointmentListRelationFilter
    appointmentsAsBroker?: AppointmentListRelationFilter
    transactionsAsBuyer?: TransactionListRelationFilter
    transactionsAsBroker?: TransactionListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
    brokerMemberships?: BrokerMembershipListRelationFilter
    statistics?: StatisticListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Property"> | string
    area?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    images?: StringNullableListFilter<"Property">
    categoryId?: IntNullableFilter<"Property"> | number | null
    ownerId?: IntFilter<"Property"> | number
    status?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    listingTypeId?: IntNullableFilter<"Property"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
    appointments?: AppointmentListRelationFilter
    transactions?: TransactionListRelationFilter
    reviews?: ReviewListRelationFilter
    listingType?: XOR<ListingTypeNullableScalarRelationFilter, ListingTypeWhereInput> | null
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    address?: SortOrder
    area?: SortOrderInput | SortOrder
    images?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listingTypeId?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    favorites?: FavoriteOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    listingType?: ListingTypeOrderByWithRelationInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Property"> | string
    area?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    images?: StringNullableListFilter<"Property">
    categoryId?: IntNullableFilter<"Property"> | number | null
    ownerId?: IntFilter<"Property"> | number
    status?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    listingTypeId?: IntNullableFilter<"Property"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
    appointments?: AppointmentListRelationFilter
    transactions?: TransactionListRelationFilter
    reviews?: ReviewListRelationFilter
    listingType?: XOR<ListingTypeNullableScalarRelationFilter, ListingTypeWhereInput> | null
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    address?: SortOrder
    area?: SortOrderInput | SortOrder
    images?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listingTypeId?: SortOrderInput | SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    price?: DecimalWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string
    address?: StringWithAggregatesFilter<"Property"> | string
    area?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    images?: StringNullableListFilter<"Property">
    categoryId?: IntNullableWithAggregatesFilter<"Property"> | number | null
    ownerId?: IntWithAggregatesFilter<"Property"> | number
    status?: StringWithAggregatesFilter<"Property"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    listingTypeId?: IntNullableWithAggregatesFilter<"Property"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    properties?: PropertyListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    properties?: PropertyListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    customerId?: IntFilter<"Favorite"> | number
    propertyId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    customerId?: IntFilter<"Favorite"> | number
    propertyId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorite"> | number
    customerId?: IntWithAggregatesFilter<"Favorite"> | number
    propertyId?: IntWithAggregatesFilter<"Favorite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    customerId?: IntFilter<"Appointment"> | number
    brokerId?: IntFilter<"Appointment"> | number
    propertyId?: IntFilter<"Appointment"> | number
    appointmentTime?: DateTimeFilter<"Appointment"> | Date | string
    note?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    broker?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    brokerId?: SortOrder
    propertyId?: SortOrder
    appointmentTime?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    broker?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    customerId?: IntFilter<"Appointment"> | number
    brokerId?: IntFilter<"Appointment"> | number
    propertyId?: IntFilter<"Appointment"> | number
    appointmentTime?: DateTimeFilter<"Appointment"> | Date | string
    note?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    broker?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    brokerId?: SortOrder
    propertyId?: SortOrder
    appointmentTime?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    customerId?: IntWithAggregatesFilter<"Appointment"> | number
    brokerId?: IntWithAggregatesFilter<"Appointment"> | number
    propertyId?: IntWithAggregatesFilter<"Appointment"> | number
    appointmentTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: StringWithAggregatesFilter<"Appointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    propertyId?: IntFilter<"Transaction"> | number
    buyerId?: IntFilter<"Transaction"> | number
    brokerId?: IntFilter<"Transaction"> | number
    price?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    broker?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    brokerId?: SortOrder
    price?: SortOrder
    commission?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    broker?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    propertyId?: IntFilter<"Transaction"> | number
    buyerId?: IntFilter<"Transaction"> | number
    brokerId?: IntFilter<"Transaction"> | number
    price?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    broker?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    brokerId?: SortOrder
    price?: SortOrder
    commission?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    propertyId?: IntWithAggregatesFilter<"Transaction"> | number
    buyerId?: IntWithAggregatesFilter<"Transaction"> | number
    brokerId?: IntWithAggregatesFilter<"Transaction"> | number
    price?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    senderId?: IntWithAggregatesFilter<"Message"> | number
    receiverId?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MembershipPackageWhereInput = {
    AND?: MembershipPackageWhereInput | MembershipPackageWhereInput[]
    OR?: MembershipPackageWhereInput[]
    NOT?: MembershipPackageWhereInput | MembershipPackageWhereInput[]
    id?: IntFilter<"MembershipPackage"> | number
    name?: StringFilter<"MembershipPackage"> | string
    price?: DecimalFilter<"MembershipPackage"> | Decimal | DecimalJsLike | number | string
    durationDays?: IntFilter<"MembershipPackage"> | number
    description?: StringNullableFilter<"MembershipPackage"> | string | null
    brokerMemberships?: BrokerMembershipListRelationFilter
  }

  export type MembershipPackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    description?: SortOrderInput | SortOrder
    brokerMemberships?: BrokerMembershipOrderByRelationAggregateInput
  }

  export type MembershipPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MembershipPackageWhereInput | MembershipPackageWhereInput[]
    OR?: MembershipPackageWhereInput[]
    NOT?: MembershipPackageWhereInput | MembershipPackageWhereInput[]
    name?: StringFilter<"MembershipPackage"> | string
    price?: DecimalFilter<"MembershipPackage"> | Decimal | DecimalJsLike | number | string
    durationDays?: IntFilter<"MembershipPackage"> | number
    description?: StringNullableFilter<"MembershipPackage"> | string | null
    brokerMemberships?: BrokerMembershipListRelationFilter
  }, "id">

  export type MembershipPackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: MembershipPackageCountOrderByAggregateInput
    _avg?: MembershipPackageAvgOrderByAggregateInput
    _max?: MembershipPackageMaxOrderByAggregateInput
    _min?: MembershipPackageMinOrderByAggregateInput
    _sum?: MembershipPackageSumOrderByAggregateInput
  }

  export type MembershipPackageScalarWhereWithAggregatesInput = {
    AND?: MembershipPackageScalarWhereWithAggregatesInput | MembershipPackageScalarWhereWithAggregatesInput[]
    OR?: MembershipPackageScalarWhereWithAggregatesInput[]
    NOT?: MembershipPackageScalarWhereWithAggregatesInput | MembershipPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MembershipPackage"> | number
    name?: StringWithAggregatesFilter<"MembershipPackage"> | string
    price?: DecimalWithAggregatesFilter<"MembershipPackage"> | Decimal | DecimalJsLike | number | string
    durationDays?: IntWithAggregatesFilter<"MembershipPackage"> | number
    description?: StringNullableWithAggregatesFilter<"MembershipPackage"> | string | null
  }

  export type BrokerMembershipWhereInput = {
    AND?: BrokerMembershipWhereInput | BrokerMembershipWhereInput[]
    OR?: BrokerMembershipWhereInput[]
    NOT?: BrokerMembershipWhereInput | BrokerMembershipWhereInput[]
    id?: IntFilter<"BrokerMembership"> | number
    brokerId?: IntFilter<"BrokerMembership"> | number
    packageId?: IntFilter<"BrokerMembership"> | number
    startDate?: DateTimeFilter<"BrokerMembership"> | Date | string
    endDate?: DateTimeFilter<"BrokerMembership"> | Date | string
    broker?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<MembershipPackageScalarRelationFilter, MembershipPackageWhereInput>
  }

  export type BrokerMembershipOrderByWithRelationInput = {
    id?: SortOrder
    brokerId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    broker?: UserOrderByWithRelationInput
    package?: MembershipPackageOrderByWithRelationInput
  }

  export type BrokerMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrokerMembershipWhereInput | BrokerMembershipWhereInput[]
    OR?: BrokerMembershipWhereInput[]
    NOT?: BrokerMembershipWhereInput | BrokerMembershipWhereInput[]
    brokerId?: IntFilter<"BrokerMembership"> | number
    packageId?: IntFilter<"BrokerMembership"> | number
    startDate?: DateTimeFilter<"BrokerMembership"> | Date | string
    endDate?: DateTimeFilter<"BrokerMembership"> | Date | string
    broker?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<MembershipPackageScalarRelationFilter, MembershipPackageWhereInput>
  }, "id">

  export type BrokerMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    brokerId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: BrokerMembershipCountOrderByAggregateInput
    _avg?: BrokerMembershipAvgOrderByAggregateInput
    _max?: BrokerMembershipMaxOrderByAggregateInput
    _min?: BrokerMembershipMinOrderByAggregateInput
    _sum?: BrokerMembershipSumOrderByAggregateInput
  }

  export type BrokerMembershipScalarWhereWithAggregatesInput = {
    AND?: BrokerMembershipScalarWhereWithAggregatesInput | BrokerMembershipScalarWhereWithAggregatesInput[]
    OR?: BrokerMembershipScalarWhereWithAggregatesInput[]
    NOT?: BrokerMembershipScalarWhereWithAggregatesInput | BrokerMembershipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BrokerMembership"> | number
    brokerId?: IntWithAggregatesFilter<"BrokerMembership"> | number
    packageId?: IntWithAggregatesFilter<"BrokerMembership"> | number
    startDate?: DateTimeWithAggregatesFilter<"BrokerMembership"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"BrokerMembership"> | Date | string
  }

  export type StatisticWhereInput = {
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    id?: IntFilter<"Statistic"> | number
    userId?: IntFilter<"Statistic"> | number
    totalProperties?: IntFilter<"Statistic"> | number
    totalTransactions?: IntFilter<"Statistic"> | number
    totalIncome?: DecimalFilter<"Statistic"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Statistic"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StatisticOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalProperties?: SortOrder
    totalTransactions?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    userId?: IntFilter<"Statistic"> | number
    totalProperties?: IntFilter<"Statistic"> | number
    totalTransactions?: IntFilter<"Statistic"> | number
    totalIncome?: DecimalFilter<"Statistic"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Statistic"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StatisticOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalProperties?: SortOrder
    totalTransactions?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
    _count?: StatisticCountOrderByAggregateInput
    _avg?: StatisticAvgOrderByAggregateInput
    _max?: StatisticMaxOrderByAggregateInput
    _min?: StatisticMinOrderByAggregateInput
    _sum?: StatisticSumOrderByAggregateInput
  }

  export type StatisticScalarWhereWithAggregatesInput = {
    AND?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    OR?: StatisticScalarWhereWithAggregatesInput[]
    NOT?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Statistic"> | number
    userId?: IntWithAggregatesFilter<"Statistic"> | number
    totalProperties?: IntWithAggregatesFilter<"Statistic"> | number
    totalTransactions?: IntWithAggregatesFilter<"Statistic"> | number
    totalIncome?: DecimalWithAggregatesFilter<"Statistic"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    reviewerId?: IntFilter<"Review"> | number
    targetUserId?: IntNullableFilter<"Review"> | number | null
    propertyId?: IntNullableFilter<"Review"> | number | null
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    reviewerId?: IntFilter<"Review"> | number
    targetUserId?: IntNullableFilter<"Review"> | number | null
    propertyId?: IntNullableFilter<"Review"> | number | null
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    reviewerId?: IntWithAggregatesFilter<"Review"> | number
    targetUserId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    propertyId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ListingTypeWhereInput = {
    AND?: ListingTypeWhereInput | ListingTypeWhereInput[]
    OR?: ListingTypeWhereInput[]
    NOT?: ListingTypeWhereInput | ListingTypeWhereInput[]
    id?: IntFilter<"ListingType"> | number
    name?: StringFilter<"ListingType"> | string
    properties?: PropertyListRelationFilter
  }

  export type ListingTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type ListingTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListingTypeWhereInput | ListingTypeWhereInput[]
    OR?: ListingTypeWhereInput[]
    NOT?: ListingTypeWhereInput | ListingTypeWhereInput[]
    name?: StringFilter<"ListingType"> | string
    properties?: PropertyListRelationFilter
  }, "id">

  export type ListingTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ListingTypeCountOrderByAggregateInput
    _avg?: ListingTypeAvgOrderByAggregateInput
    _max?: ListingTypeMaxOrderByAggregateInput
    _min?: ListingTypeMinOrderByAggregateInput
    _sum?: ListingTypeSumOrderByAggregateInput
  }

  export type ListingTypeScalarWhereWithAggregatesInput = {
    AND?: ListingTypeScalarWhereWithAggregatesInput | ListingTypeScalarWhereWithAggregatesInput[]
    OR?: ListingTypeScalarWhereWithAggregatesInput[]
    NOT?: ListingTypeScalarWhereWithAggregatesInput | ListingTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListingType"> | number
    name?: StringWithAggregatesFilter<"ListingType"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentCreateNestedManyWithoutPropertyInput
    transactions?: TransactionCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    listingType?: ListingTypeCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPropertyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    listingType?: ListingTypeUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
  }

  export type PropertyUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    name: string
    properties?: PropertyCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    properties?: PropertyUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutFavoritesInput
    property: PropertyCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    customerId: number
    propertyId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    property?: PropertyUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: number
    customerId: number
    propertyId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutAppointmentsAsCustomerInput
    broker: UserCreateNestedOneWithoutAppointmentsAsBrokerInput
    property: PropertyCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    customerId: number
    brokerId: number
    propertyId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutAppointmentsAsCustomerNestedInput
    broker?: UserUpdateOneRequiredWithoutAppointmentsAsBrokerNestedInput
    property?: PropertyUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: number
    customerId: number
    brokerId: number
    propertyId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutTransactionsInput
    buyer: UserCreateNestedOneWithoutTransactionsAsBuyerInput
    broker: UserCreateNestedOneWithoutTransactionsAsBrokerInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    propertyId: number
    buyerId: number
    brokerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutTransactionsNestedInput
    buyer?: UserUpdateOneRequiredWithoutTransactionsAsBuyerNestedInput
    broker?: UserUpdateOneRequiredWithoutTransactionsAsBrokerNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    propertyId: number
    buyerId: number
    brokerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    sentAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    sentAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipPackageCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    description?: string | null
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutPackageInput
  }

  export type MembershipPackageUncheckedCreateInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    description?: string | null
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutPackageInput
  }

  export type MembershipPackageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brokerMemberships?: BrokerMembershipUpdateManyWithoutPackageNestedInput
  }

  export type MembershipPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type MembershipPackageCreateManyInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    description?: string | null
  }

  export type MembershipPackageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembershipPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrokerMembershipCreateInput = {
    startDate: Date | string
    endDate: Date | string
    broker: UserCreateNestedOneWithoutBrokerMembershipsInput
    package: MembershipPackageCreateNestedOneWithoutBrokerMembershipsInput
  }

  export type BrokerMembershipUncheckedCreateInput = {
    id?: number
    brokerId: number
    packageId: number
    startDate: Date | string
    endDate: Date | string
  }

  export type BrokerMembershipUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    broker?: UserUpdateOneRequiredWithoutBrokerMembershipsNestedInput
    package?: MembershipPackageUpdateOneRequiredWithoutBrokerMembershipsNestedInput
  }

  export type BrokerMembershipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerMembershipCreateManyInput = {
    id?: number
    brokerId: number
    packageId: number
    startDate: Date | string
    endDate: Date | string
  }

  export type BrokerMembershipUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerMembershipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticCreateInput = {
    totalProperties?: number
    totalTransactions?: number
    totalIncome?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStatisticsInput
  }

  export type StatisticUncheckedCreateInput = {
    id?: number
    userId: number
    totalProperties?: number
    totalTransactions?: number
    totalIncome?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type StatisticUpdateInput = {
    totalProperties?: IntFieldUpdateOperationsInput | number
    totalTransactions?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type StatisticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalProperties?: IntFieldUpdateOperationsInput | number
    totalTransactions?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticCreateManyInput = {
    id?: number
    userId: number
    totalProperties?: number
    totalTransactions?: number
    totalIncome?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type StatisticUpdateManyMutationInput = {
    totalProperties?: IntFieldUpdateOperationsInput | number
    totalTransactions?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalProperties?: IntFieldUpdateOperationsInput | number
    totalTransactions?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    targetUser?: UserCreateNestedOneWithoutReviewsReceivedInput
    property?: PropertyCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    reviewerId: number
    targetUserId?: number | null
    propertyId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    targetUser?: UserUpdateOneWithoutReviewsReceivedNestedInput
    property?: PropertyUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    reviewerId: number
    targetUserId?: number | null
    propertyId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingTypeCreateInput = {
    name: string
    properties?: PropertyCreateNestedManyWithoutListingTypeInput
  }

  export type ListingTypeUncheckedCreateInput = {
    id?: number
    name: string
    properties?: PropertyUncheckedCreateNestedManyWithoutListingTypeInput
  }

  export type ListingTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUpdateManyWithoutListingTypeNestedInput
  }

  export type ListingTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUncheckedUpdateManyWithoutListingTypeNestedInput
  }

  export type ListingTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type ListingTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListingTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type BrokerMembershipListRelationFilter = {
    every?: BrokerMembershipWhereInput
    some?: BrokerMembershipWhereInput
    none?: BrokerMembershipWhereInput
  }

  export type StatisticListRelationFilter = {
    every?: StatisticWhereInput
    some?: StatisticWhereInput
    none?: StatisticWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrokerMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ListingTypeNullableScalarRelationFilter = {
    is?: ListingTypeWhereInput | null
    isNot?: ListingTypeWhereInput | null
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    address?: SortOrder
    area?: SortOrder
    images?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listingTypeId?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    area?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    listingTypeId?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    address?: SortOrder
    area?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listingTypeId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    address?: SortOrder
    area?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listingTypeId?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    area?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    listingTypeId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    propertyId?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    propertyId?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    brokerId?: SortOrder
    propertyId?: SortOrder
    appointmentTime?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    brokerId?: SortOrder
    propertyId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    brokerId?: SortOrder
    propertyId?: SortOrder
    appointmentTime?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    brokerId?: SortOrder
    propertyId?: SortOrder
    appointmentTime?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    brokerId?: SortOrder
    propertyId?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    brokerId?: SortOrder
    price?: SortOrder
    commission?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    brokerId?: SortOrder
    price?: SortOrder
    commission?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    brokerId?: SortOrder
    price?: SortOrder
    commission?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    brokerId?: SortOrder
    price?: SortOrder
    commission?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    brokerId?: SortOrder
    price?: SortOrder
    commission?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MembershipPackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    description?: SortOrder
  }

  export type MembershipPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
  }

  export type MembershipPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    description?: SortOrder
  }

  export type MembershipPackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    description?: SortOrder
  }

  export type MembershipPackageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
  }

  export type MembershipPackageScalarRelationFilter = {
    is?: MembershipPackageWhereInput
    isNot?: MembershipPackageWhereInput
  }

  export type BrokerMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    brokerId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BrokerMembershipAvgOrderByAggregateInput = {
    id?: SortOrder
    brokerId?: SortOrder
    packageId?: SortOrder
  }

  export type BrokerMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    brokerId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BrokerMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    brokerId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BrokerMembershipSumOrderByAggregateInput = {
    id?: SortOrder
    brokerId?: SortOrder
    packageId?: SortOrder
  }

  export type StatisticCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalProperties?: SortOrder
    totalTransactions?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalProperties?: SortOrder
    totalTransactions?: SortOrder
    totalIncome?: SortOrder
  }

  export type StatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalProperties?: SortOrder
    totalTransactions?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalProperties?: SortOrder
    totalTransactions?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalProperties?: SortOrder
    totalTransactions?: SortOrder
    totalIncome?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PropertyNullableScalarRelationFilter = {
    is?: PropertyWhereInput | null
    isNot?: PropertyWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    propertyId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    propertyId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    propertyId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    propertyId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    propertyId?: SortOrder
    rating?: SortOrder
  }

  export type ListingTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ListingTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ListingTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ListingTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ListingTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteCreateWithoutCustomerInput, FavoriteUncheckedCreateWithoutCustomerInput> | FavoriteCreateWithoutCustomerInput[] | FavoriteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCustomerInput | FavoriteCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteCreateManyCustomerInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutBrokerInput = {
    create?: XOR<AppointmentCreateWithoutBrokerInput, AppointmentUncheckedCreateWithoutBrokerInput> | AppointmentCreateWithoutBrokerInput[] | AppointmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBrokerInput | AppointmentCreateOrConnectWithoutBrokerInput[]
    createMany?: AppointmentCreateManyBrokerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutBrokerInput = {
    create?: XOR<TransactionCreateWithoutBrokerInput, TransactionUncheckedCreateWithoutBrokerInput> | TransactionCreateWithoutBrokerInput[] | TransactionUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBrokerInput | TransactionCreateOrConnectWithoutBrokerInput[]
    createMany?: TransactionCreateManyBrokerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type BrokerMembershipCreateNestedManyWithoutBrokerInput = {
    create?: XOR<BrokerMembershipCreateWithoutBrokerInput, BrokerMembershipUncheckedCreateWithoutBrokerInput> | BrokerMembershipCreateWithoutBrokerInput[] | BrokerMembershipUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutBrokerInput | BrokerMembershipCreateOrConnectWithoutBrokerInput[]
    createMany?: BrokerMembershipCreateManyBrokerInputEnvelope
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
  }

  export type StatisticCreateNestedManyWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteCreateWithoutCustomerInput, FavoriteUncheckedCreateWithoutCustomerInput> | FavoriteCreateWithoutCustomerInput[] | FavoriteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCustomerInput | FavoriteCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteCreateManyCustomerInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutBrokerInput = {
    create?: XOR<AppointmentCreateWithoutBrokerInput, AppointmentUncheckedCreateWithoutBrokerInput> | AppointmentCreateWithoutBrokerInput[] | AppointmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBrokerInput | AppointmentCreateOrConnectWithoutBrokerInput[]
    createMany?: AppointmentCreateManyBrokerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBrokerInput = {
    create?: XOR<TransactionCreateWithoutBrokerInput, TransactionUncheckedCreateWithoutBrokerInput> | TransactionCreateWithoutBrokerInput[] | TransactionUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBrokerInput | TransactionCreateOrConnectWithoutBrokerInput[]
    createMany?: TransactionCreateManyBrokerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput = {
    create?: XOR<BrokerMembershipCreateWithoutBrokerInput, BrokerMembershipUncheckedCreateWithoutBrokerInput> | BrokerMembershipCreateWithoutBrokerInput[] | BrokerMembershipUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutBrokerInput | BrokerMembershipCreateOrConnectWithoutBrokerInput[]
    createMany?: BrokerMembershipCreateManyBrokerInputEnvelope
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
  }

  export type StatisticUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteCreateWithoutCustomerInput, FavoriteUncheckedCreateWithoutCustomerInput> | FavoriteCreateWithoutCustomerInput[] | FavoriteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCustomerInput | FavoriteCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutCustomerInput | FavoriteUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteCreateManyCustomerInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutCustomerInput | FavoriteUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutCustomerInput | FavoriteUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<AppointmentCreateWithoutBrokerInput, AppointmentUncheckedCreateWithoutBrokerInput> | AppointmentCreateWithoutBrokerInput[] | AppointmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBrokerInput | AppointmentCreateOrConnectWithoutBrokerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBrokerInput | AppointmentUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: AppointmentCreateManyBrokerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBrokerInput | AppointmentUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBrokerInput | AppointmentUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerInput | TransactionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerInput | TransactionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerInput | TransactionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<TransactionCreateWithoutBrokerInput, TransactionUncheckedCreateWithoutBrokerInput> | TransactionCreateWithoutBrokerInput[] | TransactionUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBrokerInput | TransactionCreateOrConnectWithoutBrokerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBrokerInput | TransactionUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: TransactionCreateManyBrokerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBrokerInput | TransactionUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBrokerInput | TransactionUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type BrokerMembershipUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<BrokerMembershipCreateWithoutBrokerInput, BrokerMembershipUncheckedCreateWithoutBrokerInput> | BrokerMembershipCreateWithoutBrokerInput[] | BrokerMembershipUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutBrokerInput | BrokerMembershipCreateOrConnectWithoutBrokerInput[]
    upsert?: BrokerMembershipUpsertWithWhereUniqueWithoutBrokerInput | BrokerMembershipUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: BrokerMembershipCreateManyBrokerInputEnvelope
    set?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    disconnect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    delete?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    update?: BrokerMembershipUpdateWithWhereUniqueWithoutBrokerInput | BrokerMembershipUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: BrokerMembershipUpdateManyWithWhereWithoutBrokerInput | BrokerMembershipUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: BrokerMembershipScalarWhereInput | BrokerMembershipScalarWhereInput[]
  }

  export type StatisticUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutUserInput | StatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutUserInput | StatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutUserInput | StatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTargetUserInput | ReviewUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTargetUserInput | ReviewUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTargetUserInput | ReviewUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteCreateWithoutCustomerInput, FavoriteUncheckedCreateWithoutCustomerInput> | FavoriteCreateWithoutCustomerInput[] | FavoriteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCustomerInput | FavoriteCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutCustomerInput | FavoriteUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteCreateManyCustomerInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutCustomerInput | FavoriteUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutCustomerInput | FavoriteUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<AppointmentCreateWithoutBrokerInput, AppointmentUncheckedCreateWithoutBrokerInput> | AppointmentCreateWithoutBrokerInput[] | AppointmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBrokerInput | AppointmentCreateOrConnectWithoutBrokerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBrokerInput | AppointmentUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: AppointmentCreateManyBrokerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBrokerInput | AppointmentUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBrokerInput | AppointmentUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerInput | TransactionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerInput | TransactionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerInput | TransactionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<TransactionCreateWithoutBrokerInput, TransactionUncheckedCreateWithoutBrokerInput> | TransactionCreateWithoutBrokerInput[] | TransactionUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBrokerInput | TransactionCreateOrConnectWithoutBrokerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBrokerInput | TransactionUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: TransactionCreateManyBrokerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBrokerInput | TransactionUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBrokerInput | TransactionUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<BrokerMembershipCreateWithoutBrokerInput, BrokerMembershipUncheckedCreateWithoutBrokerInput> | BrokerMembershipCreateWithoutBrokerInput[] | BrokerMembershipUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutBrokerInput | BrokerMembershipCreateOrConnectWithoutBrokerInput[]
    upsert?: BrokerMembershipUpsertWithWhereUniqueWithoutBrokerInput | BrokerMembershipUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: BrokerMembershipCreateManyBrokerInputEnvelope
    set?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    disconnect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    delete?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    update?: BrokerMembershipUpdateWithWhereUniqueWithoutBrokerInput | BrokerMembershipUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: BrokerMembershipUpdateManyWithWhereWithoutBrokerInput | BrokerMembershipUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: BrokerMembershipScalarWhereInput | BrokerMembershipScalarWhereInput[]
  }

  export type StatisticUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutUserInput | StatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutUserInput | StatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutUserInput | StatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTargetUserInput | ReviewUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTargetUserInput | ReviewUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTargetUserInput | ReviewUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyCreateimagesInput = {
    set: string[]
  }

  export type CategoryCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPropertiesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AppointmentCreateWithoutPropertyInput, AppointmentUncheckedCreateWithoutPropertyInput> | AppointmentCreateWithoutPropertyInput[] | AppointmentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPropertyInput | AppointmentCreateOrConnectWithoutPropertyInput[]
    createMany?: AppointmentCreateManyPropertyInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutPropertyInput = {
    create?: XOR<TransactionCreateWithoutPropertyInput, TransactionUncheckedCreateWithoutPropertyInput> | TransactionCreateWithoutPropertyInput[] | TransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPropertyInput | TransactionCreateOrConnectWithoutPropertyInput[]
    createMany?: TransactionCreateManyPropertyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ListingTypeCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<ListingTypeCreateWithoutPropertiesInput, ListingTypeUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ListingTypeCreateOrConnectWithoutPropertiesInput
    connect?: ListingTypeWhereUniqueInput
  }

  export type FavoriteUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AppointmentCreateWithoutPropertyInput, AppointmentUncheckedCreateWithoutPropertyInput> | AppointmentCreateWithoutPropertyInput[] | AppointmentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPropertyInput | AppointmentCreateOrConnectWithoutPropertyInput[]
    createMany?: AppointmentCreateManyPropertyInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<TransactionCreateWithoutPropertyInput, TransactionUncheckedCreateWithoutPropertyInput> | TransactionCreateWithoutPropertyInput[] | TransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPropertyInput | TransactionCreateOrConnectWithoutPropertyInput[]
    createMany?: TransactionCreateManyPropertyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PropertyUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CategoryUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPropertiesInput
    upsert?: CategoryUpsertWithoutPropertiesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPropertiesInput, CategoryUpdateWithoutPropertiesInput>, CategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type FavoriteUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPropertyInput | FavoriteUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPropertyInput | FavoriteUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPropertyInput | FavoriteUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AppointmentCreateWithoutPropertyInput, AppointmentUncheckedCreateWithoutPropertyInput> | AppointmentCreateWithoutPropertyInput[] | AppointmentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPropertyInput | AppointmentCreateOrConnectWithoutPropertyInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPropertyInput | AppointmentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AppointmentCreateManyPropertyInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPropertyInput | AppointmentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPropertyInput | AppointmentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<TransactionCreateWithoutPropertyInput, TransactionUncheckedCreateWithoutPropertyInput> | TransactionCreateWithoutPropertyInput[] | TransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPropertyInput | TransactionCreateOrConnectWithoutPropertyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPropertyInput | TransactionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: TransactionCreateManyPropertyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPropertyInput | TransactionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPropertyInput | TransactionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ListingTypeUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<ListingTypeCreateWithoutPropertiesInput, ListingTypeUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ListingTypeCreateOrConnectWithoutPropertiesInput
    upsert?: ListingTypeUpsertWithoutPropertiesInput
    disconnect?: ListingTypeWhereInput | boolean
    delete?: ListingTypeWhereInput | boolean
    connect?: ListingTypeWhereUniqueInput
    update?: XOR<XOR<ListingTypeUpdateToOneWithWhereWithoutPropertiesInput, ListingTypeUpdateWithoutPropertiesInput>, ListingTypeUncheckedUpdateWithoutPropertiesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavoriteUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPropertyInput | FavoriteUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPropertyInput | FavoriteUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPropertyInput | FavoriteUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AppointmentCreateWithoutPropertyInput, AppointmentUncheckedCreateWithoutPropertyInput> | AppointmentCreateWithoutPropertyInput[] | AppointmentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPropertyInput | AppointmentCreateOrConnectWithoutPropertyInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPropertyInput | AppointmentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AppointmentCreateManyPropertyInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPropertyInput | AppointmentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPropertyInput | AppointmentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<TransactionCreateWithoutPropertyInput, TransactionUncheckedCreateWithoutPropertyInput> | TransactionCreateWithoutPropertyInput[] | TransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPropertyInput | TransactionCreateOrConnectWithoutPropertyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPropertyInput | TransactionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: TransactionCreateManyPropertyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPropertyInput | TransactionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPropertyInput | TransactionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavoritesInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type PropertyUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavoritesInput
    upsert?: PropertyUpsertWithoutFavoritesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutFavoritesInput, PropertyUpdateWithoutFavoritesInput>, PropertyUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutAppointmentsAsCustomerInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsCustomerInput, UserUncheckedCreateWithoutAppointmentsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsAsBrokerInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsBrokerInput, UserUncheckedCreateWithoutAppointmentsAsBrokerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsBrokerInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PropertyCreateWithoutAppointmentsInput, PropertyUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAppointmentsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsCustomerNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsCustomerInput, UserUncheckedCreateWithoutAppointmentsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsCustomerInput
    upsert?: UserUpsertWithoutAppointmentsAsCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsCustomerInput, UserUpdateWithoutAppointmentsAsCustomerInput>, UserUncheckedUpdateWithoutAppointmentsAsCustomerInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsBrokerNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsBrokerInput, UserUncheckedCreateWithoutAppointmentsAsBrokerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsBrokerInput
    upsert?: UserUpsertWithoutAppointmentsAsBrokerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsBrokerInput, UserUpdateWithoutAppointmentsAsBrokerInput>, UserUncheckedUpdateWithoutAppointmentsAsBrokerInput>
  }

  export type PropertyUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PropertyCreateWithoutAppointmentsInput, PropertyUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAppointmentsInput
    upsert?: PropertyUpsertWithoutAppointmentsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutAppointmentsInput, PropertyUpdateWithoutAppointmentsInput>, PropertyUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PropertyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PropertyCreateWithoutTransactionsInput, PropertyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutTransactionsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsAsBuyerInput = {
    create?: XOR<UserCreateWithoutTransactionsAsBuyerInput, UserUncheckedCreateWithoutTransactionsAsBuyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsAsBuyerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsAsBrokerInput = {
    create?: XOR<UserCreateWithoutTransactionsAsBrokerInput, UserUncheckedCreateWithoutTransactionsAsBrokerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsAsBrokerInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<PropertyCreateWithoutTransactionsInput, PropertyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutTransactionsInput
    upsert?: PropertyUpsertWithoutTransactionsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutTransactionsInput, PropertyUpdateWithoutTransactionsInput>, PropertyUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsAsBuyerNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsAsBuyerInput, UserUncheckedCreateWithoutTransactionsAsBuyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsAsBuyerInput
    upsert?: UserUpsertWithoutTransactionsAsBuyerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsAsBuyerInput, UserUpdateWithoutTransactionsAsBuyerInput>, UserUncheckedUpdateWithoutTransactionsAsBuyerInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsAsBrokerNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsAsBrokerInput, UserUncheckedCreateWithoutTransactionsAsBrokerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsAsBrokerInput
    upsert?: UserUpsertWithoutTransactionsAsBrokerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsAsBrokerInput, UserUpdateWithoutTransactionsAsBrokerInput>, UserUncheckedUpdateWithoutTransactionsAsBrokerInput>
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesReceivedInput, UserUpdateWithoutMessagesReceivedInput>, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type BrokerMembershipCreateNestedManyWithoutPackageInput = {
    create?: XOR<BrokerMembershipCreateWithoutPackageInput, BrokerMembershipUncheckedCreateWithoutPackageInput> | BrokerMembershipCreateWithoutPackageInput[] | BrokerMembershipUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutPackageInput | BrokerMembershipCreateOrConnectWithoutPackageInput[]
    createMany?: BrokerMembershipCreateManyPackageInputEnvelope
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
  }

  export type BrokerMembershipUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<BrokerMembershipCreateWithoutPackageInput, BrokerMembershipUncheckedCreateWithoutPackageInput> | BrokerMembershipCreateWithoutPackageInput[] | BrokerMembershipUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutPackageInput | BrokerMembershipCreateOrConnectWithoutPackageInput[]
    createMany?: BrokerMembershipCreateManyPackageInputEnvelope
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
  }

  export type BrokerMembershipUpdateManyWithoutPackageNestedInput = {
    create?: XOR<BrokerMembershipCreateWithoutPackageInput, BrokerMembershipUncheckedCreateWithoutPackageInput> | BrokerMembershipCreateWithoutPackageInput[] | BrokerMembershipUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutPackageInput | BrokerMembershipCreateOrConnectWithoutPackageInput[]
    upsert?: BrokerMembershipUpsertWithWhereUniqueWithoutPackageInput | BrokerMembershipUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: BrokerMembershipCreateManyPackageInputEnvelope
    set?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    disconnect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    delete?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    update?: BrokerMembershipUpdateWithWhereUniqueWithoutPackageInput | BrokerMembershipUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: BrokerMembershipUpdateManyWithWhereWithoutPackageInput | BrokerMembershipUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: BrokerMembershipScalarWhereInput | BrokerMembershipScalarWhereInput[]
  }

  export type BrokerMembershipUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<BrokerMembershipCreateWithoutPackageInput, BrokerMembershipUncheckedCreateWithoutPackageInput> | BrokerMembershipCreateWithoutPackageInput[] | BrokerMembershipUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BrokerMembershipCreateOrConnectWithoutPackageInput | BrokerMembershipCreateOrConnectWithoutPackageInput[]
    upsert?: BrokerMembershipUpsertWithWhereUniqueWithoutPackageInput | BrokerMembershipUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: BrokerMembershipCreateManyPackageInputEnvelope
    set?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    disconnect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    delete?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    connect?: BrokerMembershipWhereUniqueInput | BrokerMembershipWhereUniqueInput[]
    update?: BrokerMembershipUpdateWithWhereUniqueWithoutPackageInput | BrokerMembershipUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: BrokerMembershipUpdateManyWithWhereWithoutPackageInput | BrokerMembershipUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: BrokerMembershipScalarWhereInput | BrokerMembershipScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBrokerMembershipsInput = {
    create?: XOR<UserCreateWithoutBrokerMembershipsInput, UserUncheckedCreateWithoutBrokerMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrokerMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type MembershipPackageCreateNestedOneWithoutBrokerMembershipsInput = {
    create?: XOR<MembershipPackageCreateWithoutBrokerMembershipsInput, MembershipPackageUncheckedCreateWithoutBrokerMembershipsInput>
    connectOrCreate?: MembershipPackageCreateOrConnectWithoutBrokerMembershipsInput
    connect?: MembershipPackageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBrokerMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutBrokerMembershipsInput, UserUncheckedCreateWithoutBrokerMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrokerMembershipsInput
    upsert?: UserUpsertWithoutBrokerMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBrokerMembershipsInput, UserUpdateWithoutBrokerMembershipsInput>, UserUncheckedUpdateWithoutBrokerMembershipsInput>
  }

  export type MembershipPackageUpdateOneRequiredWithoutBrokerMembershipsNestedInput = {
    create?: XOR<MembershipPackageCreateWithoutBrokerMembershipsInput, MembershipPackageUncheckedCreateWithoutBrokerMembershipsInput>
    connectOrCreate?: MembershipPackageCreateOrConnectWithoutBrokerMembershipsInput
    upsert?: MembershipPackageUpsertWithoutBrokerMembershipsInput
    connect?: MembershipPackageWhereUniqueInput
    update?: XOR<XOR<MembershipPackageUpdateToOneWithWhereWithoutBrokerMembershipsInput, MembershipPackageUpdateWithoutBrokerMembershipsInput>, MembershipPackageUncheckedUpdateWithoutBrokerMembershipsInput>
  }

  export type UserCreateNestedOneWithoutStatisticsInput = {
    create?: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatisticsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatisticsNestedInput = {
    create?: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatisticsInput
    upsert?: UserUpsertWithoutStatisticsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatisticsInput, UserUpdateWithoutStatisticsInput>, UserUncheckedUpdateWithoutStatisticsInput>
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type PropertyUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    upsert?: PropertyUpsertWithoutReviewsInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutReviewsInput, PropertyUpdateWithoutReviewsInput>, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertyCreateNestedManyWithoutListingTypeInput = {
    create?: XOR<PropertyCreateWithoutListingTypeInput, PropertyUncheckedCreateWithoutListingTypeInput> | PropertyCreateWithoutListingTypeInput[] | PropertyUncheckedCreateWithoutListingTypeInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutListingTypeInput | PropertyCreateOrConnectWithoutListingTypeInput[]
    createMany?: PropertyCreateManyListingTypeInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutListingTypeInput = {
    create?: XOR<PropertyCreateWithoutListingTypeInput, PropertyUncheckedCreateWithoutListingTypeInput> | PropertyCreateWithoutListingTypeInput[] | PropertyUncheckedCreateWithoutListingTypeInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutListingTypeInput | PropertyCreateOrConnectWithoutListingTypeInput[]
    createMany?: PropertyCreateManyListingTypeInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutListingTypeNestedInput = {
    create?: XOR<PropertyCreateWithoutListingTypeInput, PropertyUncheckedCreateWithoutListingTypeInput> | PropertyCreateWithoutListingTypeInput[] | PropertyUncheckedCreateWithoutListingTypeInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutListingTypeInput | PropertyCreateOrConnectWithoutListingTypeInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutListingTypeInput | PropertyUpsertWithWhereUniqueWithoutListingTypeInput[]
    createMany?: PropertyCreateManyListingTypeInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutListingTypeInput | PropertyUpdateWithWhereUniqueWithoutListingTypeInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutListingTypeInput | PropertyUpdateManyWithWhereWithoutListingTypeInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutListingTypeNestedInput = {
    create?: XOR<PropertyCreateWithoutListingTypeInput, PropertyUncheckedCreateWithoutListingTypeInput> | PropertyCreateWithoutListingTypeInput[] | PropertyUncheckedCreateWithoutListingTypeInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutListingTypeInput | PropertyCreateOrConnectWithoutListingTypeInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutListingTypeInput | PropertyUpsertWithWhereUniqueWithoutListingTypeInput[]
    createMany?: PropertyCreateManyListingTypeInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutListingTypeInput | PropertyUpdateWithWhereUniqueWithoutListingTypeInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutListingTypeInput | PropertyUpdateManyWithWhereWithoutListingTypeInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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
  }

  export type PropertyCreateWithoutOwnerInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPropertiesInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentCreateNestedManyWithoutPropertyInput
    transactions?: TransactionCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    listingType?: ListingTypeCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPropertyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyCreateManyOwnerInputEnvelope = {
    data: PropertyCreateManyOwnerInput | PropertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutCustomerInput = {
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutCustomerInput = {
    id?: number
    propertyId: number
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutCustomerInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutCustomerInput, FavoriteUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteCreateManyCustomerInputEnvelope = {
    data: FavoriteCreateManyCustomerInput | FavoriteCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutCustomerInput = {
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
    broker: UserCreateNestedOneWithoutAppointmentsAsBrokerInput
    property: PropertyCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutCustomerInput = {
    id?: number
    brokerId: number
    propertyId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentCreateManyCustomerInputEnvelope = {
    data: AppointmentCreateManyCustomerInput | AppointmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutBrokerInput = {
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutAppointmentsAsCustomerInput
    property: PropertyCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutBrokerInput = {
    id?: number
    customerId: number
    propertyId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutBrokerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutBrokerInput, AppointmentUncheckedCreateWithoutBrokerInput>
  }

  export type AppointmentCreateManyBrokerInputEnvelope = {
    data: AppointmentCreateManyBrokerInput | AppointmentCreateManyBrokerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutBuyerInput = {
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutTransactionsInput
    broker: UserCreateNestedOneWithoutTransactionsAsBrokerInput
  }

  export type TransactionUncheckedCreateWithoutBuyerInput = {
    id?: number
    propertyId: number
    brokerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionCreateManyBuyerInputEnvelope = {
    data: TransactionCreateManyBuyerInput | TransactionCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutBrokerInput = {
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutTransactionsInput
    buyer: UserCreateNestedOneWithoutTransactionsAsBuyerInput
  }

  export type TransactionUncheckedCreateWithoutBrokerInput = {
    id?: number
    propertyId: number
    buyerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBrokerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBrokerInput, TransactionUncheckedCreateWithoutBrokerInput>
  }

  export type TransactionCreateManyBrokerInputEnvelope = {
    data: TransactionCreateManyBrokerInput | TransactionCreateManyBrokerInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    sentAt?: Date | string
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    content: string
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    content: string
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    content: string
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type BrokerMembershipCreateWithoutBrokerInput = {
    startDate: Date | string
    endDate: Date | string
    package: MembershipPackageCreateNestedOneWithoutBrokerMembershipsInput
  }

  export type BrokerMembershipUncheckedCreateWithoutBrokerInput = {
    id?: number
    packageId: number
    startDate: Date | string
    endDate: Date | string
  }

  export type BrokerMembershipCreateOrConnectWithoutBrokerInput = {
    where: BrokerMembershipWhereUniqueInput
    create: XOR<BrokerMembershipCreateWithoutBrokerInput, BrokerMembershipUncheckedCreateWithoutBrokerInput>
  }

  export type BrokerMembershipCreateManyBrokerInputEnvelope = {
    data: BrokerMembershipCreateManyBrokerInput | BrokerMembershipCreateManyBrokerInput[]
    skipDuplicates?: boolean
  }

  export type StatisticCreateWithoutUserInput = {
    totalProperties?: number
    totalTransactions?: number
    totalIncome?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type StatisticUncheckedCreateWithoutUserInput = {
    id?: number
    totalProperties?: number
    totalTransactions?: number
    totalIncome?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type StatisticCreateOrConnectWithoutUserInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
  }

  export type StatisticCreateManyUserInputEnvelope = {
    data: StatisticCreateManyUserInput | StatisticCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    targetUser?: UserCreateNestedOneWithoutReviewsReceivedInput
    property?: PropertyCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: number
    targetUserId?: number | null
    propertyId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTargetUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    property?: PropertyCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTargetUserInput = {
    id?: number
    reviewerId: number
    propertyId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput>
  }

  export type ReviewCreateManyTargetUserInputEnvelope = {
    data: ReviewCreateManyTargetUserInput | ReviewCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Property"> | string
    area?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    images?: StringNullableListFilter<"Property">
    categoryId?: IntNullableFilter<"Property"> | number | null
    ownerId?: IntFilter<"Property"> | number
    status?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    listingTypeId?: IntNullableFilter<"Property"> | number | null
  }

  export type FavoriteUpsertWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutCustomerInput, FavoriteUncheckedUpdateWithoutCustomerInput>
    create: XOR<FavoriteCreateWithoutCustomerInput, FavoriteUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutCustomerInput, FavoriteUncheckedUpdateWithoutCustomerInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutCustomerInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutCustomerInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: IntFilter<"Favorite"> | number
    customerId?: IntFilter<"Favorite"> | number
    propertyId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCustomerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    customerId?: IntFilter<"Appointment"> | number
    brokerId?: IntFilter<"Appointment"> | number
    propertyId?: IntFilter<"Appointment"> | number
    appointmentTime?: DateTimeFilter<"Appointment"> | Date | string
    note?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutBrokerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutBrokerInput, AppointmentUncheckedUpdateWithoutBrokerInput>
    create: XOR<AppointmentCreateWithoutBrokerInput, AppointmentUncheckedCreateWithoutBrokerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutBrokerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutBrokerInput, AppointmentUncheckedUpdateWithoutBrokerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutBrokerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutBrokerInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBuyerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBuyerInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    propertyId?: IntFilter<"Transaction"> | number
    buyerId?: IntFilter<"Transaction"> | number
    brokerId?: IntFilter<"Transaction"> | number
    price?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutBrokerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBrokerInput, TransactionUncheckedUpdateWithoutBrokerInput>
    create: XOR<TransactionCreateWithoutBrokerInput, TransactionUncheckedCreateWithoutBrokerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBrokerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBrokerInput, TransactionUncheckedUpdateWithoutBrokerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBrokerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBrokerInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type BrokerMembershipUpsertWithWhereUniqueWithoutBrokerInput = {
    where: BrokerMembershipWhereUniqueInput
    update: XOR<BrokerMembershipUpdateWithoutBrokerInput, BrokerMembershipUncheckedUpdateWithoutBrokerInput>
    create: XOR<BrokerMembershipCreateWithoutBrokerInput, BrokerMembershipUncheckedCreateWithoutBrokerInput>
  }

  export type BrokerMembershipUpdateWithWhereUniqueWithoutBrokerInput = {
    where: BrokerMembershipWhereUniqueInput
    data: XOR<BrokerMembershipUpdateWithoutBrokerInput, BrokerMembershipUncheckedUpdateWithoutBrokerInput>
  }

  export type BrokerMembershipUpdateManyWithWhereWithoutBrokerInput = {
    where: BrokerMembershipScalarWhereInput
    data: XOR<BrokerMembershipUpdateManyMutationInput, BrokerMembershipUncheckedUpdateManyWithoutBrokerInput>
  }

  export type BrokerMembershipScalarWhereInput = {
    AND?: BrokerMembershipScalarWhereInput | BrokerMembershipScalarWhereInput[]
    OR?: BrokerMembershipScalarWhereInput[]
    NOT?: BrokerMembershipScalarWhereInput | BrokerMembershipScalarWhereInput[]
    id?: IntFilter<"BrokerMembership"> | number
    brokerId?: IntFilter<"BrokerMembership"> | number
    packageId?: IntFilter<"BrokerMembership"> | number
    startDate?: DateTimeFilter<"BrokerMembership"> | Date | string
    endDate?: DateTimeFilter<"BrokerMembership"> | Date | string
  }

  export type StatisticUpsertWithWhereUniqueWithoutUserInput = {
    where: StatisticWhereUniqueInput
    update: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
  }

  export type StatisticUpdateWithWhereUniqueWithoutUserInput = {
    where: StatisticWhereUniqueInput
    data: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
  }

  export type StatisticUpdateManyWithWhereWithoutUserInput = {
    where: StatisticScalarWhereInput
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyWithoutUserInput>
  }

  export type StatisticScalarWhereInput = {
    AND?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    OR?: StatisticScalarWhereInput[]
    NOT?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    id?: IntFilter<"Statistic"> | number
    userId?: IntFilter<"Statistic"> | number
    totalProperties?: IntFilter<"Statistic"> | number
    totalTransactions?: IntFilter<"Statistic"> | number
    totalIncome?: DecimalFilter<"Statistic"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Statistic"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    reviewerId?: IntFilter<"Review"> | number
    targetUserId?: IntNullableFilter<"Review"> | number | null
    propertyId?: IntNullableFilter<"Review"> | number | null
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTargetUserInput, ReviewUncheckedUpdateWithoutTargetUserInput>
    create: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTargetUserInput, ReviewUncheckedUpdateWithoutTargetUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTargetUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type CategoryCreateWithoutPropertiesInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutPropertiesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
  }

  export type UserCreateWithoutPropertiesInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type FavoriteCreateWithoutPropertyInput = {
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutPropertyInput = {
    id?: number
    customerId: number
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput>
  }

  export type FavoriteCreateManyPropertyInputEnvelope = {
    data: FavoriteCreateManyPropertyInput | FavoriteCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPropertyInput = {
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutAppointmentsAsCustomerInput
    broker: UserCreateNestedOneWithoutAppointmentsAsBrokerInput
  }

  export type AppointmentUncheckedCreateWithoutPropertyInput = {
    id?: number
    customerId: number
    brokerId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutPropertyInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPropertyInput, AppointmentUncheckedCreateWithoutPropertyInput>
  }

  export type AppointmentCreateManyPropertyInputEnvelope = {
    data: AppointmentCreateManyPropertyInput | AppointmentCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutPropertyInput = {
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    buyer: UserCreateNestedOneWithoutTransactionsAsBuyerInput
    broker: UserCreateNestedOneWithoutTransactionsAsBrokerInput
  }

  export type TransactionUncheckedCreateWithoutPropertyInput = {
    id?: number
    buyerId: number
    brokerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutPropertyInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPropertyInput, TransactionUncheckedCreateWithoutPropertyInput>
  }

  export type TransactionCreateManyPropertyInputEnvelope = {
    data: TransactionCreateManyPropertyInput | TransactionCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutPropertyInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    targetUser?: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutPropertyInput = {
    id?: number
    reviewerId: number
    targetUserId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewCreateManyPropertyInputEnvelope = {
    data: ReviewCreateManyPropertyInput | ReviewCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ListingTypeCreateWithoutPropertiesInput = {
    name: string
  }

  export type ListingTypeUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
  }

  export type ListingTypeCreateOrConnectWithoutPropertiesInput = {
    where: ListingTypeWhereUniqueInput
    create: XOR<ListingTypeCreateWithoutPropertiesInput, ListingTypeUncheckedCreateWithoutPropertiesInput>
  }

  export type CategoryUpsertWithoutPropertiesInput = {
    update: XOR<CategoryUpdateWithoutPropertiesInput, CategoryUncheckedUpdateWithoutPropertiesInput>
    create: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPropertiesInput, CategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type CategoryUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutPropertyInput, FavoriteUncheckedUpdateWithoutPropertyInput>
    create: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutPropertyInput, FavoriteUncheckedUpdateWithoutPropertyInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutPropertyInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutPropertyInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPropertyInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPropertyInput, AppointmentUncheckedUpdateWithoutPropertyInput>
    create: XOR<AppointmentCreateWithoutPropertyInput, AppointmentUncheckedCreateWithoutPropertyInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPropertyInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPropertyInput, AppointmentUncheckedUpdateWithoutPropertyInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPropertyInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPropertyInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutPropertyInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPropertyInput, TransactionUncheckedUpdateWithoutPropertyInput>
    create: XOR<TransactionCreateWithoutPropertyInput, TransactionUncheckedCreateWithoutPropertyInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPropertyInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPropertyInput, TransactionUncheckedUpdateWithoutPropertyInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPropertyInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPropertyInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ListingTypeUpsertWithoutPropertiesInput = {
    update: XOR<ListingTypeUpdateWithoutPropertiesInput, ListingTypeUncheckedUpdateWithoutPropertiesInput>
    create: XOR<ListingTypeCreateWithoutPropertiesInput, ListingTypeUncheckedCreateWithoutPropertiesInput>
    where?: ListingTypeWhereInput
  }

  export type ListingTypeUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: ListingTypeWhereInput
    data: XOR<ListingTypeUpdateWithoutPropertiesInput, ListingTypeUncheckedUpdateWithoutPropertiesInput>
  }

  export type ListingTypeUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListingTypeUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentCreateNestedManyWithoutPropertyInput
    transactions?: TransactionCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    listingType?: ListingTypeCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPropertyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyCreateManyCategoryInputEnvelope = {
    data: PropertyCreateManyCategoryInput | PropertyCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCategoryInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type PropertyCreateWithoutFavoritesInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    appointments?: AppointmentCreateNestedManyWithoutPropertyInput
    transactions?: TransactionCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    listingType?: ListingTypeCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutFavoritesInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPropertyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutFavoritesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type PropertyUpsertWithoutFavoritesInput = {
    update: XOR<PropertyUpdateWithoutFavoritesInput, PropertyUncheckedUpdateWithoutFavoritesInput>
    create: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutFavoritesInput, PropertyUncheckedUpdateWithoutFavoritesInput>
  }

  export type PropertyUpdateWithoutFavoritesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    appointments?: AppointmentUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    listingType?: ListingTypeUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserCreateWithoutAppointmentsAsCustomerInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsCustomerInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsCustomerInput, UserUncheckedCreateWithoutAppointmentsAsCustomerInput>
  }

  export type UserCreateWithoutAppointmentsAsBrokerInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsBrokerInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsBrokerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsBrokerInput, UserUncheckedCreateWithoutAppointmentsAsBrokerInput>
  }

  export type PropertyCreateWithoutAppointmentsInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    transactions?: TransactionCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    listingType?: ListingTypeCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAppointmentsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAppointmentsInput, PropertyUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsAsCustomerInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsCustomerInput, UserUncheckedUpdateWithoutAppointmentsAsCustomerInput>
    create: XOR<UserCreateWithoutAppointmentsAsCustomerInput, UserUncheckedCreateWithoutAppointmentsAsCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsCustomerInput, UserUncheckedUpdateWithoutAppointmentsAsCustomerInput>
  }

  export type UserUpdateWithoutAppointmentsAsCustomerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUpsertWithoutAppointmentsAsBrokerInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsBrokerInput, UserUncheckedUpdateWithoutAppointmentsAsBrokerInput>
    create: XOR<UserCreateWithoutAppointmentsAsBrokerInput, UserUncheckedCreateWithoutAppointmentsAsBrokerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsBrokerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsBrokerInput, UserUncheckedUpdateWithoutAppointmentsAsBrokerInput>
  }

  export type UserUpdateWithoutAppointmentsAsBrokerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type PropertyUpsertWithoutAppointmentsInput = {
    update: XOR<PropertyUpdateWithoutAppointmentsInput, PropertyUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PropertyCreateWithoutAppointmentsInput, PropertyUncheckedCreateWithoutAppointmentsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutAppointmentsInput, PropertyUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PropertyUpdateWithoutAppointmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    listingType?: ListingTypeUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutTransactionsInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    listingType?: ListingTypeCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutTransactionsInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTransactionsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTransactionsInput, PropertyUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsAsBuyerInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsAsBuyerInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsAsBuyerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsAsBuyerInput, UserUncheckedCreateWithoutTransactionsAsBuyerInput>
  }

  export type UserCreateWithoutTransactionsAsBrokerInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsAsBrokerInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsAsBrokerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsAsBrokerInput, UserUncheckedCreateWithoutTransactionsAsBrokerInput>
  }

  export type PropertyUpsertWithoutTransactionsInput = {
    update: XOR<PropertyUpdateWithoutTransactionsInput, PropertyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PropertyCreateWithoutTransactionsInput, PropertyUncheckedCreateWithoutTransactionsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutTransactionsInput, PropertyUncheckedUpdateWithoutTransactionsInput>
  }

  export type PropertyUpdateWithoutTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    listingType?: ListingTypeUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutTransactionsAsBuyerInput = {
    update: XOR<UserUpdateWithoutTransactionsAsBuyerInput, UserUncheckedUpdateWithoutTransactionsAsBuyerInput>
    create: XOR<UserCreateWithoutTransactionsAsBuyerInput, UserUncheckedCreateWithoutTransactionsAsBuyerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsAsBuyerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsAsBuyerInput, UserUncheckedUpdateWithoutTransactionsAsBuyerInput>
  }

  export type UserUpdateWithoutTransactionsAsBuyerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsAsBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUpsertWithoutTransactionsAsBrokerInput = {
    update: XOR<UserUpdateWithoutTransactionsAsBrokerInput, UserUncheckedUpdateWithoutTransactionsAsBrokerInput>
    create: XOR<UserCreateWithoutTransactionsAsBrokerInput, UserUncheckedCreateWithoutTransactionsAsBrokerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsAsBrokerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsAsBrokerInput, UserUncheckedUpdateWithoutTransactionsAsBrokerInput>
  }

  export type UserUpdateWithoutTransactionsAsBrokerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsAsBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserCreateWithoutMessagesSentInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type BrokerMembershipCreateWithoutPackageInput = {
    startDate: Date | string
    endDate: Date | string
    broker: UserCreateNestedOneWithoutBrokerMembershipsInput
  }

  export type BrokerMembershipUncheckedCreateWithoutPackageInput = {
    id?: number
    brokerId: number
    startDate: Date | string
    endDate: Date | string
  }

  export type BrokerMembershipCreateOrConnectWithoutPackageInput = {
    where: BrokerMembershipWhereUniqueInput
    create: XOR<BrokerMembershipCreateWithoutPackageInput, BrokerMembershipUncheckedCreateWithoutPackageInput>
  }

  export type BrokerMembershipCreateManyPackageInputEnvelope = {
    data: BrokerMembershipCreateManyPackageInput | BrokerMembershipCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type BrokerMembershipUpsertWithWhereUniqueWithoutPackageInput = {
    where: BrokerMembershipWhereUniqueInput
    update: XOR<BrokerMembershipUpdateWithoutPackageInput, BrokerMembershipUncheckedUpdateWithoutPackageInput>
    create: XOR<BrokerMembershipCreateWithoutPackageInput, BrokerMembershipUncheckedCreateWithoutPackageInput>
  }

  export type BrokerMembershipUpdateWithWhereUniqueWithoutPackageInput = {
    where: BrokerMembershipWhereUniqueInput
    data: XOR<BrokerMembershipUpdateWithoutPackageInput, BrokerMembershipUncheckedUpdateWithoutPackageInput>
  }

  export type BrokerMembershipUpdateManyWithWhereWithoutPackageInput = {
    where: BrokerMembershipScalarWhereInput
    data: XOR<BrokerMembershipUpdateManyMutationInput, BrokerMembershipUncheckedUpdateManyWithoutPackageInput>
  }

  export type UserCreateWithoutBrokerMembershipsInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutBrokerMembershipsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutBrokerMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrokerMembershipsInput, UserUncheckedCreateWithoutBrokerMembershipsInput>
  }

  export type MembershipPackageCreateWithoutBrokerMembershipsInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    description?: string | null
  }

  export type MembershipPackageUncheckedCreateWithoutBrokerMembershipsInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    description?: string | null
  }

  export type MembershipPackageCreateOrConnectWithoutBrokerMembershipsInput = {
    where: MembershipPackageWhereUniqueInput
    create: XOR<MembershipPackageCreateWithoutBrokerMembershipsInput, MembershipPackageUncheckedCreateWithoutBrokerMembershipsInput>
  }

  export type UserUpsertWithoutBrokerMembershipsInput = {
    update: XOR<UserUpdateWithoutBrokerMembershipsInput, UserUncheckedUpdateWithoutBrokerMembershipsInput>
    create: XOR<UserCreateWithoutBrokerMembershipsInput, UserUncheckedCreateWithoutBrokerMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBrokerMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBrokerMembershipsInput, UserUncheckedUpdateWithoutBrokerMembershipsInput>
  }

  export type UserUpdateWithoutBrokerMembershipsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBrokerMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type MembershipPackageUpsertWithoutBrokerMembershipsInput = {
    update: XOR<MembershipPackageUpdateWithoutBrokerMembershipsInput, MembershipPackageUncheckedUpdateWithoutBrokerMembershipsInput>
    create: XOR<MembershipPackageCreateWithoutBrokerMembershipsInput, MembershipPackageUncheckedCreateWithoutBrokerMembershipsInput>
    where?: MembershipPackageWhereInput
  }

  export type MembershipPackageUpdateToOneWithWhereWithoutBrokerMembershipsInput = {
    where?: MembershipPackageWhereInput
    data: XOR<MembershipPackageUpdateWithoutBrokerMembershipsInput, MembershipPackageUncheckedUpdateWithoutBrokerMembershipsInput>
  }

  export type MembershipPackageUpdateWithoutBrokerMembershipsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembershipPackageUncheckedUpdateWithoutBrokerMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutStatisticsInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutStatisticsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutStatisticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
  }

  export type UserUpsertWithoutStatisticsInput = {
    update: XOR<UserUpdateWithoutStatisticsInput, UserUncheckedUpdateWithoutStatisticsInput>
    create: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatisticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatisticsInput, UserUncheckedUpdateWithoutStatisticsInput>
  }

  export type UserUpdateWithoutStatisticsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatisticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserCreateWithoutReviewsGivenInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipCreateNestedManyWithoutBrokerInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    phoneNumber?: string | null
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsCustomer?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    appointmentsAsBroker?: AppointmentUncheckedCreateNestedManyWithoutBrokerInput
    transactionsAsBuyer?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    transactionsAsBroker?: TransactionUncheckedCreateNestedManyWithoutBrokerInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    brokerMemberships?: BrokerMembershipUncheckedCreateNestedManyWithoutBrokerInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type PropertyCreateWithoutReviewsInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentCreateNestedManyWithoutPropertyInput
    transactions?: TransactionCreateNestedManyWithoutPropertyInput
    listingType?: ListingTypeCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPropertyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutReviewsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsCustomer?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    appointmentsAsBroker?: AppointmentUncheckedUpdateManyWithoutBrokerNestedInput
    transactionsAsBuyer?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    transactionsAsBroker?: TransactionUncheckedUpdateManyWithoutBrokerNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    brokerMemberships?: BrokerMembershipUncheckedUpdateManyWithoutBrokerNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type PropertyUpsertWithoutReviewsInput = {
    update: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertyUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUpdateManyWithoutPropertyNestedInput
    listingType?: ListingTypeUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutListingTypeInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentCreateNestedManyWithoutPropertyInput
    transactions?: TransactionCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutListingTypeInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPropertyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutListingTypeInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutListingTypeInput, PropertyUncheckedCreateWithoutListingTypeInput>
  }

  export type PropertyCreateManyListingTypeInputEnvelope = {
    data: PropertyCreateManyListingTypeInput | PropertyCreateManyListingTypeInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutListingTypeInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutListingTypeInput, PropertyUncheckedUpdateWithoutListingTypeInput>
    create: XOR<PropertyCreateWithoutListingTypeInput, PropertyUncheckedCreateWithoutListingTypeInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutListingTypeInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutListingTypeInput, PropertyUncheckedUpdateWithoutListingTypeInput>
  }

  export type PropertyUpdateManyWithWhereWithoutListingTypeInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutListingTypeInput>
  }

  export type PropertyCreateManyOwnerInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
  }

  export type FavoriteCreateManyCustomerInput = {
    id?: number
    propertyId: number
    createdAt?: Date | string
  }

  export type AppointmentCreateManyCustomerInput = {
    id?: number
    brokerId: number
    propertyId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type AppointmentCreateManyBrokerInput = {
    id?: number
    customerId: number
    propertyId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TransactionCreateManyBuyerInput = {
    id?: number
    propertyId: number
    brokerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionCreateManyBrokerInput = {
    id?: number
    propertyId: number
    buyerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: number
    receiverId: number
    content: string
    sentAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: number
    senderId: number
    content: string
    sentAt?: Date | string
  }

  export type BrokerMembershipCreateManyBrokerInput = {
    id?: number
    packageId: number
    startDate: Date | string
    endDate: Date | string
  }

  export type StatisticCreateManyUserInput = {
    id?: number
    totalProperties?: number
    totalTransactions?: number
    totalIncome?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: number
    targetUserId?: number | null
    propertyId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyTargetUserInput = {
    id?: number
    reviewerId: number
    propertyId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type PropertyUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPropertiesNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    listingType?: ListingTypeUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteUpdateWithoutCustomerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutCustomerInput = {
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broker?: UserUpdateOneRequiredWithoutAppointmentsAsBrokerNestedInput
    property?: PropertyUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutBrokerInput = {
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutAppointmentsAsCustomerNestedInput
    property?: PropertyUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutBuyerInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutTransactionsNestedInput
    broker?: UserUpdateOneRequiredWithoutTransactionsAsBrokerNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutBrokerInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutTransactionsNestedInput
    buyer?: UserUpdateOneRequiredWithoutTransactionsAsBuyerNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerMembershipUpdateWithoutBrokerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: MembershipPackageUpdateOneRequiredWithoutBrokerMembershipsNestedInput
  }

  export type BrokerMembershipUncheckedUpdateWithoutBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerMembershipUncheckedUpdateManyWithoutBrokerInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUpdateWithoutUserInput = {
    totalProperties?: IntFieldUpdateOperationsInput | number
    totalTransactions?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalProperties?: IntFieldUpdateOperationsInput | number
    totalTransactions?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalProperties?: IntFieldUpdateOperationsInput | number
    totalTransactions?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneWithoutReviewsReceivedNestedInput
    property?: PropertyUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutTargetUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    property?: PropertyUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTargetUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTargetUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyPropertyInput = {
    id?: number
    customerId: number
    createdAt?: Date | string
  }

  export type AppointmentCreateManyPropertyInput = {
    id?: number
    customerId: number
    brokerId: number
    appointmentTime: Date | string
    note?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TransactionCreateManyPropertyInput = {
    id?: number
    buyerId: number
    brokerId: number
    price: Decimal | DecimalJsLike | number | string
    commission: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type ReviewCreateManyPropertyInput = {
    id?: number
    reviewerId: number
    targetUserId?: number | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FavoriteUpdateWithoutPropertyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutPropertyInput = {
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutAppointmentsAsCustomerNestedInput
    broker?: UserUpdateOneRequiredWithoutAppointmentsAsBrokerNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutPropertyInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutTransactionsAsBuyerNestedInput
    broker?: UserUpdateOneRequiredWithoutTransactionsAsBrokerNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutPropertyInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    targetUser?: UserUpdateOneWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyCategoryInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingTypeId?: number | null
  }

  export type PropertyUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    listingType?: ListingTypeUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BrokerMembershipCreateManyPackageInput = {
    id?: number
    brokerId: number
    startDate: Date | string
    endDate: Date | string
  }

  export type BrokerMembershipUpdateWithoutPackageInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    broker?: UserUpdateOneRequiredWithoutBrokerMembershipsNestedInput
  }

  export type BrokerMembershipUncheckedUpdateWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerMembershipUncheckedUpdateManyWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    brokerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyListingTypeInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    address: string
    area?: Decimal | DecimalJsLike | number | string | null
    images?: PropertyCreateimagesInput | string[]
    categoryId?: number | null
    ownerId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutListingTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutListingTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPropertyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutListingTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    images?: PropertyUpdateimagesInput | string[]
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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