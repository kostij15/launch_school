"use strict";
//Problem Description
//given a list of numbers in a "short-hand" range only the significant part of the next number is written
//make sure the number goes up next time

//examples
// "1-3, 1-2" -> [1, 2, 3, 11, 12]
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

//data structures
//input -> string
//array seperated by /, +/

//algorithm
//split string by /, +/
//loop through array
//  if string has [-:(..)]
// return incrementing function
//check previous last number

//incrmeenting function
// split by /[-:(..)]
//  if array[1] < array[0] -> array[1] + add Math.pow(10, string(array[0]).length)
//  loop from array[0] to array[1] and push 1 of previous index

function shortHand(numberString) {
  let numberArray = numberString.split(/, +/g);

  let newArray = numberArray.reduce((newArr, elem) => {
    if (/[-:(..)]/g.test(elem)) {
      return newArr.concat(...fillInSeperatorArray(elem));
    }
  }, []);
}

function fillInSeperatorArray(numberString) {
  let numberArray = getCorrectSeperatorArray(numberString);
  for (let number = numberArray[0]; number < numberArray[1]; number += 1) {
    numberArray.push(number);
  }

  return numberArray.sort((a, b) => a - b);
}

function getCorrectSeperatorArray(numberString) {
  let subNumberArray = numberString.split(/[-:(..)]/g).map(Number);

  if (subNumberArray[0] > subNumberArray[1]) {
    subNumberArray[1] = getFinalNumber(subNumberArray[0], subNumberArray[1]);
  }

  return subNumberArray;
}

function getDigits(number) {
  return String(number).slice(1).length;
}

function getFinalNumber(start, finish) {
  while (start > finish) {
    finish += Math.pow(10, getDigits(start));
  }
  return finish;
}
