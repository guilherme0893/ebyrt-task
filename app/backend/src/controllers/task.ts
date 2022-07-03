import { Request, Response } from "express";
import TaskService from "../services/task";

class TaskController {
  public taskService = new TaskService()

  public getAll = async(_req: Request, res: Response) => {
    const tasks = await this.taskService.getAll();
    return res.status(200).json({tasks});
  }

  public createTask =async (req: Request, res: Response) => {
    const { task, taskStatus } = req.body;
    const newTask = await this.taskService.createTask(task, taskStatus);
    return res.status(201).json({newTask});
  }
}

export default TaskController;
