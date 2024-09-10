import { TUser } from './user.interface';
import { UsersModel } from './user.model';

const createUser = async (user: TUser) => {
  const result = await UsersModel.create(user);
  return result;
};
const getAllUser = async () => {
  const result = await UsersModel.find();

  return result;
};
export const userService = {
  createUser,
  getAllUser,
};
