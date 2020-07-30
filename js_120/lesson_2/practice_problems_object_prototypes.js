let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

function assignProperty(obj, property, reassign) {
  while (obj !== null) {

    if (obj.hasOwnProperty(property)) {
      obj[property] = reassign;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

assignProperty(fooC, 'bar', 2);

console.log(fooA.bar); // 2
console.log(fooC.bar); // 2