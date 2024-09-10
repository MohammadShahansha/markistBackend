import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUser = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};
const getAllUser = async () => {
  const result = await UserModel.find();

  return result;
};
export const userService = {
  createUser,
  getAllUser,
};
