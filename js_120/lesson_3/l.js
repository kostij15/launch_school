function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}.`;
};

// missing code

Child.prototype.learn = function () {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child);                               // true
console.log(child instanceof Person === false);                    // true
console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
console.log(Object.getPrototypeOf(child).constructor === Child);   // true
console.log(child.school === "PS 33");                             // true
console.log(child.learn() === "I'm going to school!");             // true
console.log();

function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}