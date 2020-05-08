// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female' }
// };

// age = Object.keys(munsters).map(member => {
//   return munsters[member].gender === 'male' ? munsters[member]["age"] : 0;
// }).reduce((accumulator, age) => accumulator + age, 0);

// Object.keys(munsters).forEach(member => console.log(`${member} is a ${munsters[member]["age"]}-year-old ${munsters[member]["gender"]}`));

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(arr => {
//   arr.forEach(elem => {
//     elem.split('').forEach(char => {
//       if ('aeiou'.includes(char)) {
//         console.log(char);
//       }
//     })
//   })
// })

//9

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// let sortedSubArrays = arr.map(subArr => {
//   if (typeof subArr[0] === 'number') {
//     return subArr.sort((a, b) => a - b);
//   } else {
//     return subArr.sort();
//   }
// });
// console.log(sortedSubArrays);

// //10
// let sortedSubArraysDesc = arr.map(subArr => {
//   if (typeof subArr[0] === 'number') {
//     return [...subArr].sort((a, b) => b - a);
//   } else {
//     return subArr.slice().sort().reverse();
//   }
// })
// console.log(sortedSubArraysDesc)

// 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newArr = arr.map(obj => {
//   let incrementedObj = {};
//   Object.keys(obj).forEach(key => {
//     incrementedObj[key] = obj[key] + 1;
//   })
//   return incrementedObj;
// });
// newArr[0]['a'] = 10;
// console.log(newArr);
// console.log(arr);

//12
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let filteredArr = arr.map(subArr => {
//   return subArr.slice().filter(elem => elem % 3 == 0);
// })
// console.log(filteredArr);

//13
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// let sortedArr = arr.sort((a, b) => {
//   let oddSumA = a.reduce((accumulator, elem) => elem % 2 !== 0 ? accumulator + elem : 0, 0);
//   let oddSumB = b.reduce((accumulator, elem) => elem % 2 !== 0 ? accumulator + elem : 0, 0);
//   return oddSumA - oddSumB;
// })
// console.log(sortedArr);

// //14
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let arr = Object.values(obj).map(subObj => {
//   if (subObj.type === 'fruit') {
//     return subObj["colors"].map(color => {
//       return (color[0].toUpperCase() + color.slice(1));
//     });
//   } else {
//     return subObj["size"].toUpperCase();
//   }
// });
// console.log(arr);

// 15
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let newArr = arr.filter(subObj => {
//   return Object.values(subObj).every(arr => arr.every(num => num % 2 === 0));
// });
// console.log(newArr);

// 16
// let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];
// let obj = {};
// arr.forEach(subArr => {
//   obj[subArr[0]] = subArr[1];
// });
// console.log(obj);

// 17
// function uuidCreation() {
//   let possibleChar = 'abcdef0123456789';
//   let uuid = '';
//   while (uuid.length <= 36) {
//     let nextChar = possibleChar[Math.round(Math.random() * (possibleChar.length - 1))];
//     if (uuid.length === 8 || uuid.length === 13 || uuid.length === 18 || uuid.length === 23) {
//       uuid += '-';
//     } else {
//       uuid += nextChar;
//     }
//   }
//   return uuid;
// }

// console.log(uuidCreation());

//5 redux
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female' }
// };

// let totalMaleAge = Object.values(munsters).filter(subObj => subObj['gender'] === 'male').reduce((accumulator, subObj) => accumulator + subObj['age'], 0);

// Object.keys(munsters).forEach(key => {
//   let upperCaseKey = key[0].toUpperCase() + key.slice(1);
//   console.log(`${upperCaseKey} is a ${munsters[key]["age"]} ${munsters[key]["gender"]}`);
// }
// )

// 8 redux
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(arr => {
//   arr.forEach(elem => {
//     elem.split('').forEach(char => 'aeiou'.includes(char) ? console.log(char) : undefined);
//   })
// })
// type

// 9 redux
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// let newArr = arr.map(subArr => {
//   if (typeof subArr[0] === 'number') {
//     return subArr.sort((a, b) => a - b);
//   } else {
//     return subArr.sort();
//   }
// });
// console.log(newArr);

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newArr = arr.map(subObj => {
//   let newObj = {};
//   Object.keys(subObj).forEach(key => {
//     newObj[key] = subObj[key] + 1;
//   })
//   return newObj;
// })
// console.log(newArr);
// newArr[0].a += 2;
// console.log(arr);
// console.log(newArr);

// 12
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let newArr = arr.map(subArr => {
//   return subArr.filter(elem => elem % 3 === 0);
// });
// console.log(newArr);

// 13
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// let newArr = arr.sort((a, b) => {
//   let oddA = a.filter(num => num % 2 !== 0).reduce((accumulator, num) => accumulator + num);
//   let oddB = b.filter(num => num % 2 !== 0).reduce((accumulator, num) => accumulator + num);
//   return oddA - oddB;
// });

// console.log(newArr);

// 14
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };
// let newObj = Object.values(obj).map(subObj => {
//   if (subObj["type"] === 'fruit') {
//     return subObj["colors"].map(color => {
//       let titleCaseColor = color[0].toUpperCase() + color.slice(1);
//       return titleCaseColor;
//     })
//   } else {
//     return subObj["size"].toUpperCase();
//   }
// })
// console.log(newObj);

//15
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];
// let newArr = arr.filter(subObj => {
//   return Object.values(subObj).every(arr => {
//     return arr.every(num => num % 2 === 0)
//   });
// });
// console.log(newArr);

// 16
let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];
let newObj = {};
arr.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];
  newObj[key] = value;
})
console.log(newObj)