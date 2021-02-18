"use strict";
//1. delayLog
// function delayLog() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// delayLog();

//2. let delay to var delay
// function delayLog() {
//   for (var delay = 1; delay <= 10; delay++) {
//     setTimeout(function () {
//       console.log(delay);
//     }, delay * 1000);
//   }
// }

// delayLog();

//3. Order of Execution
// setTimeout(function () {   // 1
//   console.log('Once');     // 5
// }, 1000);

// setTimeout(function () {   // 2
//   console.log('upon');     // 7
// }, 3000);

// setTimeout(function () {   // 3
//   console.log('a');        // 6
// }, 2000);

// setTimeout(function () {   // 4
//   console.log('time');     // 8
// }, 4000);

//4. Order of Execution
// setTimeout(function () {
//   setTimeout(function () {
//     q();              ///7
//   }, 15);

//   d();              // 3

//   setTimeout(function () {
//     n();           //5 
//   }, 5);

//   z();            //4
// }, 10); 

// setTimeout(function () {
//   s();            //6
// }, 20);

// setTimeout(function () {
//   f();                    //2
// });

// g();              //1

//5. afterNSeconds
function afterNSeconds(callback, delaySeconds) {
  setTimeout(callback, delaySeconds * 1000);
} 