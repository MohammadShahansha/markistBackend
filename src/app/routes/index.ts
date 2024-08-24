import express from 'express';
import { booksRouter } from '../modules/books/books.route';
import { userRouter } from '../modules/user/user.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
