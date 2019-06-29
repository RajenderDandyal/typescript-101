import faker from "faker";
import { Mappable, First } from "./CustomMap";

export class Company implements Mappable, First {
  companyName: string;
  color: string = "red";
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.color = "red";
  }
  markerContent(): string {
    return `
    <div>
      <h2>Company Name: ${this.companyName.toUpperCase()}</h2>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
