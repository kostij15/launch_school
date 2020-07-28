const READLINE = require('readline-sync');

//1. How old is Teddy
// function teddysAge(minAge, maxAge) {
//   let randomAge = Math.floor(Math.random() * (maxAge - minAge) + minAge);
//   console.log(`Teddy is ${randomAge} years old!`);
// }

// teddysAge(20, 120);

//2. Searching 101

// searching();

// function searching() {
//   appearsInArray(enterNumbers(), lastNumber());
// }

// function enterNumbers() {
//   const SUFFIX = ['st', 'nd', 'rd', 'th', 'th'];
//   let numbersArr = [];
//   while (numbersArr.length < 5) {
//     numbersArr.push(Number(READLINE.question(`Enter the ${numbersArr.length + 1}${SUFFIX[numbersArr.length]} number: `)));
//   }
//   return numbersArr;
// }

// function lastNumber() {
//   return Number(READLINE.question(`Enter the last number: `));
// }

// function appearsInArray(arr, num) {
//   if (arr.includes(num)) {
//     console.log(`The number ${num} appears in ${arr}.`);
//   } else {
//     console.log(`The number ${num} does not appear in ${arr}.`);
//   }
// }

//3. When Will I Retire?

// const retirement = () => {
//   let age = READLINE.question("What is your age? ");
//   let retirementAge = READLINE.question("At what age would you like to retire? ");
//   let yearsToRetirement = retirementAge - age;

//   let currentDate = new Date().getFullYear();

//   console.log(`It's ${currentDate}. You will retire in ${yearsToRetirement + currentDate}`);
//   console.log(`You have only ${yearsToRetirement} years to go!`);

// }

// retirement();

//4. Palindromic Strings (Part 1)
// function isPalindrome(str) {
//   let reverseString = str.split('').reverse().join('');
//   return str === reverseString;
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

//5. Palindromic Strings (Part 2)
// function isRealPalindrome(str) {
//   let cleanedString = str.replace(/[\W]+/gi, '').toLowerCase();
//   return cleanedString === cleanedString.split('').reverse().join('');
// }

// isRealPalindrome('madam');               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// console.log(isRealPalindrome('123ab321'));            // false

//6. Palindromic Numbers
// const isPalindromicNumber = (num) => {
//   console.log(String(num) === String(num).split('').reverse().join(''))
//   return String(num) === String(num).split('').reverse().join('');
// }

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

//7. Running Total
// const runningTotal = (arr) => {
//   let runningTotalArr = arr.reduce((runningArr, num, index) => {
//     if (index === 0) {
//       runningArr.push(num);
//     } else {
//       runningArr.push(runningArr[index - 1] + num);
//     }
//     return runningArr;
//   }, []);
//   console.log(runningTotalArr);
//   return runningTotalArr;
// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

//7. Letter Counter (Part 1)

// function wordSizes(str) {
//   let wordSizeObj = {};
//   let wordArr = str.split(/[ +]/);
//   wordArr.forEach(word => {
//     if (!wordSizeObj[word.length]) {
//       wordSizeObj[word.length] = 1;
//     } else {
//       wordSizeObj[word.length] += 1;
//     }
//   });
//   console.log(wordSizeObj);
//   return wordSizeObj;
// }

// wordSizes('Four score and seven.');
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');

//8. Letter Counter (Part 2)
// const wordSizes = (str) => {
//   let replacePunc = str.replace(/[^\w\s]/g, '');
//   let wordSizeObj = replacePunc.split(' ').reduce((countObj, word) => {
//     if (word === '') {
//       return countObj;
//     }
//     countObj[word.length] ? countObj[word.length] += 1 : countObj[word.length] = 1;
//     return countObj;
//   }, {});
//   console.log(wordSizeObj);
//   return wordSizeObj;
// }

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');  

//9. Letter Swap
// function swap(str) {
//   let swappedStr = str.split(' ').map(word => {
//     if (word.length === 1) return word;
//     newWord = word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
//     return newWord;
//   }).join(' ');
//   console.log(swappedStr);
// }

// swap('Oh what a wonderful day it is');   "hO thaw a londerfuw yad ti si"
// swap('Abcde');                           "ebcdA"
// swap('a');                               "a"