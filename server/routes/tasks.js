const express = require("express");
const router = express.Router();

//Task model
const Task = require("../models/Task");

//GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Post new task

router.post("/", async (req, res) => {
  const task = new Task({ title: req.body.title, completed: false });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Put update task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.completed = !task.completed;
      const updateTask = await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      await task.remove();
      res.json({ message: "Task delete" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
