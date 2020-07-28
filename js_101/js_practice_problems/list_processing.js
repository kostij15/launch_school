//1. Sum of Digits
// input -> number
// output -> sum of digits of number (number -> str -> array -> built-inmethod)
// const sum = num => {
//   return String(num).split('').reduce((total, digit) => total + Number(digit), 0);
// }

// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

//2. Alphabetical Numbers
// const alphabeticNumberSort = numberedArr => {
//   const NUMBER_NAMES = ['zero', 'one', 'two', 'three', 'four',
//     'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
//     'seventeen', 'eighteen', 'nineteen'];
//   return numberedArr.map(num => NUMBER_NAMES[num]).sort().map(elem => NUMBER_NAMES.indexOf(elem));
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

//3. Multiply All Pairs
// function multiplyAllPairs(arr1, arr2) {
//   let comboArr = arr1.reduce((newArr, num1) => {
//     arr2.forEach(num2 => newArr.push(num1 * num2));
//     return newArr
//   }, []).sort((a, b) => a - b);
//   console.log(comboArr);
// }

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);

//4. Leading Substrings
// const substringsAtStart = str => {
//   return str.split('').map((_, index, array) => array.slice(0, index).join('') + array[index]);
// }

// // console.log(substringsAtStart('abc'))
// //5. All substrings
// // similar to number 4 except we're doing it for all letters
// function substrings(str) {
//   let substringArr = [];
//   str.split('').forEach((_, index, array) => {
//     substringArr.push(
//       substringsAtStart(array.slice(index).join('')))
//   });
//   return [].concat(...substringArr);
// }

// //6. Paindromic Substrings
// const palindromes = str => {
//   console.log(substrings(str).filter(isPalindrome));
//   return substrings(str).filter(isPalindrome)
// }

// function isPalindrome(str) {
//   return str.length > 1 && str === str.split('').reverse().join('');
// }

// palindromes('abcd');
// palindromes('knitting cassettes');
// palindromes('hello-madam-did-madam-goodbye');

//7. Sum of Sums
// input -> array of numbers
// output --> array of the leading element added to the following elements based on index

// function sumOfSums(arr) {
//   return arr.reduce((total, num, index) => total + num + sum(arr.slice(0, index)));
// }

// function sum(arr) {
//   return arr.reduce((total, num) => total + num);
// }

// console.log(sumOfSums([1, 5, 7, 3]));

//8. Grocery List
//input -> nested array with [fruit, num_fruits];
// output -> array with fruit the number of times it appears

// function buyFruit(nestedArr) {
//   let fruitList = [];
//   nestedArr.forEach(subArr => fruitList.push(...Array(subArr[1]).fill(subArr[0])));

//   console.log(fruitList);
// }

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);

// //9. Inventory Item Transactions
// const transactionsFor = (inventoryItem, transactions) => {
//   return transactions.filter(subObj => subObj.id === inventoryItem);
// };

// let transactions = [{ id: 101, movement: 'in', quantity: 5 },
// { id: 105, movement: 'in', quantity: 10 },
// { id: 102, movement: 'out', quantity: 17 },
// { id: 101, movement: 'in', quantity: 12 },
// { id: 103, movement: 'out', quantity: 20 },
// { id: 102, movement: 'out', quantity: 15 },
// { id: 105, movement: 'in', quantity: 25 },
// { id: 101, movement: 'out', quantity: 18 },
// { id: 102, movement: 'in', quantity: 22 },
// { id: 103, movement: 'out', quantity: 15 },];

// //console.log(transactionsFor(101, transactions));

// //10. Inventory Item Avaliability
// function isItemAvailable(transactions, inventoryItem) {
//   return transactionsFor(transactions, inventoryItem).reduce((total, subObj) => subObj.movement === 'out' ? total - subObj.quantity : total + subObj.quantity, 0) > 0;
// }

// console.log(isItemAvailable(101, transactions),     // false
//   isItemAvailable(103, transactions),     // false
//   isItemAvailable(105, transactions))     // true);
