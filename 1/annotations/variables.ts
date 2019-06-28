// type annotation:- code we add to tell TS, what type of value a variable will refer to.
// type interface:- TS tries to figure out what type of value a variable refer to

// annotations
let apple: number = 5;
apple = 10;
let str: string = "i am groot";
let bool: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["1", "red", "green", "blue"];
let myNum: number[] = [1, 2, 3];
let myObj: object[] = [{ name: "rajender" }, { dev: true }]; // array of objects
let myArr: object[][] = [[{ one: 1 }, { two: 2 }, { three: 3 }]]; // array of array -- of abjects
let myArrErr: object[][] = [
  [{ one: 1 }, { two: 2 }, { three: 3 }]
  //{ err: true }
];

// Classes

class Car {}
let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};
let json = '{"x":10, "y":20}';
let coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);
// functions
let myFun: (id: number) => void = id => {
  console.log("my fun", id);
};
let myFun2: (id: number) => number = id => {
  console.log("my fun", id);
  return id;
};

let myFun3: (id: number) => { id: number } = id => {
  console.log("my fun", id);
  return { id };
};
