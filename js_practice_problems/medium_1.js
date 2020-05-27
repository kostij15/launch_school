//1. Rotation (Part 1)
// input -> array
// output -> COPY of array where first index is moved to the end
//Rules:
//  1. If its not an array -> return undefined
//  2. If empty array -> return []
//  3. Do not modify original array

// const rotateArray = arr => {
//   if (!Array.isArray(arr)) return undefined;
//   return arr.slice(1).concat(arr.slice(0, 1));
// }

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);     

//Rotation (Part 2)
//input -> number and index from the right moved to the end
//output -> rotated string with index at the end
//Rules:
// 1. rotate the last count digit of the original number
// 2, Leave the other digits in the same order
// 3. Slice off first digits then rotate last digits
// 4. Join first digits to final rotated digits
function rotateRightmostDigits(number, endRotation) {
  let strNumber = String(number);
  let indexedNum = strNumber.length - endRotation;
  let frontDigits = strNumber.slice(0, indexedNum);
  let finalDigits = strNumber.slice(indexedNum);

  finalDigits = finalDigits.slice(1) + finalDigits[0];

  return Number(frontDigits + finalDigits);
}

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

//3. Rotation (Part 3)
// const maxRotation = number => {
//   let rotatedNumber = number;
//   let strLength = String(number).length;

//   for (let i = 0; i < String(number).length; i++) {
//     rotatedNumber = rotateRightmostDigits(rotatedNumber, strLength - i);
//   }

//   console.log(rotatedNumber);
//   return rotatedNumber;
// }

// maxRotation(735291);
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146); 

//4. Stack Machine Interpretation
//input -> string
//output -> only outputted if PRINT is called

// const minilang = str => {
//   let register = 0;
//   let stack = [];

//   const REGISTER_OPERATIONS = {
//     'ADD': (stack, register) => stack.pop() + register,
//     'SUB': (stack, register) => register - stack.pop(),
//     'MULT': (stack, register) => stack.pop() * register,
//     'DIV': (stack, register) => Math.floor(register / stack.pop()),
//     'MOD': (stack, register) => register % stack.pop(),
//     'POP': (stack, _) => stack.pop()
//   };

//   const STACK_OPERATIONS = {
//     'PUSH': (stack, register) => stack.push(register),
//     'PRINT': (_, register) => console.log(register),
//   }

//   let opsArr = str.split(' ');

//   opsArr.forEach(elem => {
//     if (REGISTER_OPERATIONS.hasOwnProperty(elem)) {
//       register = (REGISTER_OPERATIONS[elem](stack, register));
//     } else if (STACK_OPERATIONS.hasOwnProperty(elem)) {
//       (STACK_OPERATIONS[elem])(stack, register);
//     } else if (!isNaN(elem)) {
//       register = Number(elem);
//     } else {
//       console.error('Not a Valid Operation')
//     }
//   });
// }


// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

// minilang('5 PUSH POP PRINT');
// 5

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

//5. Word To Digit

// function wordToDigit(str) {
//   const NUM_WORDS = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };

//   // return str.split(' ').map(elem => !isNaN(elem) ? numbersToWords[Number(elem)] : elem).join(' ');
//   return str.replace(/\w+/g, (word) => {
//     return NUM_WORDS.hasOwnProperty(word) ? NUM_WORDS[word] : word;
//   })
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

//6. Fibonacci Numbers (recursion)
// const fibonacci = num => {
//   if (num <= 2) {
//     return 1;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }
// console.log(fibonacci(12))

//7. Fibonacci Numbers (Procedural)
// function fibonacci(num) {
//   let arr = [1, 1];
//   let currentNum = 0;
//   for (let i = 2; i < num; i++) {
//     currentNum = arr[0] + arr[1];
//     arr[0] = arr[1];
//     arr[1] = currentNum;
//     console.log(arr);
//   }

//   return arr[1];
// }

// console.log(fibonacci(50));

//8. Fibonacci Numbers (Memoization)
// let memo = {};
// const fibonacci = nth => {
//   if (nth <= 2) {
//     return 1;
//   } else if (memo[nth]) {
//     return memo[nth];
//   } else {
//     memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
//     return memo[nth];
//   }
// }

// console.log(fibonacci(12));