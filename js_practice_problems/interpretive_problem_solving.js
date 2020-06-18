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
// const diamond = number => {
//   let half = Math.floor(number / 2);
//   let array = [1];
//   for (let i = 1; i < number; i++) {
//     if (i === 0);
//     if (i <= half) {
//       array.push(array[i - 1] + 2);
//     } else {
//       array.push(array[i - 1] - 2);
//     }
//   }

//   diamondOutput(array);
// }

// function diamondOutput(array) {
//   let spaces;
//   let stars;

//   array.forEach(elem => {
//     stars = '*'.repeat(elem);
//     spaces = ' '.repeat((array.length - elem) / 2);

//     console.log(spaces + stars + spaces)
//   });
// }

// diamond(9);

//Now I know My ABCs
//input: string
//output: boolean

//Rules:
//1. Must spell block with only one of the letters
//2. You can only use each block once.
//3. If word can be spelled using the set of blocks following the above then true

//Data Structures
//array for block filled with string pairs as each index

//Algorithm
//Convert word to array
//run a loop/forEach
//if letter is included in block, remove the block
//if we cant find the block then return false as it has already been used in word
// function isBlockWord(word) {
//   let block = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];

//   let wordArr = word.toLowerCase().split('');

//   for (let i = 0; i < wordArr.length; i++) {
//     let removedIndex = block.findIndex(spellingBlock => spellingBlock.includes(wordArr[i]));

//     if (removedIndex === -1) return false;
//     block.splice(removedIndex, 1);

//   }
//   return true;
// }

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true

//Seeing Stars
//input: Number
//ouput: logged stars

//Rules
//1. Number has to be odd
//2. Smallest number of stars needs to be 7
//3. Add a new row of three by three stars seprated by Math.floor((num - 3) /2)

const star = number => {
  const SPACE = ' ';
  const STAR = '*';
  const NUM_SPACES = (number - 3) / 2;
  const MAX_STAR_INDEX = Math.floor(number / 2);

  if (number % 2 === 0) console.log('Please choose an odd number.');

  let insideSpaceList = Array(number).fill().map((elem, index) => {
    if (index < MAX_STAR_INDEX) {
      return NUM_SPACES - index;
    } else if (index > MAX_STAR_INDEX) {
      return NUM_SPACES - (number - index) + 1;
    } else {
      return 0;
    }
  })
  console.log(insideSpaceList);

  insideSpaceList.forEach((numInsideSpaces, index) => {
    let numOutsideSpaces = NUM_SPACES - numInsideSpaces;

    if (index === MAX_STAR_INDEX) {
      console.log(STAR.repeat(number));
    } else {
      console.log(`${SPACE.repeat(numOutsideSpaces)}${STAR}${SPACE.repeat(numInsideSpaces)}${STAR}${SPACE.repeat(numInsideSpaces)}${STAR}${SPACE.repeat(numOutsideSpaces)}`);
    }
  })

}

star(9);