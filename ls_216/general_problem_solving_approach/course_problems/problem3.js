"use strict";
//Problem:
//find whether a word can be spelled using the set of blocks or not

//Rules
//['BO', 'XK', 'DQ','CP','NA','GT','RE','FS','JW','HU','VI','LY','ZM']
//once you encounter a letter that is used within the above array
//remove that block **can only use letter blocks once**

//if you look for a letter and it is no longer in the array, the word
//cannot be spelled using the set of blocks

//examples
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

//data structures
//input -> string
//letterBlock -> array

//algorithm
//make the input case insenstive by converting to uppercase
//     since array is all uppercase
//loop through case insensitive words
//  if we can find an index within the letterBlock
//      splice the letters from the array
//  else if we can't find an index within the letterBlock containing the char
//      return false
//if we get through the loop -> return true

function isBlockWord(word) {
  let letterBlocks = [
    "BO",
    "XK",
    "DQ",
    "CP",
    "NA",
    "GT",
    "RE",
    "FS",
    "JW",
    "HU",
    "VI",
    "LY",
    "ZM",
  ];

  let caseInsentive = word.toUpperCase();
  for (let index = 0; index < caseInsentive.length; index++) {
    let foundBlockIndex = letterBlocks.findIndex((elem) =>
      elem.includes(caseInsentive[index])
    );
    if (foundBlockIndex >= 0) {
      letterBlocks.splice(foundBlockIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord("BATCH"));
console.log(isBlockWord("BUTCH"));
console.log(isBlockWord("jest"));
