const Task = require("../models/Tasks");

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.render("index", { tasks });
};

const addTask = async (req, res) => {
  await Task.create({ title: req.body.title });
  res.redirect("/");
};

const deleteTask = async (req, res) => {
  await Task.deleteOne({ _id: req.params.id });
  res.redirect("/");
};

const editTask = async (req, res) => {
  const taskValue = await Task.findOne({ _id: req.params.id });
  res.send(`
              <form method="post" id="submit-form" action="/task/edit/${taskValue._id}">
              <input type="text" name="task" id="task" value="${taskValue.title}" placeholder="Search"/>
              <input type="submit" value="Update">
              </form>
          `);
};

const updateTask = async (req, res) => {
  await Task.updateOne({ _id: req.params.id }, { title: req.body.task });
  res.redirect("/");
};

module.exports = { getTasks, addTask, deleteTask, editTask, updateTask };
