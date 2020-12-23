"use strict";

function encode(characters) {
  let str = '';
  let count = 1;

  for (let index = 0; index < characters.length; index++) {

    if (characters[index] === characters[index + 1]) {
      count += 1;
    } else {
      str += `${count === 1 ? '' : count}${characters[index]}`;
      count = 1;
    }
  }

  return str;
}

// console.log(encodeObject("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"));

function decode(characters) {
  let str = '';

  characters = characters.match(/([0-9]+)?[a-z]/ig);
  // console.log(characters)

  if (!characters) return '';

  characters.forEach(string => {
    let stringedNum = string.match(/[0-9]+/g);
    let number = Number(stringedNum ? stringedNum[0] : 1);
    let letter = String(string.match(/[a-z]/ig)[0]);


    str += letter.repeat(number);
  })

  return str;
}

console.log(decode("zzz ZZ  zZ"));
module.exports = { encode, decode }