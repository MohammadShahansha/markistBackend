import express from 'express';
// import { booksValidation } from './books.validation';
import { booksController } from './books.controller';

const router = express.Router();
router.post(
  '/create-book',
  // booksValidation.booksValidationSchema,
  booksController.createBooks,
);
router.get('/get-books', booksController.getAllBooks);
router.get('/single-book/:_id', booksController.getSingleBook);
router.delete('/delete-book/:_id', booksController.deleteBook);
router.put('/update-book/:_id', booksController.updateBook);

export const booksRouter = router;
