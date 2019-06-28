// public:- method can be called any where
// private:- This method can only be called by other methods in this class
// protected:- This method can be called by other methods in this class, or by othermethods in child classes

class Vehicle {
  public drive(): void {
    console.log("vrooomm brooommmm");
  }
  private honk(): void {
    console.log(" beep beep");
  }
  protected stop(): void {
    console.log("STOP!!");
  }
}
class Truck extends Vehicle {
  constructor() {
    super();
  }
  public drive(): void {
    console.log("sshhhooomm");
    super.drive();
  }
  stopMe(): void {
    this.stop();
  }
}
const truck = new Truck();
truck.drive();
//truck.honk(); err
truck.stopMe();
