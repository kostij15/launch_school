//Want to ask user for numbers
//Want to ask the operation they'd like to perform
//Perform the operation
//Print the result to the terminal
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Calculator');

prompt('What\'s the first number?');
let number1 = readline.question();

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (invalidNumber(number1)) {
  prompt("Hmm.. that doesn't look like a valid number");
  number1 = readline.question();
}

prompt('What\'s the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm.. that doesn't look like a valid number");
  number2 = readline.question();
}

prompt('What\'s the operation you\'d like to choose:\n1) Add\n2) Subtract\n3) Multiply\n4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1,2,3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
  default:
    prompt('you chose an incorrect number');
    break;
}

prompt(`The result is ${output}`);