//1. Sum of Digits
// input -> number
// output -> sum of digits of number (number -> str -> array -> built-inmethod)
const sum = num => {
  console.log(String(num).split('').reduce((total, digit) => total + Number(digit), 0));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45