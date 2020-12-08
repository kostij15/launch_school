//forEach
// function forEach(array, callback, context = undefined) {
//   for (let i = 0; i < array.length; i++) {
//     callback.call(context, array[i], i, array);
//   }
// }

// // class Foo {
// //   constructor(prefix) {
// //     this.prefix = prefix;
// //   }

// //   showItem(item) {
// //     console.log(this.prefix, item);
// //   }
// // }

// // let foo = new Foo("Item: ");
// // [1, 2, 3].forEach(foo.showItem, foo);
// // [4, 5, 6].forEach(item => console.log(item));
// // let arr = [1, 2, 3, 4];

// ["a", "b", "c"].forEach(function (value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });

//BASIC EMULATION PROBLEMS
//1. filter
// function filter(array, callback, thisArg) {
//   let filteredArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callback.call(thisArg, array[i], i, array)) {
//       filteredArray.push(array[i]);
//     }
//   }

//   return filteredArray
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

//2. map
// function map(array, callback, thisArg) {
//   let mappedArray = [];

//   for (let i = 0; i < array.length; i++) {
//     mappedArray.push(callback.call(thisArg, array[i], i, array));
//   }

//   return mappedArray;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

//Emulating and Using the reduce Method
//1. reduce
// function reduce(array, callback, initialValue) {
//   let currentValue = initialValue;

//   for (let i = 0; i < array.length; i++) {
//     if (currentValue) {
//       currentValue = callback(currentValue, array[i])
//     } else {
//       currentValue = array[i];
//     }
//   }

//   return currentValue;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));

//2. filter with reduce
// function filter(array, callback) {
//   return array.reduce((accum, elem) => {
//     if (callback(elem)) {
//       accum.push(elem);
//     }
//     return accum;
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

//3. map with reduce
// function map(array, callback) {
//   return array.reduce((accum, elem) => {
//     accum.push(callback(elem));
//     return accum;
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]