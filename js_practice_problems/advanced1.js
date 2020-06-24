//1. Madlibs Revisited
//input -> template
//output -> Text
//Rules
// 1. Format template correctly
// 2. split by new line
// 3. split by colon
// 4. add to object
// 5. Randomize

// const madLibs = (template, possibleWordObj) => {
//   let newTemplate = template.replace(/adjectives|verbs|nouns|adverbs/gi, randomizeWords);


//   function randomizeWords(preposition) {
//     let randomInt = Math.floor(Math.random() * possibleWordObj[preposition].length);
//     return possibleWordObj[preposition][randomInt];
//   }

//   return newTemplate;

// }

// function possibleWords(prepositionPossibilites) {
//   let prepositionObj = {};
//   prepositionPossibilites.split("\n").forEach((subArray) => {
//     let lineSplit = subArray.split(": ");
//     prepositionObj[lineSplit[0]] = String(lineSplit[1]).split(' ');
//   });

//   return prepositionObj;
// }

// let possiblePrepositions = possibleWords("adjectives: quick lazy sleepy noisy hungry\n" +
//   "nouns: fox dog head leg tail can\n" +
//   "verbs: jumps lifts bites licks pats\n" +
//   "adverbs: easily lazily noisily excitedly\n"
// );

// let template = "The nouns verbs the nouns nouns."

// console.log(madLibs(template, possiblePrepositions));

//2/3/4 Transpose 3x3 Matrix ->
//input -> nested arrays
//output -> transposed matrix NO MUTATION
//Rules
// 1. Must be a copy of original array
// 2. Must be transposed

//Algorithm
// 1. Set a few variables
// 2. Find the length of the total array === row Length
// 3. Find the length of each individual array === column Length
// 4. Create a new array.
// 4. Run a for loop through the column length since they switch
// 5. While running through this loop create a nested array within the new array.
// 6. Run a for loop through the row length
// 7. set each row column combination to the inverse

// const transpose = matrix => {
//   let transposedMatrix = [];

//   let newColLength = matrix.length;
//   let newRowLength = matrix[0].length;

//   for (let newRow = 0; newRow < newRowLength; newRow++) {
//     transposedMatrix.push([]);
//     for (let newCol = 0; newCol < newColLength; newCol++) {
//       transposedMatrix[newRow][newCol] = matrix[newCol][newRow];
//     }
//   }

//   return transposedMatrix;
// }

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]

//4. Rotating Matrix
// function rotate90(matrix) {
//   let transposedMatrix = [];

//   let newColLength = matrix.length;
//   let newRowLength = matrix[0].length;

//   for (let newRow = 0; newRow < newRowLength; newRow++) {
//     transposedMatrix.push([]);
//     for (let newCol = 0; newCol < newColLength; newCol++) {
//       transposedMatrix[newRow][newCol] = matrix[newCol][newRow];
//     }
//   }

//   return transposedMatrix.map(subArr => subArr.reverse());

// }

// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// let newMatrix1 = rotate90(matrix1);
// let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

//6. Merge Sorted Lists
//input -> two arrays
// output -> two arrays merged and sorted
//Rules
// 1. Cannot use .sort()
//2. must build array one element at a time in the proper order
//3. Cannot mutate the input array

//Algorithm
// 1. Create new array
//2. run a for loop through one of the arrays
// 3. compare that wi

// const merge = (array1, array2) => {
//   //My solution
//   // let newArray = [];
//   // let placeholder = 0;

//   // arrayComparison(array1, array2, newArray);
//   // arrayComparison(array2, newArray, newArray);
//   // console.log(newArray);

//   //Their Solution
//   let copyArr1 = array1.slice();
//   let copyArr2 = array2.slice();

//   let mergedSorted = [];

//   while (copyArr1.length > 0 && copyArr2.length > 0) {
//     mergedSorted.push(copyArr1[0] <= copyArr2[0] ? copyArr1.shift() : copyArr2.shift());
//   }

//   return mergedSorted.concat(copyArr1.length === 0 ? copyArr2 : copyArr1);
// }

// function merge(arr1, arr2) {
//   let copyArr1 = arr1.slice();
//   let copyArr2 = arr2.slice();

//   let sortedList = [];

//   while (copyArr1.length > 0 && copyArr2.length > 0) {
//     sortedList.push(copyArr1[0] <= copyArr2[0] ? copyArr1.shift() : copyArr2.shift());
//   }

//   console.log(sortedList);
//   return sortedList;
// }

// // merge([1, 5, 9], [2, 6, 8]);

// //Merge Sort
// function mergeSort(arr) {
//   if (arr.length === 1) return arr;

