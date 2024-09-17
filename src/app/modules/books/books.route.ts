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
router.get('/get-books', auth(), booksController.getAllBooks);
router.get('/single-book/:_id', booksController.getSingleBook);
router.delete('/delete-book/:_id', booksController.deleteBook);
router.put('/update-book/:_id', booksController.updateBook);

export const booksRouter = router;
