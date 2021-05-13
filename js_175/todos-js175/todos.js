const express = require("express");
const morgan = require("morgan");

const app = express();
const host = "localhost";
const port = 3000;

//Static data for initial testing
let todoLists = require("./lib/seed-data");


app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));

//todoList sorter
const sortedByTitle = lists => {
  return lists.slice().sort((todoListA, todoListB) => {
    let titleA = todoListA.title.toLowerCase();
    let titleB = todoListB.title.toLowerCase();

    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  });
}


const sortedTodoList = lists => {
  let unDoneList = sortedByTitle(lists.filter(todoList => !todoList.isDone()));
  let doneList = sortedByTitle(lists.filter(todoList => todoList.isDone()));


  return [].concat(unDoneList, doneList);
}

app.get("/", (req, res) => {
  res.redirect("/lists")
});

app.get("/lists", (req, res) => {
  res.render("lists", {
    todoLists: sortedTodoList(todoLists),
  });
});

app.get("/lists/new", (req, res) => {
  res.render("new-list");
})


//Listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`);
});