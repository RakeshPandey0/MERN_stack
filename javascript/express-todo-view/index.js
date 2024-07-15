const express = require("express");
const taskController = require("./controller/task.controller");
const userController = require("./controller/user.controller");
const connectDb = require("./config/db");
const Task = require("./models/Tasks");
const User = require("./models/User");
const app = express();
const port = 3000;

connectDb();
Task;
User;

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", taskController.getTasks);
app.post("/add", taskController.addTask);
app.post("/delete/:id", taskController.deleteTask);
app.get("/edit/:id", taskController.editTask);
app.post("/edit/:id", taskController.updateTask);
app.get("/auth/sign-up", (req, res) => res.render("sign-up"));
app.get("/auth/sign-in", (req, res) =>
  res.render("sign-in", { message: null })
);
app.post("/auth/sign-up", userController.signUpPost);
app.post("/auth/sign-in", userController.signIn);

app.listen(port, () => {
  // console.log(`Example`);
});
