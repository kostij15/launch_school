"use strict";
//5. makeMultipleLister
// function makeMultipleLister(number) {
//   const hunna = 100;
//   return function () {
//     for (let i = number; i < hunna; i++) {
//       if (i % number === 0) {
//         console.log(i);
//       }
//     }
//   }
// }

// let lister = makeMultipleLister(17);
// lister();

//6. 
// want to add tow functions to manipulate a running total
// let total = 0;

// function add(number1) {
//   total += number1;
//   console.log(total);
// }

// function subtract(number1) {
//   total -= number1;
//   console.log(total);
// }

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

//7.
// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2); //prod = 2
// let result = bar(3); //6
// result += bar(4); // 6 + 24 = 30
// result += bar(5); // 30 + 120 = 
// console.log(result); //150

//8.
// function later(func, input) {
//   return function () {
//     return func(input);
//   }
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

//9. later2
//two arguments function and argument
// return value new function that also takes an argument -> call input function with the argument provided and the argument provided by the return function

// function later2(func, input1) {
//   return function (input2) {
//     return func(input1, input2);
//   }
// }

// const notify = function (message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

//10. bind
let obj = {};

function bind(context, func) {
  return function () {
    func.call(context);
  }
}

let boundFunc = bind(obj, function () {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }