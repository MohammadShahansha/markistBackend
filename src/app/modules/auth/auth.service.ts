import httpStatus from 'http-status';
import AppError from '../../errors/AppErrors';
import { UsersModel } from '../user/user.model';
import { TLogin } from './auth.interface';
import jwt from 'jsonwebtoken';
import config from '../../config';

const loginUser = async (payload: TLogin) => {
  const user = await UsersModel.isUserExistByCustomEmail(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not found');
  }

  if (!(await UsersModel.isPasswordMatch(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password is not match');
  }

  const jswPayload = {
    email: user?.email,
    role: user?.role,
  };
  const accessToken = jwt.sign(jswPayload, config.jwt_access_token as string, {
    expiresIn: '10d',
  });
  return {
    accessToken,
    needsPasswordChange: user?.needsPasswordChange,
  };
};

const changePassword = () => {};

export const loginService = {
  loginUser,
  changePassword,
};
