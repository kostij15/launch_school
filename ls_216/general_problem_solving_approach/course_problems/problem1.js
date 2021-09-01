//problem
//clean up user-entered phone numbers
//can contain (all should be ignored)
// 1. spaces
// 2. dashes
// 3. dots
// 4. parenthesis

//Rules
//Good Numbers
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.

//Bad Number
// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.

//examples
// 2349328892 -> return number
// 12345678910 -> return '2345678910'
// 1-234 567.8910 -> return '2345678910'
// 9-452 1293892 -> return '0000000000'
// 1827391 9182389921 -> return '00000000'

//data structures
//input -> stringed phone number
//output -> strings number 10 digits

//algorithm
//validate whether phone number is good
//  if phone number.length< 10
//  if phone number.length === 11 && phonenumber[0] !== 1
//  if phonenumber.length > 11
//    return '0000000000'
//if valid
//  if phone number.length === 11 && phonenumber[0] === 1
//     remove phonenumber[0]
//  replace all instances of [-.() ] with empty string
//return finalstring

function cleanPhoneNumber(phoneNumber) {
  const INVALID_NUMBER = "0000000000";
  let newPhoneNumber = cleanedPhoneNumber(phoneNumber);
  if (isInvalidPhoneNumber(newPhoneNumber)) {
    return INVALID_NUMBER;
  }

  if (newPhoneNumber.length === 11) {
    return newPhoneNumber.slice(1);
  }

  return newPhoneNumber;
}

function isInvalidPhoneNumber(phoneNumber) {
  let invalidInput = /[^0-9.\(\)\- ]/g;
  return (
    invalidInput.test(phoneNumber) ||
    phoneNumber.length < 10 ||
    (phoneNumber.length === 11 && phoneNumber[0] !== "1") ||
    phoneNumber.length > 11
  );
}

function cleanedPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[\.\(\)\- ]/g, "");
}

console.log(cleanPhoneNumber("-452 1293892 "));
console.log(cleanPhoneNumber("2349328892"));
// 12345678910 -> return '2345678910'
console.log(cleanPhoneNumber("12345678910")); // -> return '2345678910'
console.log(isInvalidPhoneNumber(cleanedPhoneNumber(" 1-234 567.8910 ")));
console.log(cleanedPhoneNumber(" 1-234 567.8910 ")[0]);
