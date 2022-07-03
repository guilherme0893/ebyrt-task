import express, { Request, Response } from 'express';
import TaskRouter from './routes/tasks';
import cors from 'cors';

// const app = express();

// app.use(express.json());

// app.get('/', (_request: Request, response: Response) =>
//   response.send({ status: 'I am alive!' }));

// export default app;

class App {
  public app: express.Express;
  public task = new TaskRouter();

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(accessControl);
    this.task.task(this.app);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT);
    console.log(PORT);
  }
}

export { App };
