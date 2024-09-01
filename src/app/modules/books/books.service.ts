import { TBooks } from './books.interface';
import { BooksModel } from './books.model';

const createBooks = async (books: TBooks) => {
  const result = await BooksModel.create(books);
  return result;
};

const getAllBooks = async (query: Record<string, unknown>) => {
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }
  const result = await BooksModel.find({
    $or: ['name', 'author'].map((feild) => ({
      [feild]: { $regex: searchTerm, $options: 'i' },
    })),
  });
  return result;
};

const getSingleBook = async (id: string) => {
  const result = await BooksModel.findById(id);
  return result;
};
const deleteBook = async (_id: string) => {
  const result = await BooksModel.findByIdAndDelete({ _id });
  return result;
};
const updateBook = async (_id: string, booksData: TBooks) => {
  const result = await BooksModel.findByIdAndUpdate({ _id }, booksData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const booksService = {
  createBooks,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
