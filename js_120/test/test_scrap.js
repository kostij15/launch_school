function Animal(name) {
  // some statements
}

Animal.prototype.speak = function () {
  console.log('bark')
},
};

function Dog() { }
// Dog.prototype = Animal.prototype; //1

Dog.prototype = Object.create(Animal.prototype); //2
console.log(Animal.prototype.constructor)
let dog = new Dog();

dog.speak()