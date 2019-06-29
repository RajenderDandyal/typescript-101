import faker from "faker";
import { Mappable, First } from "./CustomMap";

export class User implements First, Mappable {
  name: string;
  color: string = "blue";
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
    <div>
      <h2>User Name: ${this.name.toUpperCase()}</h2>
    </div>
    `;
  }
}
