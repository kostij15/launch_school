// function isUrl(url) {
//   let couldBe = /^https?:\/\/\S+$/.test(url);
//   console.log(couldBe);
// }


// isUrl('http://launchschool.com');   // -> true
// isUrl('https://example.com');       // -> true
// isUrl('https://example.com hello'); // -> false
// isUrl('   https://example.com');    // -> false

// function fields(str) {
//   let arr = str.split(/[ \t,]+/g);
//   console.log(arr);
//   return arr;
// }

// fields("Pete,201,Student");
// // -> ['Pete', '201', 'Student']

// fields("Pete \t 201    ,  TA");
// // -> ['Pete', '201', 'TA']

// fields("Pete \t 201");
// // -> ['Pete', '201']

// fields("Pete \n 201");
// // -> ['Pete', "\n", '201']

//3.
// function mysteryMath(equation) {
//   let mysteryEquation = equation.replace(/[\*\/\+\-]/, '?');
//   console.log(mysteryEquation);
//   return mysteryEquation;
// }

// mysteryMath('4 + 3 - 5 = 2');
// // -> '4 ? 3 - 5 = 2'

// mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// // -> '(4 ? 3 + 2) / 7 - 1 = 1'

//4.
// function mysteriousMath(equation) {
//   let mysteryEquation = equation.replace(/[\*\/\+\-]/g, '?');
//   console.log(mysteryEquation);
//   return mysteryEquation;
// }
// mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
// mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

//5.
// function formatDate(date) {
//   return date.replace(/\d{4}(-\d+){2}/, (str) => {
//     let arr = str.split('-');
//     return `${arr[2]}.${arr[1]}.${arr[0]}`;
//   });
// }

// console.log(formatDate('2016-06-17'));
// console.log(formatDate('2016/06/17'));

//7.
function formatDate(dateStr) {
  let newStr = dateStr.replace(/(\d{4})([-\/])(\d{2})\2(\d+)/, '$4.$3.$1');
  console.log(newStr);
  return newStr
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2017/05/03'); // -> '03.05.2017'
formatDate('2015/01-31'); // -> '2015/01-31' (no change)