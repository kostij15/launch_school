const READLINE = require('readline-sync');

//1. Welcome Stranger
// let greetings = (nameArr, jobObj) => {
//   let fullName = nameArr.join(' ');
//   let jobTitle = jobObj["title"].concat(' ', jobObj["occupation"]);

//   return `Hello, ${fullName}! Nice to have a ${jobTitle} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

//2. Getting a user
// let name = READLINE.question("What is your name? ");
// if (name.endsWith("!")) {
//   console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

//3. Multiplying Two Numbers
const multiply = (num1, num2) => num1 * num2;

//4 Squaring an Argument
// const square = (num) => multiply(num, num);
// console.log(square(5) === 25); // logs true
// console.log(square(-8) == 64); // logs true
//4.Extra exponential
// const exponent = (num, exp) => {
//   let result = num;
//   for (let i = 0; i < exp; i++) {
//     result = multiply(result, num);
//   }
//   return result;
// }

// console.log(exponent(5, 3));

//5. Arithmetic Integer
// const OPERATIONS = ['+', '-', '*', '/', '%', '**'];
// let firstNum = Number(READLINE.question("Enter the first number:\n"));
// let secondNum = Number(READLINE.question("Enter the second number:\n"));

// for (let i = 0; i < OPERATIONS.length; i++) {
//   let total = eval(`${firstNum} ${OPERATIONS[i]} ${secondNum} `);
//   console.log(`${firstNum} ${OPERATIONS[i]} ${secondNum} = ${total.toFixed(2)}`);
// }

//6. The End Is Near But Not Here
// function penultimate(str) {
//   let arr = str.split(' ');
//   return arr[arr.length - 2];
// }
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); //

//7. XOR (Exclusive Or)
// const xor = (left, right) => {
//   return (left && !right) || (!left && right);
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

//8. Odd Index Lists
// function oddities(arr) {
//   return arr.filter((_, index) => index % 2 === 0);
// }
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([]));
//8. Even Index Lists
// function evenities(arr) {
//   return arr.filter((_, index) => index % 2 !== 0);
// }
// console.log(evenities([2, 3, 4, 5, 6]));

//9. Convert a String to a Number!

// const stringToInteger = (str, base) => {
//   const NUMBER = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let finalNum = 0;

//   str.split('').reverse().forEach((char, index) => {
//     let currentNum = NUMBER[char] * (base ** index);
//     finalNum += currentNum;
//   })

//   return finalNum;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

//10. Convert a String to a Signed Number!
