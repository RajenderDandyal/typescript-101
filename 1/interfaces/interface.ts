const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true
};

// this syntax is hard to read
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

// Starts with capital letter
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}
const newCivic = {
  name: "new Civic",
  year: 2019,
  broken: false,
  summary() {
    return `Name: ${this.name}`;
  }
};
const printNewVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
printNewVehicle(newCivic);
