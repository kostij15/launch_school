//problem
// compare 2 version numbers and see which is greater
// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits
//the "." character, we should return null.

//examples
//  0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
//compareVesions(0.1, 1) -1
//compareVersions(1.1, 1.0) return 1
//compareVersions(1.2, 1.2.0.0)

//data structures
//input two strings

//algo
//main
//split each version into an array
//compare arrays
//determine which is the version

//compare array
//find the max length of the two versions
//loop through the largest
// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, continue
//if comes out of loop
//return 0

function compareVersions(version1, version2) {
  let validRegex = /^[0-9]+(\.[0-9]+)*$/;
  if (!validRegex.test(version1) || !validRegex.test(version2)) return null;
  let version1Arr = version1.split(".").map(Number);
  let version2Arr = version2.split(".").map(Number);
  let maxLength = largestVersion(version1Arr, version2Arr);

  for (let index = 0; index < maxLength; index++) {
    if (convertNumber(version1Arr[index]) > convertNumber(version2Arr[index])) {
      return 1;
    } else if (
      convertNumber(version1Arr[index]) < convertNumber(version2Arr[index])
    ) {
      return -1;
    }
  }
  return 0;
}

function largestVersion(version1Arr, version2Arr) {
  return Math.max(version1Arr.length, version2Arr.length);
}

function convertNumber(versionNumber) {
  if (versionNumber === null) {
    return 0;
  } else if (versionNumber !== null && /[^0-9]/.test(versionNumber)) {
    return null;
  }
  return versionNumber;
}

console.log(compareVersions("1", "1")); // 0
console.log(compareVersions("1.1", "1.0")); // 1
console.log(compareVersions("2.3.4", "2.3.5")); // -1
console.log(compareVersions("1.a", "1")); // null
console.log(compareVersions(".1", "1")); // null
console.log(compareVersions("1.", "2")); // null
console.log(compareVersions("1..0", "2.0")); // null
console.log(compareVersions("1.0", "1.0.0")); // 0
console.log(compareVersions("1.0.0", "1.1")); // -1
console.log(compareVersions("1.0", "1.0.5")); // -1
