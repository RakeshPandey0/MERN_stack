const express = require("express");
const session = require("express-session");

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const connectDb = require("./config/db");
const MongoStore = require("connect-mongo");
const app = express();
const port = 3000;

connectDb();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(session({
  secret: "123456",
  resave: false,
  store: MongoStore.create({mongoUrl: "mongodb://localhost:27017/task-management"}),
  saveUninitialized: false,
  cookie: {maxAge: 1000*60*60*24}
}));

//task routes
app.use("/task", taskRoutes);
//auth routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
});
