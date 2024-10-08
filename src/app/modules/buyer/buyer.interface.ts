import { Types } from 'mongoose';

export type TBuyer = {
  name: string;
  quantity: number;
  address: string;
  phone: string;
  date: Date;
  transectionId: string;
  productId: Types.ObjectId;
  productType: 'cloth' | 'shoe' | 'book' | 'util';
};
