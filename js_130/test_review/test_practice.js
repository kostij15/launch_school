
// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

// function Pet(name, image) {
//   this.name = name;
//   this.image = image;
// }

// var Image;
// var catImage;
// var pudding;

// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// }

// function makeMultipleLister(number) {
//   let multiplesArray = [];
//   let multiple = number;

//   return function () {
//     while (multiple < 100) {
//       multiplesArray.push(multiple);
//       multiple += number;
//     }

//     multiplesArray.forEach(number => console.log(number));
//   }
// }

// let lister = makeMultipleLister(17);

//6.
// let runningTotal = 0;
// function add(newNumber) {
//   runningTotal += newNumber;
//   console.log(runningTotal);
// }

// function subtract(newNumber) {
//   runningTotal -= newNumber;
//   console.log(runningTotal);
// }

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2); //2
// let result = bar(3); //6
// result += bar(4); //30
// result += bar(5);  //150
// console.log(result); //150

// function later(callback, string) {
//   return function () {
//     callback(string);
//   }
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(callback, arg1) {
//   return function (arg2) {
//     callback(arg1, arg2);
//   }
// }

// const notify = function (message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

// function bind(context, func) {
//   return function () {
//     func.call(context);
//   }
// }

// let obj = {};
// let boundFunc = bind(obj, function () {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }

// function makeList() {
//   let todoList = [];
//   return function (listItem) {
//     if (listItem === undefined) {
//       if (todoList.length === 0) {
//         console.log("This list is empty");
//       } else {
//         todoList.forEach(item => console.log(item));
//       }
//     } else if (todoList.includes(listItem)) {
//       let itemIndex = todoList.findIndex(items => items === listItem);
//       todoList.splice(itemIndex, 1);
//       console.log(`${listItem} is removed!`);
//     } else {
//       todoList.push(listItem);
//       console.log(`${listItem} is added!`);
//     }
//   }
// }

// let list = makeList();
// list();
// list("make breakfast");
// list("readbook");
// list();

// list("make breakfast");

// list();

// function makeList() {
//   todoList = [];

//   return {
//     list() {
//       if (todoList.length === 0) {
//         console.log('The list is empty!');
//       } else {
//         todoList.forEach(item => console.log(item));
//       }
//     },

//     add(item) {
//       todoList.push(item);
//       console.log(`${item} added!`);
//     },

//     remove(item) {
//       let itemIndex = todoList.indexOf(item);
//       todoList.splice(itemIndex, 1);
//       console.log(`${item} removed!`);
//     }
//   }
// }

// let list = makeList();
// list.add('peas');
// list.list();

// list.add('corn');
// list.list();
// list.remove('peas');
// list.list();

//IIFE
//4.
// (function countdown(number) {
//   while (number >= 0) {
//     console.log(number);
//     number--;
//   }
// })(7);

//6.
// let bar = (function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

//7.
// (function countdown(number) {
//   if (number >= 0) {
//     console.log(number);
//     countdown(number - 1);
//   }
// })(7)

//shorthand notation practice
//7.
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code

//   return {
//     type: animalType,
//     age,
//     colors
//   }
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

//8.

// function take5(...args) {
//   console.log(args);
//   return {
//     first: args[0],
//     last: args[args.length - 1],
//     middle: args.slice(1, args.length - 1),
//   };
// }

// let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
// let { first, last, middle } = take5(arr);

// console.log(first);
// console.log(last);
// console.log(middle);

var foo = 10;

function bar() {
  var foo;
  if (foo > 20) {
    foo = 50;
  }

  console.log(foo);
  foo += 10;
}

bar();
bar();
bar();