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

type ParamType<T> = T extends (param: infer P) => any ? P : T;

interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;
type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string
