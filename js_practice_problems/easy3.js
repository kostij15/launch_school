// 1. ddaaiillyy ddoouubbllee
// function crunch(duplicatedStr) {
//   let arr = duplicatedStr.split('');

//   return arr.filter((char, index) => char !== arr[index + 1]).join('');
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""


//2. Bannerizer
// const logInBox = (str, maxWidth) => {
//   let strLength = str.length;
//   let boxWidth = Math.min(strLength, maxWidth) 
//   str = strLength > maxWidth ? str.slice(0, maxWidth + 2) + '...' : str;

//   let topBottom = '+' + '-'.repeat(maxWidth - 2) + '+';
//   let side = '|' + ' '.repeat(maxWidth - 2) + '|';
//   let text = '| ' + str + ' |';

//   console.log(`${topBottom}\n${side}\n${text}\n${side}\n${topBottom}`);
// }

// logInBox('To boldly go where no one has gone before.', 298);
// logInBox('');

//3. String Strings
// function stringy(int) {
//   // let arr = [];
//   // arr.length = int;
//   return Array(int).fill(int).map((_, index) => index % 2 == 0 ? 1 : 0).join('');

// }
// console.log(stringy(6));

//4. Fibonacci Number Location By Length
// function fibonacci(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// function findFibonacciIndexByLength(digits) {
//   let iteration = 0;
//   let num = 0;

//   while (String(num).length !== digits) {
//     num = fibonacci(iteration);
//     iteration += 1;
//   }

//   return iteration;

// }

// console.log(findFibonacciIndexByLength(10));  

//5. Right Triangles
// function triangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let line = ' '.repeat(n - i) + '*'.repeat(i);
//     console.log(line);
//   }
// }

// triangle(9);

//6. Madlibs
// const READLINE = require('readline-sync');

// let noun = READLINE.question('Enter a noun: ');
// let verb = READLINE.question('Enter a verb: ');
// let adjective = READLINE.question('Enter a adjective: ');
// let adverb = READLINE.question('Enter a adverb: ');

// console.log(`Do you walk your ${adjective} ${noun} ${adverb}? That's hilarious!`);
// console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}`);
// console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);

//7. Double Doubles
// let twice = (num) => {
//   let halfLength = Math.floor(String(num).length / 2);
//   let partOne = String(num).slice(0, halfLength);
//   let partTwo = String(num).slice(halfLength);

//   if (partOne === partTwo) {
//     return num;
//   }
//   return num * 2;
// }
// console.log(twice(334433));          // 74
// console.log(twice(3333));          // 44

//7. Grade Book

// function getGrade(...arg) {
//   let letterGrade = {
//     'A': 90,
//     'B': 80,
//     'C': 70,
//     'D': 60,
//     'F': 0
//   }
//   let average = arg.reduce((total, grade) => total + grade, 0) / arg.length;
//   return Object.keys(letterGrade).find(elem => average >= letterGrade[elem]);
// }

// console.log(getGrade(95, 90, 93));

//8. Clean up the words
// const cleanUp = (str) => str.replace(/\W+/g, ' ');
// console.log(cleanUp("---what's my +*& line?"));

//9. What Century Is That?
function century(year) {
  const CENT = 100;
  let currentCentury = Math.ceil(year / CENT);
  let lastDigit = currentCentury % 10;
  let lastTwo = currentCentury % 100;

  if (lastDigit === 1 && lastTwo !== 11) {
    return `${currentCentury}st`;
  } else if (lastDigit && lastTwo !== 12) {
    return `${currentCentury}nd`;
  } else if (lastDigit && lastTwo !== 13) {
    return `${currentCentury}rd`;
  } else {
    return `${currentCentury}th`;
  }
}

console.log(century(10103));