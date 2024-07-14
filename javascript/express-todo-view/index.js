const express = require("express");
const taskController = require("./controller/task.controller");
const connectDb = require("./config/db");
const Task = require("./models/Tasks");
const app = express();
const port = 3000;

connectDb();
Task;

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", taskController.getTasks);
app.post("/add", taskController.addTask);
app.post("/delete/:id", taskController.deleteTask);
app.get("/edit/:id", taskController.editTask);
app.post("/edit/:id", taskController.updateTask);

app.listen(port, () => {
  // console.log(`Example`);
});
