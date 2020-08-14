//2.
// let RECTANGLE = {
//   area: function () {
//     return this.width * this.height;
//   },
//   perimeter: function () {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);

//3. Write a constructor function called Circle that takes a radius as an argument
// area as a meathd

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function () {
//   return Math.PI * this.radius ** 2;
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// a.hasOwnProperty('area'); // => false

//6.

// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function () {
//   this.swung = true;

//   return this;
// }

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);   

//7.

// let ninjaA;

// {
//   const Ninja = function () {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // create a `ninjaB` object here; don't change anything else
// let ninjaB = new ninjaA.constructor;

// console.log(ninjaB.swung);
// console.log(ninjaA.constructor === ninjaB.constructor) // => true

//8.  Write a constructor function that you can use with or without the new operator.
// The function should return the same result with either form

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.first = first;
//   this.last = last;
//   this.name = this.first.concat(' ', this.last);
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe
