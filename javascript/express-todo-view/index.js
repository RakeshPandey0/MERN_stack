const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/task-management').then(() => {
    console.log("Database Connected");
})

const taskSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Task = mongoose.model("Task", taskSchema);

app.set("view engine", "ejs");
app.use(express.urlencoded());
const todos = ["learn html", "learn js", "learn node"];


app.get('/', async (req, res) => {
    // let listToDisplay = "";
    const tasks = await Task.find();
    res.render("index", {tasks});
});

app.get("/:index", (req, res) => {
    const index = req.params.index;
    res.send(todos[index]);
});


app.post("/add", async (req, res) => {
    await Task.create({ title: req.body.title });
    res.redirect('/');

});


app.post("/delete/:id", async (req, res) => {
    // const index= req.params.index;
    // todos.splice(index, 1);
    // res.redirect('/');
    await Task.deleteOne({ _id: req.params.id });
    res.redirect('/');
});


app.get("/edit/:id", async (req, res) => {

    const taskValue = await Task.findOne({ _id: req.params.id })
    res.send(`
            <form method="post" id="submit-form" action="/edit/${taskValue._id}">
            <input type="text" name="task" id="task" value="${taskValue.title}" placeholder="Search"/>
            <input type="submit" value="Update">
            </form>
        `);

    // res.redirect("/");
});

app.post("/edit/:id", async (req, res) => {
    // todos[req.params.index] = req.body.task;
    // res.redirect('/');
    await Task.updateOne({ _id: req.params.id }, { title: req.body.task })
    res.redirect('/');
})

app.listen(port, () => {
    // console.log(`Example`);
})
