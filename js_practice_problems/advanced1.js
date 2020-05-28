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

const merge = (array1, array2) => {
  //My solution
  // let newArray = [];
  // let placeholder = 0;

  // arrayComparison(array1, array2, newArray);
  // arrayComparison(array2, newArray, newArray);
  // console.log(newArray);

  //Their Solution
  let copyArr1 = array1.slice();
  let copyArr2 = array2.slice();

  let mergedSorted = [];

  while (copyArr1.length > 0 && copyArr2.length > 0) {
    mergedSorted.push(copyArr1[0] <= copyArr2[0] ? copyArr1.shift() : copyArr2.shift());
  }

  return mergedSorted.concat(copyArr1.length === 0 ? copyArr2 : copyArr1);
}

// function arrayComparison(array1, array2, newArray) {
// My Solution
// array1.forEach(elem1 => {
//   placeholder = 0;
//   array2.forEach(elem2 => {
//     if (elem1 < elem2 || elem2 === undefined) {
//     } else {
//       placeholder += 1;
//     }
//   });
//   newArray.splice(placeholder, 0, elem1);
// });
// }

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]

//Merge Sort
//input array
//output sorted array
// Rules
// 1. Must first break down array into nested subarrays
// 2. Build array into nested arrays