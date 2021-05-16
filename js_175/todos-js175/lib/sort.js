// Compare object titles alphabetically (case insensitive)
const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
};


const sortedTodoList = lists => {
  let unDoneList = lists.filter(todoList => !todoList.isDone());
  let doneList = lists.filter(todoList => todoList.isDone());

  unDoneList.sort(compareByTitle);
  doneList.sort(compareByTitle);

  return [].concat(unDoneList, doneList);
}

const sortedTodos = todoList => {
  let unDone = todoList.filter(todo => !todo.isDone());
  let done = todoList.filter(todo => todo.isDone());

  unDone.sort(compareByTitle);
  done.sort(compareByTitle);

  return [].concat(unDone, done);
}

module.exports = { sortedTodoList, sortedTodos };