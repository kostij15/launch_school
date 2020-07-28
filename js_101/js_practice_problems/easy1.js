//Easy
//1.
// let isOdd = (int) => Math.abs(int) % 2 !== 0;
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // 

//2
// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// }
// //3
// for (let i = 2; i <= 99; i += 2) {
//   console.log(i);
// }
//4
// const READLINE = require('readline-sync');
// const m2ToF2 = 10.7639 //meters squared to ft squared

// console.log("Would you like to calculate in meters of feet?");
// let unit = READLINE.prompt();

// console.log(`Enter the length of the room in ${unit}:`);
// let length = Number(READLINE.prompt());

// console.log(`Enter the width of the room in ${unit}:`);
// let width = Number(READLINE.prompt());

// let areaCalculated = length * width;
// let convertedArea = unit === 'feet' ? areaCalculated / m2ToF2 : areaCalculated * m2ToF2;

// console.log(`The area of the room is ${areaCalculated.toFixed(2)} square ${unit} (${convertedArea.toFixed(2)} square ${unit === 'feet' ? 'meters' : 'feet'}).`)

//5
// const READLINE = require('readline-sync');

// let billAmount = Number(READLINE.question("What is the bill? "));
// let tipPercentage = Number(READLINE.question("What is the tip percentage? ")) / 100;

// let tipTotal = tipPercentage * billAmount;
// let billTotal = billAmount + tipTotal;

// console.log(`\nThe tip is \$${tipTotal.toFixed(2)}`);
// console.log(`The total is \$${billTotal.toFixed(2)}`);

//6.
// const RLSYNC = require('readline-sync');
// const VALID_OPERATION = ['s', 'p'];

// let userInteger = Number(RLSYNC.question("Please enter an integer greater than 0: "));
// while (Number.isNaN(userInteger)) {
//   userInteger = Number(RLSYNC.question("Please enter an integer greater than 0: "));
// }

// let userOperation = RLSYNC.question('Enter "s" to compute the sum, or "p" to compute the product. ');
// while (!VALID_OPERATION.includes(userOperation)) {
//   userOperation = RLSYNC.question('Enter "s" to compute the sum, or "p" to compute the product. ');
// }
// let userOperationWord = userOperation === 's' ? 'sum' : 'product';

// let total = 1;
// for (let num = 2; num <= userInteger; num++) {
//   if (userOperation === 's') {
//     total += num;
//   } else {
//     total *= num;
//   }
// }

// console.log(`\nThe ${userOperationWord} of the integers between 1 and ${userInteger} is ${total}.`);

//7. Short Long Short
// function shortLongShort(str1, str2) {
//   let str1Length = str1.length;
//   let str2Length = str2.length;

//   if (str1Length > str2.length) {
//     return str2.concat(str1, str2);
//   }
//   return str1.concat(str2, str1);
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

//8-9. Leap Years
// function isLeapYear(year) {
//   return (year < 1752 && year % 4 === 0) || (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }
// console.log(isLeapYear(1))

//10 Multiples of 3 and 5

// let multisum = (number) => {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(multisum(1000))

//11. ASCII String Value
function asciiValue(str) {
  return str.split('').reduce((sum, elem) => sum + elem.charCodeAt(), 0);
}

console.log(asciiValue('Launch School'));