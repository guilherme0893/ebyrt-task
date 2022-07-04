const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM Ebyrt.tasks';
  const [tasks] = await connection.execute(query);
  return tasks;
};

const createTask = async (task, taskStatus) => {
  const query = 'INSERT INTO Ebyrt.tasks (task, taskStatus) VALUES (?,?)';
  const [newTask] = await connection.execute(query, [task, taskStatus]);
  return {
    id: newTask.insertId,
    task,
    taskStatus,
  };
};

module.exports = {
  getAll,
  createTask,
};
