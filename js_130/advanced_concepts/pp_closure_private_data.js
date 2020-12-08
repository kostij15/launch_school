//1. makeCounterLogger
// takes number as argument and returns function
// when invoked the return function with a second number.
// it should count up or down from the first number to the second number, logging each

// function makeCounterLogger(firstNumber) {
//   return (secondNumber) => {
//     if (firstNumber > secondNumber) {
//       for (let currentNumber = firstNumber; currentNumber >= secondNumber; currentNumber--) {
//         console.log(currentNumber);
//       }
//     } else {
//       for (let currentNumber = firstNumber; currentNumber <= secondNumber; currentNumber++) {
//         console.log(currentNumber);
//       }
//     }
//   }
// }


// let countlog = makeCounterLogger(5);
// countlog(2)

//2. makeList
// creates and returns a new function that implements a todolist
// when called with an argument that is not on the list, adds it to the list
// when its called with an argument that is on the list, removes it
// whgen called without arguments, it prints all items on list
// if no items it prints an appropriate message

// function makeList() {
//   let todoList = [];

//   return function (todo) {
//     if (!todo) {
//       if (todoList.length === 0) {
//         console.log('The list is empty');
//       } else {
//         todoList.forEach(todoItem => console.log(todoItem));
//       }
//     } else if (!todoList.includes(todo)) {
//       todoList.push(todo);
//       console.log(`${todo} is added!`);
//     } else if (todoList.includes(todo)) {
//       let index = todoList.indexOf(todo);
//       todoList.splice(index, 1);
//       console.log(`${todo} is removed!`);
//     }
//   }
// }

// let list = makeList();
// list();
// list("make breakfast");
// list("read book");
// list();
// list("make breakfast");
// list();

//More Practice Problems
//1.


function makeList() {
  let todoList = [];

  return {
    add(todo) {
      todoList.push(todo);
      console.log(`${todo} added!`);
    },

    remove(todo) {
      let index = todoList.indexOf(todo);
      todoList.splice(index, 1);
      console.log(`${todo} removed!`);
    },

    list() {
      if (todoList.length === 0) {
        console.log('The list is empty');
      } else {
        todoList.forEach(todoItem => console.log(todoItem));
      }
    },
  };
}

let list = makeList();
list.add('peas');
list.list();
list.add("corn");

list.list();
list.remove("peas");
list.list();
console.log(list.todoList)