const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();
const protect = require("../middleware/protect.middleware");

router.post("/add",protect, taskController.addTask);
router.get("/",protect, taskController.getTasks);
router.post("/delete/:id",protect, taskController.deleteTask);
router.get("/edit/:id",protect, taskController.editTask);
router.post("/edit/:id",protect, taskController.updateTask);

module.exports = router;