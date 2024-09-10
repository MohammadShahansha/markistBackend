import httpStatus from 'http-status';
import AppError from '../../errors/AppErrors';
import { UserModel } from '../user/user.model';
import { TLogin } from './auth.interface';

const loginUser = async (payload: TLogin) => {
  console.log(payload);
  const isUserExist = await UserModel.findOne({ email: payload?.email });
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not found');
  }
};

export const loginService = {
  loginUser,
};
