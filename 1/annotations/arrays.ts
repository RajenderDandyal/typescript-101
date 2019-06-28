const cars = ["bmw", "toyota"];
const cars2: string[] = ["bmw", "toyota"];

const dates = [new Date(), new Date()];
const dates2: Date[] = [new Date(), new Date()];

// 2d array
const myCars: string[][] = [["bmw"], ["toyota"]];

// helps with interface when extracting values
let myCar = myCars[0];
let myCar2 = myCars[0][1];

// multiple types
const importantDates: (string | Date)[] = [new Date(), "2019-6-28"];
