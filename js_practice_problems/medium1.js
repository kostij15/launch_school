// function times(number1, number2) {
//   let result = number1 * number2;
//   console.log(result);
//   return result;
// }

// function factorial(num) {
//   if (num < 2) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

// function factorial(num) {
//   let total = 1;

//   for (let i = 1; i <= num; i++) {
//     total *= i;
//     i += 1;
//   }
//   return total;
// }

// console.log(factorial(3));

// let a = [5, 12, 3, 8, 2, 4, 1]
// a.sort()
// console.log(a)

// function oddLengths(arr) {
//   return arr.reduce((newArr, elem) => {
//     if (elem.length % 2 === 1) {
//       newArr.concat(elem.length);
//     }
//     return newArr;
//   }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// let allMatches = (wordArr, regex) => wordArr.filter(word => regex.test(word));

// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']

console.log(parseFloat('53,234.42'));