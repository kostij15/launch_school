// Question 1
// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

// let word = 'The Flintstones Rock!'
// for (let i = 0; i < 10; i++) {
//   console.log(word.padStart(i + word.length));
// }


//Question 2
// let munstersDescription = "The Munsters are creepy and spooky.";
// console.log(munstersDescription.split("").map(x => {
//   if (x === x.toUpperCase()) {
//     return x.toLowerCase();
//   } else if (x === x.toLowerCase()) {
//     return x.toUpperCase();
//   } else {
//     return x;
//   }
// }).join(""));

// Question 3
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   for (divisor; divisor > 0; divisor--) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//   }
//   return factors;
// }

// console.log(factors(10));

// Question 6
// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);
