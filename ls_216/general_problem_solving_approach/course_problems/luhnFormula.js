"use strict";
//Problem:
//check if the given string number is valid
//validity occurs
//  total checksum ends in 0

//Formula
//Counting from right to left, double the value of every second digit
//   -> left to right double every digit (index%2 === 0)
//Any digit >= 10, subtract 9 from the given result
//Add all digits together

//valid input
//"2323 2005 7776 3554" -> valid
// "8a7bser6@*(#3"  -> valid

//examples
//1111 -> return 6 -> noto valid
//8763 -> return 20 -> valid

//data structures
// input -> string
// array -> reducing

//algorithm
//replace all non-numeric characters with empty string
//loop through string
//  if (index%2) === 0 -> Number(char) * 2
//    if resulting number >= 10 -> subtract 9
//   else number
// add to the above variable of 0
//check and see if the final variable's last digit is 0
//    if yes then true otherwise false

function luhnCheckSum(numberString) {
  let numbersOnlyString = numberString.replace(/[^0-9]/gi, "");
  let sum = 0;

  for (let index = 0; index < numbersOnlyString.length; index++) {
    let number = Number(numbersOnlyString[index]);
    if (index % 2 === 0) {
      sum += transformNumber(number);
    } else {
      sum += number;
    }
  }

  console.log(checkZero(sum));
}

function transformNumber(number) {
  let transformedNumber = number * 2;
  if (transformedNumber >= 10) {
    transformedNumber -= 9;
  }
  return transformedNumber;
}

function checkZero(number) {
  return number % 10 === 0;
}

luhnCheckSum("1111");
luhnCheckSum("8763");
