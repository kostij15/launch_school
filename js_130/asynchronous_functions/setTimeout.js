"use strict";
//1. delayLog
//loops through the numbers from 1-10, logs each aft that number of seconds

// function delayLog() {
//   for (var second = 1; second <= 10; second++) {
//     console.log(second);
//     setTimeout(function () {
//       console.log(second);
//     }, second * 1000);
//   }
// }

// delayLog();

//3. List the following in order of lines run 

// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

//4. In what sequence does the JavaScript runtime run the functions q(), d(), n(), z(), s(), f(), and g() in the following code?

// setTimeout(function() { 
//   setTimeout(function() { 
//     q(); // 7
//   }, 15);

//   d(); // 3

//   setTimeout(function() {
//     n(); // 5
//   }, 5);

//   z(); // 4
// }, 10);

// setTimeout(function() {
//   s(); // 6
// }, 20);

// setTimeout(function() { 
//   f(); // 1
// });

// g(); // 2

//5. afterNSeconds takes to arguments a callback and time duration

// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }