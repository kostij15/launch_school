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

//3. Circle

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
// console.log(a.hasOwnProperty('area')); // => false

//6.

// function Ninja() {
//   this.swung = false;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object

// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this
// }

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

//7.

// let ninjaA;

// {
//   const Ninja = function () {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // create a `ninjaB` object here; don't change anything else

// let ninjaB = new ninjaA.constructor();
// console.log(ninjaA);
// console.log(ninjaB)

// console.log(ninjaA.constructor === ninjaB.constructor) // => true

//8. Create a function that you can use with or without the new operator
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.first = first;
  this.last = last;
  this.name = `${this.first} ${this.last}`
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe