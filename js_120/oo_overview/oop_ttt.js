function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  //return { foo: 1 };
}

let fluffy = new Cat('fluffy', 'Persian', 15);
console.log(fluffy.weight)
console.log(fluffy.foo)
