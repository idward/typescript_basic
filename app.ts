/** 
    public: 公共属性，全部可以访问
    private: 私有属性， 只有base class可以访问
    protected: 保护属性，只有继承类可以访问（通过在method中调用this.property）
    public和protected属性可以在继承类中被覆盖, 而private属性则不行
*/

class Person {
  name: string;
  private type: string = "";
  protected age: number = 10;
  constructor(name: string, public username: string) {
    this.name = name;
  }
}

const person = new Person("Max", "max");
console.log(person);

class Teacher extends Person {
  name: string = "Sherry";
  age: number = 23;
}

const teacher = new Teacher("Limin", "limin");
console.log(teacher);

class Student extends Person {
  height: number;
  constructor(height: number, ...rest: [string, string]) {
    super(...rest);
    this.height = height;
  }

  getAge() {
    return this.age;
  }
}

const student = new Student(1.8, "Xiaomin", "xiaomin");
console.log(student);
console.log(student.getAge());

/**
 * 私有属性的的设置和访问方式，_是表明该属性是私有属性
 * 通过getter和setter方法去设置私有属性
 */
class Plant {
  private _species: string = "default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "default";
    }
  }
}

const plant = new Plant();
plant.species = "apple tree";
console.log(plant.species);
plant.species = "a";
console.log(plant.species);

/**
 * 静态属性和方法访问，static修饰符
 * 通过Class.name的方式访问
 */
class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

/**
 * 抽象类 abstract
 * 不能被直接实例化，abstract方法需要继承类去实现
 */
abstract class Project {
  projectName: string = "default";
  budget: number = 0;

  abstract changeName(name: string): void;

  calcuBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const project = new ITProject();
console.log(project);
project.changeName("Bignews");
console.log(project);

/**
 * sigleton模式（单子模式）
 * 私有化constructor， 让constructor不能被实例化
 * 创建一个自己对象，并且私有化让其不能被外部访问
 * 通过暴露一个公有方法去创建对象，该对象只有一个
 */
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {}

  static getOnlyOne(): OnlyOne {
    // 为什么不用this
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("Hello");
    }
    return OnlyOne.instance;
  }
}

const onlyOne = OnlyOne.getOnlyOne();
console.log(onlyOne);

console.log('----------- namespace ------------')