//   let subArrayOne = arr.slice(0, arr.length / 2);
//   let subArrayTwo = arr.slice(arr.length / 2);
//   subArrayOne = merge(subArrayOne);
//   subArrayTwo = merge(subArrayTwo);

//   console.log(merge(subArrayOne, subArrayTwo));
//   return merge(subArrayOne, subArrayTwo);

// }

// Examples:

// mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
// mergeSort([5, 3]);                 // [3, 5]
// mergeSort([6, 2, 7, 1, 4]); 

//Binary Search

//input: sorted array
// output: index of search value

//Rules:
// 1. all arrays are previously sorted.
//2. Must look in the middle of the array
//3. if middle value is less than lookup value then remove the bottom half including middle
//4. if middle value is greater than lookup value then remove the top half

//Data Structures
//array

//Algorithm
//1. Find middle of array
//2. Go to middle of array
//3. Compare element with look-up vlaue
//4. if they are equal then return index
//5. if not compare it with the middle value
//6. if middle value is greater than look-up, remove all elements lower than that
//7. else do the opposite
//8. repeat steps 1-3 until we find value

// const binarySearch = (array, searchItem) => {
//   let copiedArray = array.slice();
//   let low = 0;
//   let high = array.length;


//   while (low <= high) {
//     searchIndex = low + Math.floor((high - low) / 2);

//     if (array[searchIndex] === searchItem) {
//       return searchIndex;
//     } else if (array[searchIndex] < searchItem) {
//       low = searchIndex + 1;
//     } else {
//       high = searchIndex - 1;
//     }
//     copiedArray = copiedArray.slice(low, high);

//   }

//   return -1;
// }

// // let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// // console.log(binarySearch(yellowPages, 'Pizzeria'));
// // console.log(binarySearch(yellowPages, 'Apple Store'));

// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');

//Egyptian Fractions
//input: Fraction
//output: Array
//Rules
//1. All entries must be a unit fraction
//2. All array entries are the denominator of the function
//3. 

//Data Structures
// Array

//Algorithm
//1. determine the numeric result of the fraction.
//2. run a loop
//3. within that loop add 
// const Fraction = require('fraction.js');

// let f = new Fraction('1/2');

// const egyptian = (fraction) => {
//   let denominator = 1;

//   let denominatorArray = [];

//   while (fraction > 0) {
//     let unitFraction = new Fraction(1, denominator);

//     // console.log(unitFraction, round(total, 3))

//     if (unitFraction <= fraction) {
//       denominatorArray.push(denominator);
//       fraction = fraction.sub(unitFraction);
//     }
//     denominator += 1;
//   }

//   return denominatorArray;
// }

// function round(number, decimal = 0) {
//   return decimal === 0 ? parseInt(number) : parseFloat(number.toFixed(decimal));
// }

// function unegyptian(array) {
//   return array.reduce((total, denominator) => total + Fraction(1, denominator), new Fraction(0));
// }

// console.log(egyptian(new Fraction(3, 1)));

//Transpose 3x3 Matrix
//input: nested array
//output: nested array

//Rules:
//1. Array must be transposed

//Algorithm
//1. Create an empty array called transposedArray
//2. Create three subarrays within transposedArray
//2. create a for loop of the array
//3. create a second loop within the first
//4. use array destructuring to set let [transposedArray[i][j], transposedArray[j][i]] = [transposedArray[j][i], transposedArray[i][j]]

function transpose(array) {
  let rows = array.length;
  let columns = array[0].length;

  let transposedArray = Array(columns).fill().map(elem => []);

  for (let row = 0; row < array[0].length; row++) {
    for (let col = 0; col < array.length; col++) {
      transposedArray[row][col] = array[col][row];
      //console.log(row, col)
      // console.log(transposedArray);
    }
  }
  //console.log(transposedArray)
  return transposedArray;
}

let matrix = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

transpose(matrix);
// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);

// function rotate90(array) {
//   return transpose(array).map(subArr => subArr.reverse());
// }


// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// let newMatrix1 = rotate90(matrix1);
// let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      //

//Merge Sorted Lists
const merge = (array1, array2) => {
  let mergedArray = [];
  let maxLength = array1.length + array2.length;

  while (array1.length > 0 && array2.length > 0) {
    mergedArray.push(array1[0] < array2[0] ? array1.shift() : array2.shift());
  }

  mergedArray = mergedArray.concat(array1.length === 0 ? array2 : array1);
  console.log(mergedArray);

  return mergedArray;
}

// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]

//Merge Sort
//Algorithm
//1.  
function mergeSort(array) {
  let copyArray = array.map(elem => [elem]);
  let count = 0;

  while (!Array.isArray(copyArray[0])) {
    copyArray[0].concat()
  }
}

mergeSort([6, 2, 7, 1, 4]);