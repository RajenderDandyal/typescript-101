// fun expression
const add = (a: number, b: number): number => {
  return a + b;
};
//no interface for arguments, always add your ownannotations
// always add annotations for the return, otherwise TS interface will assume it to be void,
// and we don't get an error if we miss return statement

// fun decleration
function divide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
  ///return message   // TS shows err if it found return statement for void type
};

// never type is used when we know function will never execute complete, and will end in mid-way
const throwErr = (message: string): never => {
  throw new Error(message);
};

// destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: "cloudy"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);
