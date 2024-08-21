import { Request, Response } from 'express';
import { booksService } from './books.service';

const createBooks = async (req: Request, res: Response) => {
  try {
    const result = await booksService.createBooks(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Books created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await booksService.getAllBooks();
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Books retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleBook = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await booksService.getSingleBook(_id);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Single Books retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteBook = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    await booksService.deleteBook(_id);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Book deleted successfully',
      //   data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateBook = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await booksService.updateBook(_id, req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Books updated successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const booksController = {
  createBooks,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
