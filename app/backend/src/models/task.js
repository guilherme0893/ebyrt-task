const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT * FROM Ebyrt.Tasks`;
  const [tasks] = await connection.execute(query);
  return tasks;
};

const createTask = async ({ task, taskStatus} ) => {
  const query = `INSERT INTO Ebyrt.Tasks (task, taskStatus) VALUES(?,?)`;
  const [newTask] = await connection.execute(query, [task, taskStatus]);
  const newTaskCreated = {
    id: task.insertId,
    task,
    taskStatus,
  }
  return newTaskCreated;
};

module.exports = {
  getAll,
  createTask,
};
