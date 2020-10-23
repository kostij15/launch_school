//2.

// class Greeting {
//   greet(str) {
//     console.log(str);
//   }
// }

// class Hello extends Greeting {
//   hi() {
//     super.greet('Hello');
//   }
// }

// let Goodbye = class extends Greeting {
//   bye() {
//     super.greet('Goodbye');
//   }
// }

//3. Catamarans

let Fueled = {
  fuelEfficiency,
  fuelCap,
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
}
