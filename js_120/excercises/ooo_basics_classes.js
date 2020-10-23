//1. Name the Constructor
// console.log('Hello'.constructor.name);
// console.log([1, 2, 3].constructor.name);
// console.log({ name: 'Srdjan' }.constructor.name);

//2. Create an empty class named Cat
// class Cat { }

// //3. Create an instance of Cat and assign it to a variable kitty
// let kitty = new Cat();

//4,5,6. Create a constructor message that says im a cat when initialized
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');

//7. Default Person
// class Person {
//   constructor(name = 'John Doe') {
//     this.name = name;
//   }
// }

// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

//8. Hello, Chloe!
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   rename(newName) {
//     this.name = newName;
//   }
// }

// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(kitty.name); // Chloe

//9. Generic Greeting (part 1)
// class Cat {
//   static genericGreeting() {
//     console.log("Hello! I'm a cat!");
//   }
// }

// Cat.genericGreeting();

//10. Generic Greeting
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   static genericGreeting() {
//     console.log("Hello! I'm a cat!");
//   }

//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}`);
//   }
// }

// let kitty = new Cat("Sophie");
// Cat.genericGreeting();
// kitty.personalGreeting();