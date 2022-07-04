const taskModel = require('../models/task');

const getAll = async () => {
  const tasks = await taskModel.getAll();
  return tasks;
};

const createTask = async (task, taskStatus) => {
  const newTask = await taskModel.createTask(task, taskStatus);
  return newTask;
};

module.exports = {
  getAll,
  createTask,
};
