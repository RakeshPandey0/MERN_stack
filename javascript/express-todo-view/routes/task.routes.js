const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.post("/add", taskController.addTask);
router.get("/", taskController.getTasks);
router.post("/delete/:id", taskController.deleteTask);
router.get("/edit/:id", taskController.editTask);
router.post("/edit/:id", taskController.updateTask);

module.exports = router;