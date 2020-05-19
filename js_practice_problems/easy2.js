const READLINE = require('readline-sync');

// Welcome Stranger
// function greetings(name, status) {
//   return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
//     status["occupation"]
//     } around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

//Greeting a User
// calmDown();
// function calmDown() {
//   let name = READLINE.question("what is your name? ");
//   console.log(name.endsWith('!') ? `HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING?` : `Hello ${name}.`);
// }

//Multiplying Two Numbers
// const multiply = (num1, num2) => num1 * num2;
// // console.log(multiply(5, 3));

// let square = (num) => multiply(num, num);
// console.log(square(-8));

//Arithmetic Integer

//The End Is Here But Not Here
// const penultimate = (str) => {
//   let arr = str.split(/\s+/);
//   return arr.slice(-2, -1)[0];
// }
// console.log(penultimate('last word'));
// console.log(penultimate("Launch School is great!"));

//Exclusive Or
// function xor(arg1, arg2) {
//   let falsy = ['', 0, false, null, undefined, NaN];
//   return (arg1 && !arg2) || (!arg1 && arg2);
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

//Odd Lists
// const oddities = (arr) => arr.filter((elem, index) => index % 2 === 0);
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
console.log(Array.isArray(numbers));
console.log(Array.isArray(table))