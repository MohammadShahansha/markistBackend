import { TShoes } from './shoes.interface';
import { ShoesModel } from './shoes.model';

const createShoes = async (shoes: TShoes) => {
  const result = await ShoesModel.create(shoes);
  return result;
};

const getAllShoes = async () => {
  const result = await ShoesModel.find();

  return result;
};

const getSingleShoes = async (id: string) => {
  const result = await ShoesModel.findById(id);
  return result;
};
const deleteShoe = async (_id: string) => {
  const result = await ShoesModel.findByIdAndDelete({ _id });
  return result;
};
const updateShoe = async (_id: string, shoesData: TShoes) => {
  const result = await ShoesModel.findByIdAndUpdate({ _id }, shoesData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const shoesService = {
  createShoes,
  getAllShoes,
  getSingleShoes,
  deleteShoe,
  updateShoe,
};
