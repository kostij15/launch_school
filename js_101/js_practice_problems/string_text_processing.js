//1. Upper Case Check
// input -> string
// output -> boolean determing if all characters are upper case
// function isUppercase(str) {
//Option 1
// return str.toUpperCase() === str;
// //Option 2
// return !/[a-z]/.test(str);
//Option 3
// return str.split('').every(char => char === char.toUpperCase());
// }

// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

//2. Delete Vowels
// input -> array of strings
// output -> remove vowels from strings
// const removeVowels = array => {
//   console.log(array.map(word => word.replace(/[aeiou]/gi, '')))
//   return array.map(word => word.replace(/[aeiou]/gi, ''));
// }

// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);           

// function letterCaseCount(str) {
//   let lowercaseChars = str.match(/[a-z]/g) || [];
//   let uppercaseChars = str.match(/[A-Z]/g) || [];
//   let neitherChars = str.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowercaseChars.length,
//     uppercase: uppercaseChars.length,
//     neither: neitherChars.length
//   }
// }

// console.log(letterCaseCount('abCdef 123'),
//   letterCaseCount('AbCd +Ef'),
//   letterCaseCount(''))

//4. Capitalize Words
// function wordCap(str) {
//   return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// }

// console.log(wordCap('four score and seven'));

//5. Swap Case
// input -> string
// ouput -> string with all uppercase chars -> lowercase chars vice versa
// const swapCase = str => {
//   return str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('');
// }

// console.log(swapCase('Tonight on XYZ-TV'));

//6. Staggered Caps
// function staggeredCase(str) {
//   return str.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
// }

// console.log(staggeredCase('I Love Launch School!'),        // "I LoVe lAuNcH ScHoOl!"
//   staggeredCase('ALL_CAPS'),                     // "AlL_CaPs"
//   staggeredCase('ignore 77 the 444 numbers'));

//7. Staggered Caps (Part 2)
// function staggeredCase(str, onlyFormatLetters = true) {
//   if (onlyFormatLetters) {
//     let mostRecentStr = '';
//     let staggeredStr = str.split('').map((char, index) => {

//       if (/[a-zA-Z]/.test(char)) {
//         if (mostRecentStr === mostRecentStr.toLowerCase()) {
//           mostRecentStr = char.toUpperCase();
//         } else {
//           mostRecentStr = char.toLowerCase()
//         }
//         return mostRecentStr;
//       }
//       return char;

//     }).join('');
//     return staggeredStr;
//   }
//   else {
//     return str.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
//   }
// }

// console.log(staggeredCase("I Love Launch School!"));
// console.log(staggeredCase("I Love Launch School!", false));

//8.How long are you?
//input -> string seperated by comma
//output -> an array of each word next to their word length
// const wordLengths = str => {
//   if (!str) {
//     console.log([])
//     return [];
//   }
//   let words = str.split(' ');
//   let wordLengths = words.map(word => `${word} ${word.length}`);
//   console.log(wordLengths);
//   return wordLengths;
// }

// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]

// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]

// wordLengths('');      // []
// wordLengths();        // []

//9. Search Word (Part 1)
//input -> text and a string
// output -> the number of times the string appears in the str
// function searchWord(findText, str) {
//   let times = str.split(' ').filter(word => word.toLowerCase() === findText.toLowerCase()).length;
//   console.log(times);
//   return times;
// }

// function searchWord(findText, str) {
//   let regex = new RegExp(findText, 'gi');
//   str = str.replace(regex, `**${findText.toUpperCase()}**`);
//   console.log(str);
//   return str;
// }
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('sed', text);
