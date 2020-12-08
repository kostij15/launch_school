"use strict";

//2.
// function foo() {
//   return {
//     bar: function () {
//       console.log("bar");
//     },
//     qux: function (arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function (arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

//3
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);
// let bar = obj.bar;
// let baz = obj.baz;
// let qux = obj.qux;

//4.

// function foo(array) {
//   return [array[2], 5, array[0]];
// }

// let array = [1, 2, 3];
// let result = foo(array);

// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

//5

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }
// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

//6.
// function products() {
//   return [].reduce.call(arguments, (total, number) => total * number);
// }

// let result = products(2, 3, 4, 5);
// console.log(result);

//7.
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

//8.

// function objectReturner(...args) {
//   let copiedArgs = args.slice();
//   let first = copiedArgs.splice(0, 1)[0];
//   let last = copiedArgs.splice(copiedArgs.length - 1, 1)[0];
//   let middle = [...copiedArgs].sort();

//   return {
//     first,
//     last,
//     middle,
//   }
// }

// let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
// let { first, last, middle } = objectReturner(...arr);

let foo = [1, 2, 3];
let [...bar, doo] = foo