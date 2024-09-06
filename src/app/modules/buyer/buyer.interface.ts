import { Types } from 'mongoose';

export type TBuyer = {
  name: string;
  quantity: number;
  address: string;
  phone: string;
  date: Date;
  productId: Types.ObjectId;
};
