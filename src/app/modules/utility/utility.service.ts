import { TUtil } from './utility.interface';
import { UtilModel } from './utility.model';

const createUtil = async (util: TUtil) => {
  const result = await UtilModel.create(util);
  return result;
};

const getAllUtil = async () => {
  const result = await UtilModel.find();

  return result;
};

const getSingleUtil = async (id: string) => {
  const result = await UtilModel.findById(id);
  return result;
};
const deleteUtil = async (id: string) => {
  const result = await UtilModel.findByIdAndDelete({ id });
  return result;
};
const updateUtil = async (_id: string, utilsData: TUtil) => {
  const result = await UtilModel.findByIdAndUpdate({ _id }, utilsData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const utilsService = {
  createUtil,
  getAllUtil,
  getSingleUtil,
  deleteUtil,
  updateUtil,
};
