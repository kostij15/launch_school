//1. Cute Angles
// function dms(angle) {
//   angle = angle > 360 || angle < 0 ? Math.abs(360 - Math.abs(angle)) : angle;

//   let rounded = Math.floor(angle);
//   let minutes = Math.floor(60 * Math.abs(angle - rounded));
//   let seconds = Math.floor(60 * (Math.abs(angle - rounded) * 60 - minutes));

//   console.log(`${rounded}˚${minSecFormatting(minutes)}'${minSecFormatting(seconds)}"`);
//   return `${rounded}˚${minSecFormatting(minutes)}'${minSecFormatting(seconds)}"`;
// }

// function minSecFormatting(num) {
//   return String(num).length == 2 ? num : '0'.concat(num);
// }

// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(-400);          // 360°00'00" or 0°00'00"

//2. Combining Arrays
// function union(arr1, arr2) {
//   let unionedArr = [...arr1];
//   arr2.forEach(value => {
//     if (!arr1.includes(value)) {
//       unionedArr.push(value);
//     }
//   });
//   console.log(unionedArr);
//   return unionedArr;
// }

// union([1, 3, 5], [3, 6, 9]); 

//3 Halvsies
// function halvsies(arr) {
//   let divideIndex = Math.ceil(arr.length / 2);
//   let firstArr = arr.slice(0, divideIndex);
//   let secondArr = arr.slice(divideIndex);

//   console.log([firstArr, secondArr]);
//   return [firstArr, secondArr];
// }

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

//4. Find the Duplicte

function findDup(arr) {
  let num = arr.find(elem => arr.indexOf(elem) !== arr.lastIndexOf(elem));
  console.log(num);
  return num;
  // while (arr.length > 0) {
  //   currentNum = arr.shift();
  //   if (arr.includes(currentNum)) {
  //     console.log(currentNum);
  //     return currentNum;
  //   }
  // }
  // return -1;
}

// findDup([1, 5, 3, 1]);                                // 1
// findDup([18, 9, 36, 96, 31, 19, 54, 75, 42, 15,
//   38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//   14, 61, 90, 81, 8, 63, 95, 99, 30, 65,
//   78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//   89, 10, 84, 1, 47, 68, 12, 33, 86, 60,
//   41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
//   55, 79, 80, 21, 39, 72, 13, 50, 6, 70,
//   85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
//   40, 23, 71, 62, 73, 32, 43, 24, 4, 56,
//   7, 34, 57, 74, 45, 11, 88, 67, 5, 58]); 

//5. Combine Two Lists
// const interleave = (arr1, arr2) => {
//   let combinedArr = arr1.reduce((newArr, elem, index) => newArr.concat([elem, arr2[index]]), []);
//   console.log(combinedArr);
//   return combinedArr;
// }

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//6. Multiplicative Average
// function multiplicativeAverage(arr) {
//   let len = arr.length;
//   let multiAvg = arr.reduce((total, num) => total * num, 1) / len;

//   console.log(multiAvg.toFixed(3));
//   return multiAvg.toFixed(3);
// }

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

//7. Multiply Lists
// const multiplyList = (arr1, arr2) => {
//   let combinedArr = arr1.reduce((newArr, elem, index) => newArr.concat(elem * arr2[index]), []);
//   console.log(combinedArr);
//   return combinedArr;
// }

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

//8. List of Digit
// let digitList = (num) => String(num).split('').map(elem => Number(elem));
// console.log(digitList(12345));

//9. How Many?
// const countOccurrences = vehicles => {
//   let countObj = {};
//   vehicles.forEach(elem => {
//     elem = elem.toLowerCase();
//     countObj[elem] ? countObj[elem] += 1 : countObj[elem] = 1;
//   });
//   Object.keys(countObj).forEach(key => console.log(`${key} => ${countObj[key]}`));
// }

// let vehicles = ['car', 'CAR', 'truck', 'car', 'SUV', 'truck', 'suv',
//   'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// //10. Array Average
// const average = arr => {
//   let avg = Math.floor(arr.reduce((total, num) => total + num) / arr.length);
//   console.log(avg);
//   return avg;
// }

// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

//11. After Midnight (Part 1)
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// const timeOfDay = minutes => {
//   const BEFORE_MIDNIGHT = 24;
//   const AFTER_MIDNIGHT = 0;

//   minutes = largerThanDay(minutes);
//   //console.log(minutes);

//   return incrementTime(minutes);
// }

// function incrementTime(minute) {
//   let newHour = minute / MINUTES_PER_HOUR;
//   //console.log(newHour);
//   let newMinutes = minute % MINUTES_PER_HOUR;
//   //console.log(newMinutes)

//   if (minute >= 0) {
//     newHour = Math.floor(newHour);
//   } else {
//     newHour = HOURS_PER_DAY - 1 + Math.ceil(newHour);
//     newMinutes = MINUTES_PER_HOUR + newMinutes;
//   }
//   return `${singleValueCheck(newHour)}:${singleValueCheck(newMinutes)}`;
// }

// function largerThanDay(minutes) {
//   if (Math.abs(minutes) >= MINUTES_PER_DAY) {
//     return minutes % MINUTES_PER_DAY;
//   }
//   return minutes;
// }

// function singleValueCheck(num) {
//   return String(num).length === 2 ? String(num) : '0' + num;
// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// After Midnight (Part 2)
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(time) {
  let timeArr = time.split(':').map(num => Number(num));
  let hourToMinutes = timeArr[0] * MINUTES_PER_HOUR;
  let minutes = timeArr[1];

  return (hourToMinutes + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(time) {
  return (MINUTES_PER_DAY - afterMidnight(time)) % MINUTES_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);