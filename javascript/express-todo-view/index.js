const express = require("express");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const connectDb = require("./config/db");
const app = express();
const port = 3000;

connectDb();
app.set("view engine", "ejs");
app.use(express.urlencoded());

//task routes
app.use("/task", taskRoutes);
//auth routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
});
