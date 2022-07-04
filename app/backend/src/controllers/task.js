const taskService = require('../services/task');

const getAll = async (_req, res) => {
  const tasks = await taskService.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const { task, taskStatus } = req.body;
  const newTask = await taskService.createTask(task, taskStatus);
  return res.status(201).json(newTask);
};

module.exports = {
  getAll,
  createTask,
};
