//Letter Percentage Ratio
//input -> string
// ouput --> object with each uppercase, lowercase, and neither percentage
// const letterPercentages = str => {
//   let strLength = str.length;

//   function percentageConversion(regex) {
//     let matching = str.match(regex) || [];
//     return (100 * (matching.length / strLength)).toFixed(2);
//   }

//   let uppercase = (str.match(/[A-Z]/g) || []).length / strLength;
//   let lowercase = (str.match(/[a-z]/g) || []).length / strLength;
//   let neither = (str.match(/[^a-zA-Z]/g) || []).length / strLength;

//   return {
//     lowercase: percentageConversion(/[a-z]/g),
//     uppercase: percentageConversion(/[A-Z]/g),
//     neither: percentageConversion(/[^a-z]/gi)
//   }
// }

// console.log(letterPercentages('abCdef 123'));
// console.log(letterPercentages('AbCd +Ef'));
// console.log(letterPercentages('123'));

//2. Triangle Sides
// const triangle = (side1, side2, side3) => {
//   if (checkTriangle(side1, side2, side3)) {
//     return triangleType(side1, side2, side3);
//   }
//   return 'invalid';
// }

// function checkTriangle(...args) {
//   args.sort((a, b) => a - b);
//   return args[0] + args[1] > args[2] && !args.includes(0);
// }

// function triangleType(side1, side2, side3) {
//   let equilateral = (side1 === side2) && (side1 === side3);
//   let isoceles = (side1 === side2) || (side2 === side3) || (side1 === side3);
//   if (equilateral) {
//     return 'equilateral';
//   } else if (isoceles) {
//     return 'isoceles';
//   } else {
//     return 'scalene';
//   }
// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

//3. Tri-Angles
// const triangle = (angle1, angle2, angle3) => {
//   if (checkTriangle(angle1, angle2, angle3)) {
//     return getTriangleType()
//   }
//   return 'invalid';
// }

// function checkTriangle(...args) {
//   return sum(args) === 180 && !args.includes(0);
// }

// function sum(arr) {
//   return arr.reduce((total, degree) => total + degree, 0);
// }

// console.log(triangle(60, 70, 50));
// console.log(triangle(30, 90, 60));
// console.log(triangle(120, 50, 10));
// console.log(triangle(0, 90, 90));
// console.log(triangle(50, 50, 50));

//4. Unlucky Days
// function fridayThe13ths(year) {
//   const MONTH_NAMES = [
//     "January", "February", "March", "April", "May",
//     "June", "July", "August", "September",
//     "October", "November", "December"];
//   const THIRTEEN = 13;
//   let dayOfWeek = new Date();

//   return MONTH_NAMES.filter(month => {
//     let dayOfWeek = new Date(`${month} ${THIRTEEN}, ${year}`).getDay();
//     return dayOfWeek === 5;
//   }).length;
// }

// console.log(fridayThe13ths(2017));

//5. Next Featured number Higher than a Given Value
//input -> number
//output -> next highest featured number
//Rules
// 1. Odd number
// 2. Multiple of 7
// 3. each digit occuring once
// const featured = num => {
//   const MAX_FEATURED = 9876543201;

//   while (num < MAX_FEATURED) {
//     num++;
//     if (isFeaturedNumber(num)) {
//       console.log(num);
//       return num;
//     }
//   }
//   console.log('There is no possible number that fulfills those.');
//   return 'There is no possible number that fulfills those.';
// }

// function isFeaturedNumber(num) {
//   if (num % 2 !== 0 && num % 7 === 0 && digitsOccursOnce(num)) {
//     return true;
//   }
//   return false;
// }

// function digitsOccursOnce(num) {
//   return String(num).split('').every((elem, _, array) => array.indexOf(elem) === array.lastIndexOf(elem));
// }

// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543200);   // 9876543201
// featured(9876543201);

//6. Sum Square - Square Sum
// function sumSquareDifference(num) {
//   let arr = Array(num).fill().map((_, index) => index + 1);

//   let sumSquares = arr.reduce((total, num) => total + num, 0) ** 2;
//   let squaredSum = arr.reduce((total, num) => total + num ** 2, 0);

//   console.log(sumSquares - squaredSum);
//   return sumSquares - squaredSum;
// }

// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

//7. Bubble Sort
// const bubbleSort = array => {

//   while (!isSorted(array)) {
//     array.forEach((elem, index) => {
//       if (array[index] > array[index + 1]) {
//         [array[index], array[index + 1]] = [array[index + 1], array[index]]
//       }
//     })
//   }

//   return array;
// }

// function isSorted(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);   

//8. Longest Sentence
//input -> long text
//oput --> longest sentence
//Rules
// 1. Sentences end with periods(.), exclamation points (!), question marks (?)
// 2. Any sequence of words that are not spaces or sentence-ending characters
// 3. Preserve the punctuation at the end of the sentence in the output.

//Algorithm
// 1. split word on punctuation
// 2. split words on spaces
// 3. count the length of each string
// 4. compute the max sentence
// 5. display the sentence with punctuation at the end
// 6. display how long the sentence is

const longestSentence = longText => {
  let sentences = longText.match(/\w.*?[.!?] /g).sort((a, b) => b.length - a.length);
  let longestSentence = sentences[0];
  let numWords = longestSentence.split(' ').length;

  console.log(longestSentence);
  console.log(`\nThe longest sentence has ${numWords} words.`);

}
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

longestSentence(longText);
longestSentence("Where do you think you're going? What's up, Doc?");
longestSentence("To be or not to be! Is that the question?");