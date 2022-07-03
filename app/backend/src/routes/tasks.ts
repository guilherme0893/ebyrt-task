import express from 'express';
import TaskController from '../controllers/task';

class TaskRouter {
  public taskController = new TaskController()

  task(app: express.Application) {
    app.get(
      '/',
      (req, res) => this.taskController.getAll(req, res),
    );
    app.post(
      '/',
      (req, res) => this.taskController.createTask(req, res),
    );
  }
}

export default TaskRouter;
