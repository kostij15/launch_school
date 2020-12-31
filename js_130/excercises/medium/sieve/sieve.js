"use strict";

//1. We create a list of multiples
//2. mark all the multiples of that number by skipping by that number
//3. take the next number up and count by that number
// function primes(number) {
//   let numbersObj = createNumObj(number);

//   findPrimes(numbersObj, number);

// }

// function createNumObj(number) {
//   let obj = {};

//   for (let i = 2; i <= number; i++) {
//     obj[i] = true;
//   }

//   return obj
// }

// function primeList(obj, start, limit) {
//   let numberArr = Object.keys(obj).map(Number);

//   for (let i = start; i < numberArr.length; i++) {
//     let multiple = i;
//   }
// }
//   primes(29)
function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    console.log(delay);
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog();