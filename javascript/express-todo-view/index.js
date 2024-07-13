const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/task-management').then(()=>console.log("Database Connected")).catch((err)=>console.log(err));

const taskSchema = new mongoose.Schema({
    title: String,
    description: String
});

mongoose.model('task', taskSchema);

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, ()=>{
    console.log(`Server is running on http:/localhost:${port}`);
})