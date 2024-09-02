import express from 'express';
import { booksRouter } from '../modules/books/books.route';
import { userRouter } from '../modules/user/user.route';
import { clothRouter } from '../modules/cloth/cloth.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/books',
    route: booksRouter,
  },
  {
    path: '/cloth',
    route: clothRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
