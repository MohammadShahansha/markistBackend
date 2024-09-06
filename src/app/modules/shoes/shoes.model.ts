import { Schema, model } from 'mongoose';
import { TShoes } from './shoes.interface';

const shoesSchema = new Schema<TShoes>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
    },
    model: {
      type: String,
    },
    style: {
      type: String,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    shoesImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ShoesModel = model<TShoes>('shoe', shoesSchema);
