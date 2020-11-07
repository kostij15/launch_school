//1. Rectangle

// class Rectangle {
//   constructor(width, length) {
//     this.length = length;
//     this.width = width;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

//2. Square
// let Square = class extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

//3. Fake Cat
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);// your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

//4. Complete the Program - Cats!
// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, fur) {
//     super(name, age);
//     this.fur = fur;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

//5. Animals
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }

//   introduce() {
//     return super.introduce().concat(' Meow meow!');
//   }
// }

// let Dog = class extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`'
//   }
// }

//6. Refactoring Vehicles
// class Vehicle {
//   constructor(make, model, wheels = undefined) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }

//   getWheels() {
//     return this.wheels;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, wheels = 4) {
//     super(make, model, wheels);
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model, wheels = 2) {
//     super(make, model, wheels);
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, wheels = 6) {
//     super(make, model, wheels);
//   }
// }

// let car = new Truck('Toyota', 'Camry');
// console.log(car.getWheels());