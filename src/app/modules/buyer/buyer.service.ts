import { TBuyer } from './buyer.interface';
import { BuyerModel } from './buyer.model';

const createBuyerProduct = async (buyer: TBuyer) => {
  const result = await BuyerModel.create(buyer);
  return result;
};

const getAllBuyerProduct = async () => {
  const result = await BuyerModel.find();

  return result;
};

const getSingleBuyerProduct = async (id: string) => {
  const result = await BuyerModel.findById(id);
  return result;
};

const updateBuyerProduct = async (_id: string, byuerProductData: TBuyer) => {
  const result = await BuyerModel.findByIdAndUpdate({ _id }, byuerProductData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const clothService = {
  createBuyerProduct,
  getAllBuyerProduct,
  getSingleBuyerProduct,
  updateBuyerProduct,
};
