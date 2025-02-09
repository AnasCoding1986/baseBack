import config from './app/config';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

export default app;
