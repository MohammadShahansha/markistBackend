import { booksService } from './books.service';
import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createBooks = catchAsinc(async (req, res) => {
  const result = await booksService.createBooks(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books created successfully',
    data: result,
  });
});
const getAllBooks = catchAsinc(async (req, res) => {
  const result = await booksService.getAllBooks();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrive successfully',
    data: result,
  });
});
const getSingleBook = catchAsinc(async (req, res) => {
  const { _id } = req.params;

  const result = await booksService.getSingleBook(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Books created successfully',
    data: result,
  });
});
const deleteBook = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await booksService.deleteBook(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});
const updateBook = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await booksService.updateBook(_id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

export const booksController = {
  createBooks,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
