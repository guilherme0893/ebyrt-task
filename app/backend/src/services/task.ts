import TaskModel from "../models/task";
import taskType from "../types/types/Task";

class TaskService { 
  public taskModel = new TaskModel();

  public getAll = async(): Promise<taskType[]> => {
    const tasks = await this.taskModel.getAll();
    return tasks;
  }

  public createTask = async(task: string, taskStatus: string): Promise<taskType> => {
    const newTask = await this.taskModel.createTask(task, taskStatus);
    return newTask;
  }
}

export default TaskService;
