const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require('express-validator');
const { sortedTodoList, sortedTodos } = require("./lib/sort");
const store = require("connect-loki");

const app = express();
const host = "localhost";
const port = 3000;
const LokiStore = store(session);

//Static data for initial testing
const TodoList = require("./lib/todolist");
const Todo = require("./lib/todo");


app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, //31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-todos-session_id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({}),
}));

app.use(flash());
//Setting up persistent session data
app.use((req, res, next) => {
  let todoLists = [];
  if ("todoLists" in req.session) {
    req.session.todoLists.forEach(todoList => {
      todoLists.push(TodoList.makeTodoList(todoList));
    });
  }
  req.session.todoLists = todoLists;
  next();
})
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

// Find a todo list with the indicated ID. Returns `undefined` if not found.
// Note that `todoListId` must be numeric.
const loadTodoList = (todoListId, todoLists) => {
  return todoLists.find(todoList => todoList.id === +todoListId);
};

// Find a todo with the indicated ID in the indicated todo list. Returns
// `undefined` if not found. Note that both `todoListId` and `todoId` must be
// numeric.
const loadTodo = (todoListId, todoId, todoLists) => {
  let todoList = loadTodoList(todoListId, todoLists);
  if (!todoList) return undefined;

  return todoList.todos.find(todo => todo.id === +todoId);
};

app.get("/", (req, res) => {
  res.redirect("/lists")
});

app.get("/lists", (req, res) => {
  res.render("lists", {
    todoLists: sortedTodoList(req.session.todoLists),
  });
});

app.get("/lists/new", (req, res) => {
  res.render("new-list");
});

//Accessing individual todoList items
app.get("/lists/:todoListId", (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);
  if (!todoList) {
    next(new Error("doesn't exist"));

  }
  res.render('list', {
    todoList: todoList,
    todos: sortedTodos(todoList.todos),
  });
});

//Display the Edit Todo List Page
app.get("/lists/:todoListId/edit", (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);

  if (!todoList) {
    next(new Error("Doesn't exist"));
  } else {
    res.render('edit-list', { todoList });
  }
});

// Create a new todo list
app.post("/lists",
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom((title, { req }) => {
        let duplicate = req.session.todoLists.find(list => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique."),
  ],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(message => req.flash("error", message.msg));
      res.render("new-list", {
        flash: req.flash(),
        todoListTitle: req.body.todoListTitle,
      });
    } else {
      req.session.todoLists.push(new TodoList(req.body.todoListTitle));
      req.flash("success", "The todo list has been created.");
      res.redirect("/lists");
    }
  }
);


//Adding new todos from the bottom page of the /lists/:todoListId path
app.post("/lists/:todoListId/todos",
  [
    body("todoTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
  ],
  (req, res, next) => {
    let todoListId = req.params.todoListId;
    let todoList = loadTodoList(todoListId, req.session.todoLists);

    if (!todoList) {
      next(new Error("Todo list does not exist"));
    }

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(message => req.flash("error", message.msg));
      res.render('list', {
        flash: req.flash(),
        todoTitle: req.body.todoTitle,
      });
    } else {
      let newTodo = new Todo(req.body.todoTitle);
      todoList.add(newTodo);
      req.flash("success", `New todo "${req.body.todoTitle}" has been added`);
      res.redirect(`/lists/${todoListId}`);
    }
  }
);

//Changin done status of todo items
app.post("/lists/:todoListId/todos/:todoId/toggle", (req, res, next) => {
  let { todoListId, todoId } = { ...req.params };
  let todoList = loadTodoList(todoListId, req.session.todoLists);
  let todo = loadTodo(todoListId, todoId, req.session.todoLists);

  if (!todoList || !todo) {
    next(new Error("Doesn't existssss"));
  }

  let title = todo.title;

  if (todo.isDone()) {
    todo.markUndone();
    req.flash('success', `"${title}" marked as NOT done!`);
  } else {
    todo.markDone();
    req.flash("success", `"${title}" marked done!`)
  }

  res.redirect(`/lists/${todoListId}`);
});

//Removing todos
app.post('/lists/:todoListId/todos/:todoId/destroy', (req, res, next) => {
  let { todoListId, todoId } = { ...req.params };
  let todoList = loadTodoList(todoListId, req.session.todoLists);
  let todo = loadTodo(todoListId, todoId, req.session.todoLists);

  if (!todoList || !todo) {
    next(new Error("Doesn't existssss"));
  }

  let title = todo.title;
  todoList.removeAt(todoList.findIndexOf(todo));
  req.flash('success', `"${title} has been successfully removed!`);

  res.redirect(`/lists/${todoListId}`);
});

//Complete All todos
app.post('/lists/:todoListId/complete_all', (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(todoListId, req.session.todoLists);

  if (!todoList) {
    next(new Error("Todo list doesn't exist!"));
  } else {
    todoList.markAllDone();
    req.flash('success', 'Marked all todos as completed!');
    res.redirect(`/lists/${todoListId}`);
  }
});

//Removing Entire todo List
app.post("/lists/:todoListId/destroy", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(todoListId, req.session.todoLists);

  if (!todoList) {
    next(new Error("Todo List doesn't exist!"));
  } else {
    let todoListIndex = req.session.todoLists.findIndex(list => list.id === todoList.id);
    req.session.todoLists.splice(todoListIndex, 1);
    req.flash("success", `Removed "${todoList.title}" from Todo List!`);

    res.redirect('/lists');
  }
});

//Replacing TodoList title
app.post("/lists/:todoListId/edit",
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom(title => {
        let duplicate = req.session.todoLists.find(list => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique.")
  ]
  , (req, res, next) => {
    let todoListId = req.params.todoListId;
    let todoList = loadTodoList(todoListId, req.session.todoLists);

    if (!todoList) {
      next(new Error("Todo List doesn't exist!"));
    } else {
      let previousTitle = todoList.title;
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        errors.array().forEach(error => req.flash("error", error.msg));

        res.render('edit-list', {
          todoList: todoList,
          todoListTitle: req.body.todoListTitle,
        });
      } else {
        todoList.setTitle(req.body.todoListTitle);
        req.flash("success", `Changed title of "${previousTitle}" Todo to ${todoList.title}!`);
        res.redirect('/lists');
      }
    }
  }
);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err.message);
});

//Listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`);
});