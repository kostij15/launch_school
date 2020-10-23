// //1. Rectangles
// let Rectangle = class {
//   constructor(length, width) {
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
//     return this.width * this.length;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// //2. Rectangles and Squares
// class Square extends Rectangle {
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

// let fakeCat = Object.create(Cat.prototype) // your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

//4. Pets
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
//     return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

// 5. Animals
// const FOUR_LEGS = 4;

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

// let Cat = class extends Animal {
//   constructor(name, age, status) {
//     super(name, age, FOUR_LEGS, 'cat', status);
//   }
// }

// let Dog = class extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, FOUR_LEGS, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

//6. Refactoring Vehicles
// class Vehicle {
//   constructor(make, model, wheels = 4) {
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

// class Motorcycle extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 2);
//   }

// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model, 6);
//     this.payload = payload;
//   }
// }

//7. Shouter
// class Person {

//   greeting(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

//8. Moving
// let Walkable = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// Object.assign(Person.prototype, Walkable);

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// Object.assign(Cat.prototype, Walkable);

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }
// Object.assign(Cheetah.prototype, Walkable);

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());

//Pet Shelter
// class Pet {
//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//   }

//   info() {
//     console.log(`a ${this.animal} named ${this.name}`);
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   adoptPet(pet) {
//     this.pets.push(pet);
//   }

//   numPets() {
//     return this.pets.length;
//   }

//   numberOfPets() {
//     return `${this.name} has ${this.numPets()}`;
//   }

//   petsAdopted() {
//     for (let i = 0; i < this.numPets(); i++) {
//       this.pets[i].info();
//     }
//   }
// }

// class Shelter {
//   constructor() {
//     this.owners = [];
//     this.shelterPets = [];
//   }

//   adopt(owner, pet) {
//     //add owners to list
//     if (!this.owners.includes(owner)) {
//       this.owners.push(owner);
//     }
//     //add pet ot owners
//     owner.adoptPet(pet);
//   }

//   printAdoptions() {
//     for (let i = 0; i < this.owners.length; i++) {
//       let owner = this.owners[i];
//       console.log(`${owner.name} has adopted the following pets:`);
//       owner.petsAdopted();
//       console.log()
//     }
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding = new Pet('cat', 'Pudding');
// let darwin = new Pet('bearded dragon', 'Darwin');
// let kennedy = new Pet('dog', 'Kennedy');
// let sweetie = new Pet('parakeet', 'Sweetie Pie');
// let molly = new Pet('dog', 'Molly');
// let chester = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// //console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// //console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

//10. Banner Class

class Banner {
  constructor(message) {
    this.message = message;
  }

  messageLength() {
    return this.message.length;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${"-".repeat(this.messageLength())}-+`;
  }

  emptyLine() {
    return `| ${" ".repeat(this.messageLength())} |`;
  }

  messageLine() {
    return `| ${this.message} |`
  }
}


let banner2 = new Banner('');
banner2.displayBanner();