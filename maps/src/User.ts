import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(firstName: string, lastName: string) {
    this.name = `${firstName} ${lastName}`;
  }
}
