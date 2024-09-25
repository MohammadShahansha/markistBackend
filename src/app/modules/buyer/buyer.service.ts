import { TBuyer } from './buyer.interface';
import { BuyerModel } from './buyer.model';

const createBuyerProduct = async (buyer: TBuyer) => {
  const today = new Date();
  const transectionId =
    'Markist-Shop' +
    today.getFullYear() +
    '-' +
    today.getMonth() +
    '-' +
    today.getHours() +
    '-' +
    today.getMinutes() +
    '-' +
    today.getSeconds();
  const buyerData = await BuyerModel.create(buyer);

  buyerData.transectionId = transectionId;

  await buyerData.save();
  return buyerData;
};

const getAllBuyerProduct = async () => {
  const result = await BuyerModel.find()
    .populate('productId')
    .select('+transectionId');

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
export const buyerProductService = {
  createBuyerProduct,
  getAllBuyerProduct,
  getSingleBuyerProduct,
  updateBuyerProduct,
};
