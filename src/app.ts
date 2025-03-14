import config from './app/config';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrHandlingFn from './app/middlewire/globalErrHandler';
import notFound from './app/middlewire/notFound';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', test);

// Error-handling middleware should be added without any path argument
app.use(globalErrHandlingFn);

app.use(notFound);

export default app;
