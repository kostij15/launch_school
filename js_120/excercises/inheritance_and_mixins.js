//1. Inherited Year
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//     this.startEngine();
//   }

//   startEngine() {
//     console.log('Ready to go!')
//   }
// }

// class Car extends Vehicle { }

// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);

// let car = new Car(2015);
// console.log(car.year); // 2015
// ;

//Start the Engine (part 2 )
// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return `${super.startEngine()} Drive ${speed} please!`;
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

//Walk The Cat

// let walkMixin = {
//   walk() {
//     return "Let's go for a walk!"
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }
// Object.assign(Cat.prototype, walkMixin);

// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(Fish.prototype, swimMixin);

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(Dog.prototype, swimMixin);

// class Maltese extends Dog { }

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");

// console.log(dog1.swim());
// console.log(fish1.swim());

//Towable(part1)
// let towMixin = {
//   tow() {
//     return 'I can tow a trailer!';
//   }
// }

// class Truck { }
// Object.assign(Truck.prototype, towMixin)

// class Car { }

// let truck = new Truck();
// console.log(truck.tow());

//Towable (part 2)
// const towMixin = {
//   tow() {
//     return "'I can tow a trailer!'";
//   }
// }

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     Object.assign(this, towMixin);
//   }
// }

// class Car extends Vehicle { }

// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);