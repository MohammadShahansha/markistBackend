import { Schema, model } from 'mongoose';
import { TUtil } from './utility.interface';

const utilSchema = new Schema<TUtil>(
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
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    model: {
      type: String,
    },
    style: {
      type: String,
    },
    color: {
      type: String,
    },
    brand: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const UtilModel = model<TUtil>('util', utilSchema);
