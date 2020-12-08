// //2.
// (function () {
//   console.log("Sometimes, syntax isn't intuitive.");
// })();

//3.
// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function (arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);

//4.
// (function (num) {
//   for (let currentNumber = num; currentNumber >= 0; currentNumber -= 1) {
//     console.log(currentNumber);
//   }
// })(7);

//6.

// let bar = (function (start) {
//   let prod = start;

//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3) + bar(4) + bar(5);
// console.log(result);

//7. question 4 with recursion
// console.log((function recursion(num) {
//   console.log(num);

//   if (num !== 0) {
//     recursion(num - 1);
//   }
// })(7));

function divideBy(num, denom) {
  try {
    let result = num / denom;
  } catch (error) {
    console.log(error.message);
    return undefined;
  }

  return num / denom
}

divideBy(1, 0)