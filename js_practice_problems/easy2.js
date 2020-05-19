const READLINE = require('readline-sync');

//1. Welcome Stranger
// let greetings = (nameArr, jobObj) => {
//   let fullName = nameArr.join(' ');
//   let jobTitle = jobObj["title"].concat(' ', jobObj["occupation"]);

//   return `Hello, ${fullName}! Nice to have a ${jobTitle} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

//2. Getting a user
let name = READLINE.question("What is your name? ");
if (name.endsWith("!")) {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}