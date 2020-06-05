//1. 1000 lights
//input -> number of switches
//output -> array of the lights that are on after count passes

//Data Structures
// need to use an object and an array

//Algorithm
// 1. create an object that holds the switch number as keys and the true false for on off as values
//2. create a loop that goes through the numbers
//3. we through the condition of if switch_number %index+1 === 0 then turn on (true ) else false
//4. we return a filter of the objects keys where the values are true

// const lightsOn = switches => {
//   let lights = {};

//   initializeObjectKeys(lights, switches);

//   //console.log(lights);

//   for (let sweep = 1; sweep <= switches; sweep++) {
//     Object.keys(lights).forEach(lightSwitch => {
//       if (Number(lightSwitch) % sweep === 0) {
//         lights[lightSwitch] = flipTheSwitch(lights[lightSwitch]);
//       }
//     });
//   }

//   let switchesOn = Object.keys(lights).filter(lightSwitch => lights[lightSwitch] === true).map(Number);

//   console.log(switchesOn);
//   return switchesOn;
// }

// function initializeObjectKeys(object, numSwitches) {
//   [...Array(numSwitches).keys()].forEach(key => object[Number(key) + 1] = false);
// }

// function flipTheSwitch(currentSwitch) {
//   return !currentSwitch;
// }

// lightsOn(5);
// lightsOn(100);

//2. Diamonds
// input -> number
// ouput -> diamond shaped
//Rules ->
// 1. logging to console
// 2. each line has to be an odd number. Program should have '*' as diamond shapes
//Algorithm
//1. find point of maximum diamonds.
//2. loop up until the max number of diamonds.
//3. at the inflection point should be where there are the max number of diamonds
//4. all else will be max_num
const diamond = number => {
  let half = Math.floor(number / 2);
  let array = [1];
  for (let i = 1; i < number; i++) {
    if (i === 0);
    if (i <= half) {
      array.push(array[i - 1] + 2);
    } else {
      array.push(array[i - 1] - 2);
    }
  }

  diamondOutput(array);
}

function diamondOutput(array) {
  let spaces;
  let stars;

  array.forEach(elem => {
    stars = '*'.repeat(elem);
    spaces = ' '.repeat((array.length - elem) / 2);

    console.log(spaces + stars + spaces)
  });
}

diamond(9);

//3. Now I Know My ABCs
//input -> a string
//output -> boolean determining whether word contains more than one block
//rules
//1. 13 block letters
//2.if the block contains any two letters than its false
//3.if they don't contain any letters than its true
//4. if a block is used more than once (e.g. the letters are used more than once) than false
//5. case doesn't matter

//Data Structures
//Blocks: Two Arrays with corresponding indicies
//String: needs to be parsed into array and then searched

//Algorithm

// function isBlockWord(string) {
//   let blockLetters = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
//   let stringArray = string.toUpperCase().split('');

//   for (let i = 0; i < stringArray.length; i++) {
//     let foundIndex = blockLetters.findIndex(blocks => blocks.includes(stringArray[i]));
//     // console.log(foundIndex)
//     if (foundIndex === -1) {
//       return false;
//     }
//     blockLetters.splice(foundIndex, 1);

//   }
//   return true;
// }


// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('floW'));       // true
// console.log(isBlockWord('APPLE'));      // false
// console.log(isBlockWord('apple'));      // false
// isBlockWord('apPLE');      // false
// console.log(isBlockWord('Box')); 