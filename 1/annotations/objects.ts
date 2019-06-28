const profile = {
  Fname: "Rajender",
  age: 16,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, Fname }: { age: number; Fname: string } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

console.log(Fname, age, lat, lng);
