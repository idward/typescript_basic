interface NamedPerson {
  firstName: string;
  age?: number;
  [k: string]: any;
  greeting: (lastName: string) => void;
}

function greet(person: NamedPerson) {
  return "Hi, " + person.firstName;
}

function changeName(person: NamedPerson) {
  person.firstName = "Anna";
}

const p: NamedPerson = {
  firstName: "Max",
  age: 27,
  hobbies: ["Sports", "Music"],
  greeting(lastName) {
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
};

// console.log(greet({ firstName: "Jacky", age: 30 }));
changeName(p);
console.log(greet(p));
p.greeting("Liu");

interface ChangedPerson extends NamedPerson {
  sex: string
}