// with ts we have 2 types of Types
// 1 premitive types: number, string, boolean, undefined, null, symbol, VOID
// 2 Object types: functions, arrays, classes, objects, Date

let today: Date = new Date();
today.getMonth(); // on dropdown we see all methods available from Date Class,
//today = "sty" error  type string is not assignable to type date
const person = {
  age: 20
};

class Color {}
const red = new Color();

// interface
interface Person {
  firstName: string;
  lastName: string;
}
// we can use interface in 2 ways
// 1
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// 2
let user = { firstName: "Rajender", lastName: "Dandyal" } as Person;

console.log(greeter(user));

// classes
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person2 {
  firstName: string;
  middleInitial: string;
  lastName: string;
}

function greeter2(person: Person2) {
  return (
    "Hello, " +
    person.firstName +
    " " +
    person.middleInitial +
    " " +
    person.lastName
  );
}

let user2 = new Student("Rajender", "Dev", "Dandyal");

console.log(greeter2(user2));
