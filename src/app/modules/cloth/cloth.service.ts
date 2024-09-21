import { TCloth } from './cloth.interface';
import { ClothModel } from './cloth.model';

const createCloth = async (cloth: TCloth) => {
  const result = await ClothModel.create(cloth);
  return result;
};

const getAllCloth = async () => {
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

  const result = await ClothModel.find();

  return result;
};

const getSingleCloth = async (id: string) => {
  const result = await ClothModel.findById(id);
  return result;
};
const deleteCloth = async (_id: string) => {
  const result = await ClothModel.findByIdAndDelete({ _id });
  return result;
};
const updateCloth = async (_id: string, clothData: TCloth) => {
  const result = await ClothModel.findByIdAndUpdate({ _id }, clothData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const clothService = {
  createCloth,
  getAllCloth,
  getSingleCloth,
  deleteCloth,
  updateCloth,
};
