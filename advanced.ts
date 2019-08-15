/**
 * infer 推断 用在extends中
 */
type FunctionWithOneObjectArgument<P extends { [x: string]: any }, R> = (
  props: P
) => R;

type DestructureArgsOfFunction<
  F extends FunctionWithOneObjectArgument<any, any>
> = F extends FunctionWithOneObjectArgument<infer P, any> ? P : never;

// const myFunction:FunctionWithOneObjectArgument<{x:number,y:number},string> = (props): string => {
//   console.log(props);
//   return "ok";
// };
const myFunction = (props: { x: number; y: number }): string => {
  console.log(props);
  return "ok";
};

const props: DestructureArgsOfFunction<typeof myFunction> = {
  x: 1,
  y: 2
};

/**
 * infer 根据函数参数推断类型
 */
type ParamType<T> = T extends (param: infer P) => any ? P : T;

interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;
type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string

/**
 * infer 根据函数返回值推断类型
 */
type AnotherParamType<T> = T extends (...args: any[]) => infer P ? P : any;

type AnotherFunc = () => User;
type Test = AnotherParamType<AnotherFunc>; // Test = User

type ConstructorParameters1<
  T extends new (...args: any[]) => any
> = T extends new (...args: infer P) => any ? P : never;

type InstanceType1<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : any;

class TestClass {
  constructor(public name: string, public age: number) {}
}

type Params = ConstructorParameters1<typeof TestClass>; // [string, number]
type Instance = InstanceType1<typeof TestClass>; // TestClass
