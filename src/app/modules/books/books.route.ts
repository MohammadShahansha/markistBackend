import express from 'express';
// import { booksValidation } from './books.validation';
import { booksController } from './books.controller';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post(
  '/create-book',
  // booksValidation.booksValidationSchema,
  auth('admin'),
  booksController.createBooks,
);
router.get('/get-books', auth('admin', 'user'), booksController.getAllBooks);
router.get(
  '/single-book/:_id',
  auth('admin', 'user'),
  booksController.getSingleBook,
);
router.delete('/delete-book/:_id', auth('admin'), booksController.deleteBook);
router.put('/update-book/:_id', auth('admin'), booksController.updateBook);

export const booksRouter = router;
