import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { booksRouter } from './app/modules/books/books.route';
const app: Application = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', booksRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hellow Word');
});

export default app;
