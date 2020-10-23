//1. factory Function

// function createPet(animal, name) {
//   return {
//     animal,
//     name,

//     sleep() {
//       console.log('I am sleeping');
//     },

//     wake() {
//       console.log('I am awake');
//     },
//   }
// }

// let pudding = createPet("Cat", "Pudding");

//2. OLOO Pattern

let PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;

    return this;
  },

  sleep() {
    console.log('I am sleeping');
  },

  wake() {
    console.log('I am awake');
  },
}