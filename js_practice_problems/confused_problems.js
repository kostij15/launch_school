// const integerToString = number => {

//   let numStr = '';

//   while (number > 0) {
//     number = number % 10;
//     numStr += number;

//   }
//   console.log(numStr);
// }

// integerToString(4321);

//Easy 3
//4. Fibonacci Number Location By Length
// const findFibonacciIndexByLength = fibLength => {
//   let fibonacciNumbers = [1, 1];
//   let currentFibonacci;
//   let iterations = 2;

//   while (String(currentFibonacci).length !== fibLength) {
//     currentFibonacci = fibonacciNumbers[0] + fibonacciNumbers[1];
//     fibonacciNumbers[0] = fibonacciNumbers[1];
//     fibonacciNumbers[1] = currentFibonacci;

//     iterations += 1;

//   }

//   console.log(iterations);
//   return iterations;
// }

// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

//9. Clean up the words
//input -> string
//output -> string
//Rules
// 1. all non-alphabetic words should be replaced with spaces
// 2. if one or more non-alphabetic characters occur in a row there should only be one space
//Algorithm
//1. use replace method to replace the letters
//2. use regex to replace all non-alphabetic characters
// function cleanUp(string) {
//   return string.replace(/[^a-z]+/gi, ' ');
// }

// console.log(cleanUp("---what's my +*& line?"));

//11. After Midnight (Part 1)
//input -> integer
//ouptut -> string
//Rules
// 1. Time needs to be converted into a day (time % minutesInDay)
//2. If negative subtract the time.
//3. Hours can't be 00 < hour < 24
//4. Minutes portion is 00< min < 60
// //5. Can't use Date class methods
// const timeOfDay = minutes => {
//   const HOURS_IN_DAY = 24;
//   const MINUTES_IN_HOUR = 60;
//   const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

//   minutes %= MINUTES_IN_DAY;
//   let clockHour = minutes >= 0 ? Math.floor(minutes / 60) : HOURS_IN_DAY + Math.floor(minutes / 60);

//   let clockMinutes = minutes >= 0 ? minutes % 60 : 60 + minutes % 60;

//   //console.log(clockMinutes);
//   // console.log(`${convertTimeFormat(clockHour)}:${convertTimeFormat(clockMinutes)}`);

//   return `${convertTimeFormat(clockHour)}:${convertTimeFormat(clockMinutes)}`;
// }

// function convertTimeFormat(number) {
//   let stringNum = String(Math.abs(number));
//   return stringNum.length > 1 ? stringNum : `0${stringNum}`;
// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

//String And Text Processing
//9. Search Word (Part 1)
//input -> string
//output -> number (length of string)
//Rules
//1. the word has to match the text
//2. Not case sensitive
// function searchWord(word, string) {
//   let regex = new RegExp(word, 'gi');
//   return regex.test(string) ? string.match(regex).length : 0;
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('blue', text));

//Medium 2
//8. Longest Sentence
function longestSentence(longText) {
  let arr = longText.match(/\w.*?[.?!]/g);
  arr.sort((a, b) => findingPunctuationLength(b) - findingPunctuationLength(a));

  console.log(arr[0]);
  return arr[0];
}

function findingPunctuationLength(text) {
  return text.replace(/[.?!]/g, '').length;
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


longestSentence("Where do you think you're going? What's up, Doc?");