import { TShoes } from './shoes.interface';
import { ShoesModel } from './shoes.model';

const createShoes = async (shoes: TShoes) => {
  const result = await ShoesModel.create(shoes);
  return result;
};

const getAllShoes = async () => {
  //searching----------

  //   const queryObj = { ...query };
  //   let searchTerm = '';
  //   if (query?.searchTerm) {
  //     searchTerm = query.searchTerm as string;
  //   }

  //   const searchQuery = BooksModel.find({
  //     $or: ['name', 'author'].map((feild) => ({
  //       [feild]: { $regex: searchTerm, $options: 'i' },
  //     })),
  //   });

  //filtering------------------------

  //   const excludeFeild = ['searchTerm', 'sort', 'limit'];
  //   excludeFeild.forEach((element) => delete queryObj[element]);
  //   const filterQuery = searchQuery.find(queryObj);

  //sortQuery---------------

  //   let sort = '-createdAt';
  //   if (query?.sort) {
  //     sort = query.sort as string;
  //   }
  //   const sortQuery = filterQuery.sort(sort);

  //limitQuery-------------
  //   let limit = 1;
  //   if (query?.limit) {
  //     limit = query.limit as number;
  //   }

  const result = await ShoesModel.find();

  return result;
};

const getSingleShoes = async (id: string) => {
  const result = await ShoesModel.findById(id);
  return result;
};
const deleteShoe = async (id: string) => {
  const result = await ShoesModel.findByIdAndDelete({ id });
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
