//1) No it wouldn't. Objects are mutable therefore their contents can be altered.
//1 Bonus) it will return an undefined because index 3,4 are not defined.
// Empty slots are what they actually are. Even if you map them it won't change anything.

//2)  How can you determine whether a given string ends with an exclamation mark (!)?
// You can use str.endsWith('!');

//3) Determine whether the following object of people and their age contains an entry for 'Spot':

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty('Spot'));

//4) Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// let lowerString = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
// console.log(lowerString);

//5) What will the following code output?

// console.log(false == '0'); // returns True -> coerces '0' to be 0
// console.log(false === '0'); // returns False -> strings aren't converted due to strict equality operatior

//6) We have most of the Munster family in our ages object:
//Add entries for Marilyn and Spot to the object:

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// let additionalAges = { Marilyn: 22, Spot: 237 };
// //We can do this a few different ways
// Object.assign(ages, additionalAges);
// console.log(ages);
// //Another way
// ages['Marilyn'] = 22;
// ages['Spot'] = 237;

// 7) Determine whether the name Dino appears in the strings below -- check each string separately):

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// Question 8
// How can we add the family pet, "Dino", to the following array?

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino');

// Question 9
// In the previous problem, our first answer added 'Dino' to the array like this:

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino', 'Hoppy');

// Question 10
// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let houseIndex = advice.indexOf('house');
// advice.slice(0,houseIndex);
// console.log(advice.slice(0, houseIndex));