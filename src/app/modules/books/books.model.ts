import { model, Schema } from 'mongoose';
import { TBooks } from './books.interface';

const booksSchema = new Schema<TBooks>({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export const BooksModel = model<TBooks>('book', booksSchema);
