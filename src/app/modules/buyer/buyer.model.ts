import { Schema, model } from 'mongoose';
import { TBuyer } from './buyer.interface';

const buyerSchema = new Schema<TBuyer>({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'cloth' || 'shoe' || 'book' || 'util',
  },
});
export const BuyerModel = model<TBuyer>('buyer', buyerSchema);
