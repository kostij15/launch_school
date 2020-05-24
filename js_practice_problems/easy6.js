//1. Double Char (Part 1)
// const repeater = (str) => {
//   return str.split('').map(elem => elem.repeat(2)).join('');
// }

// console.log(repeater('Hello'));
// console.log(repeater('Good job!'));
// console.log(repeater(''));

//2. Double Char (Part 2)
// const doubleConsonants = str => {
//   return str.split('').map(char => {
//     if (/[^aeiou]+/.test(char) && /[A-Za-z]/.test(char)) {
//       return char.repeat(2);
//     }
//     return char;
//   }).join('');
// }

// console.log(doubleConsonants('String'));
// console.log(doubleConsonants('July 4th!'));

//3. Reverse number
// function reverseNumber(num) {
//   let reversed = Number(String(num).split('').reverse().join(''));
//   console.log(reversed);
//   return reversed;
// }

// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1

//4. Get the Middle Character
// function centerOf(str) {
//   let strLength = str.length;
//   if (strLength % 2 === 0) {
//     return str.slice(strLength / 2 - 1, strLength / 2 + 1);
//   } else {
//     return str[(strLength - 1) / 2];
//   }
// }

// console.log(centerOf('I Love JavaScript'));
// console.log(centerOf('Launch'));
// console.log(centerOf('Launchschool'));

//5. Always Return Negative
// function negative(num) {
//   return -Math.abs(num);
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0)); 

//6. Counting Up
//Input - number
// Output - all numbers from 1 to number inclusively in ascending order
// can use for/while, 

// const sequence = maxElem => {
//   return Array(maxElem).fill(0).map((_, index) => index + 1);
// }

// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

//7. Name Swapping
// function swapName(name) {
//   let nameArr = name.split(' ');
//   return `${nameArr[nameArr.length - 1]}, ${nameArr.slice(0, -1).join(' ')}`;
// }

// console.log(swapName('Joe Roberts'));
// console.log(swapName('Karl Oskar Henriksson Ragvals'));

//8. Sequence Count
// Takes two ints as arguments
// first is a count and second is starting number of a sequencel
//Output -> array containing same number of elements as count,
//          each element in array should be a multiple of the starting number
// const sequence = (count, start) => {
//   let arr = Array(count).fill(0).reduce((newArray, _, index) => {
//     index === 0 ? newArray.push(start) : newArray.push(start + newArray[index - 1]);
//     return newArray;
//   }, []);
//   console.log(arr);
// }

// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []

//9. Reverse It (Part 1)
// input -> fctn takes string as argument
// output -> new string with words reversed
// function reverseSentence(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));
// console.log(reverseSentence('Hello World'));
// console.log(reverseSentence('Reverse these words'));

//10. Reverse It (Part 2)
// input -> string as arg containing 1+ words
// output -> if word has 5 letters or more letters reversed
// words seperated by space -> only containing letters and spaces
// const reverseWords = str => {
//   return str.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
// }

// console.log(reverseWords('Professional'));
// console.log(reverseWords('Walk around the block'));
// console.log(reverseWords('Launch School'));

//11. Reversed Arrays
// function reverse(list) {
//   return list.sort((a, b) => list.indexOf(b) - list.indexOf(a));
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

//12. mATCHING PARENTHESIS
// input -> string
// output -> boolean if there are properly matching parenthesis
//1. Need to get only '(' ')'
//2. loop through to make sure there are no ')
// const isBalanced = str => {
//   let strArray = str.split('').filter(char => char === '(' || char === ')');

//   while (strArray) {
//     // console.log(strArray.length);
//     // console.log(`Opening Bracket: ${findString(strArray, '(')}`);
//     // console.log(`Closing Bracket: ${findString(strArray, ')')}`);

//     if (strArray.length === 0) {
//       return true;
//     }

//     if (findString(strArray, '(') > findString(strArray, ')') || findString(strArray, '(') === -1 || !findString(strArray, ')') === -1) {
//       return false;
//     }
//     strArray.splice(findString(strArray, '('), 1);
//     strArray.splice(findString(strArray, ')'), 1);
//   }

// }

// function findString(arr, str) {
//   return arr.findIndex(elem => elem === str);
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);