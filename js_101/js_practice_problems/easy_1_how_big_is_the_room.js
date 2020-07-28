readline = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = readline.prompt('Enter the length of the room in meters:');

console.log('Enter the width of the room in meters:');
let width = readline.prompt('Enter the width of the room in meters:');

console.log(`The area of the room is ${width * length} square meters (${width * length * 10.7639} square feet).`);