import { TBooks } from './books.interface';
import { BooksModel } from './books.model';

const createBooks = async (books: TBooks) => {
  const result = await BooksModel.create(books);
  return result;
};

const getAllBooks = async (query: Record<string, unknown>) => {
  //searching----------
  const queryObj = { ...query };
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  const searchQuery = BooksModel.find({
    $or: ['name', 'author'].map((feild) => ({
      [feild]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  //filtering------------------------
  const excludeFeild = ['searchTerm', 'sort', 'limit', 'page'];
  excludeFeild.forEach((element) => delete queryObj[element]);

  console.log({ query }, { queryObj });

  const filterQuery = searchQuery.find(queryObj);

  //sortQuery---------------

  let sort = '-createdAt';
  if (query?.sort) {
    sort = query.sort as string;
  }
  const sortQuery = filterQuery.sort(sort);

  //limitQuery-------------

  let page = 1;
  let limit = 1;
  let skip = 0;

  if (query?.limit) {
    limit = query.limit as number;
  }

  if (query?.page) {
    page = Number(query?.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = paginateQuery.limit(limit);

  return limitQuery;
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
