/* Question 1
 Given a string, return a new string that replaces
 every occurrence of the word "important" with "urgent":
Question 1 Answer:
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace('important', 'urgent'))
*/
/*
Question 2
Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.


let numbers = [1, 2, 3, 4, 5];
let reversed = [];
// numbers.forEach((_, i) => reversed.push(numbers[numbers.length - i - 1]));
// console.log(reversed);

//Way 2 : Using spread operator
// reversed = [...numbers].sort((a, b) => b - a);
// console.log(reversed);

//Way 3: Using splice
// Splice creates a new array
// reversed = numbers.slice().reverse();
// console.log(reversed);

//Way 4: Using reduce
reversed = numbers.reduce((acc, num) => [num].concat(acc), []);
//alternative:
reversed = numbers.reduce((acc, num) => [num, ...acc]);
console.log(reversed);
*/

/*
Question 3
Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;
function included(arr, num) {
  return arr.includes(num);
}
console.log(included(numbers, number1));
*/

/*
// Question 4
// Starting with the string:

let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.
//Way 1 Concatenation with + binary operator
// famousWords = 'Four score and ' + famousWords;
// console.log(famousWords);
//Way 2: Concatenation with String.concat()
// famousWords = 'Four score and '.concat(famousWords);
// console.log(famousWords);
*/

// Question 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1);
// console.log(numbers);

//Question 6
// Create a new array that contains all of the above values, but in an un-nested format:
// let flinstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let answer = flinstones.reduce((acc, element) => [...acc].concat(element), []);
// console.log(...flinstones);

// Question 7
// Consider the following object:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// // Create an array from this object that contains only two elements: Barney's name and Barney's number:

// // // ['Barney', 2]
// // console.log(Object.entries(flintstones)[2]);
// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

//Question 8
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// console.log((statement1.match(/t/g) || []).length);
// console.log((statement2.match(/t/g) || []).length);

//Questioon 10
// let title = "Flintstone Family Members";
// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));