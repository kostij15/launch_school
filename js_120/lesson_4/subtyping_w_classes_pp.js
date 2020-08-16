//2.Create a class named Greeting that has a single method named greet.
//The method should take a string argument, 
//and it should print that argument to the console.

// class Greeting {
//   greet(str) {
//     console.log(str);
//   }
// }

// class Hello extends Greeting {
//   hi() {
//     this.greet('Hello');
//   }
// }

// let Goodbye = class extends Greeting {
//   bye() {
//     this.greet('Goodbye');
//   }
// }

// let trej = new Greeting();
// trej.greet('blerr');

// let hej = new Hello();
// hej.hi();

// let bej = new Goodbye()
// bej.bye(); 

//3. Modify Catamarans code into a mix-in as needed
class Catamaran extends WheeledVehicle {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    super([], kmTravelledPerLiter, fuelCapInLiter);

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }

  range() {
    return this.fuelCap * this.fuelEfficiency;
  }