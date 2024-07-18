const Task = require("../models/Tasks");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

const getTasks = async (req, res) => {
  if (!req.session.user) res.redirect("/auth/sign-in");
  const tasks = await Task.find({user: req.session.user._id});
  res.render("index", { tasks });
};

const addTask = async (req, res) => {
  if (!req.session.user) res.redirect("/auth/sign-in");
  await Task.create({ title: req.body.title, user: req.session.user._id });
  res.redirect("/task");
};

const deleteTask = async (req, res) => {
  if (!req.session.user) res.redirect("/auth/sign-in");
  await Task.deleteOne({ _id: req.params.id, user: req.session.user._id });
  res.redirect("/task");
};

const editTask = async (req, res) => {
  if (!req.session.user) res.redirect("/auth/sign-in");
  const taskValue = await Task.findOne({ _id: req.params.id, user: req.session.user._id });
  res.render("edit", { taskValue });
};

const updateTask = async (req, res) => {
  if (!req.session.user) res.redirect("/auth/sign-in");
  await Task.updateOne({ _id: req.params.id, user: req.session.user._id }, { title: req.body.task });
  res.redirect("/task");
};

module.exports = { getTasks, addTask, deleteTask, editTask, updateTask };
