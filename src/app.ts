import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandlers from './app/middlewares/globalErrorHandler';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hellow Word');
});

app.use(globalErrorHandlers);
export default app;
