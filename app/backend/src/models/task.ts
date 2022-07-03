import connection from './connection';
import taskType from '../types/types/Task';
import { ResultSetHeader } from 'mysql2';

class TaskModel {
  public getAll = async (): Promise<taskType[]> => {
    const query = `SELECT * FROM Ebyrt.Tasks`;
    const [tasks] = await connection.execute(query);
    return tasks as taskType[];
  };

  public createTask = async (task: string, taskStatus: string): Promise<taskType> => {
    const query = `INSERT INTO Ebyrt.Tasks (task, taskStatus) VALUES(?,?)`;
    const [newTask] = await connection.execute<ResultSetHeader>(query, [task, taskStatus]);
    return {
      id: newTask.insertId,
      task,
      taskStatus,
    };
  };
}

export default TaskModel;
