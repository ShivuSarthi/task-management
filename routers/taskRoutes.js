const express = require("express");
const auth = require("../middleware/auth.js");
const {
  getTask,
  addTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController.js");
const router = express.Router();

router.get("/", auth, getTask);
router.post("/", auth, addTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
