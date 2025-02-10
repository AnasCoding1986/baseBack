import config from './app/config';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoute)

const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
}

app.get('/', getAController);

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

export default app;
