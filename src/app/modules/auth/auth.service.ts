import httpStatus from 'http-status';
import AppError from '../../errors/AppErrors';
import { UsersModel } from '../user/user.model';
import { TLogin } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import bcrypt from 'bcrypt';

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

const changePassword = async (
  userData: JwtPayload,
  passwordData: { oldPassword: string; newPassword: string },
) => {
  const user = await UsersModel.isUserExistByCustomEmail(userData?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not found');
  }

  if (
    !(await UsersModel.isPasswordMatch(
      passwordData.oldPassword,
      user?.password,
    ))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password is not match');
  }
  //hash new passwor

  const hashNewPassword = await bcrypt.hash(
    passwordData.newPassword,
    Number(config.bcrypt_salt),
  );
  await UsersModel.findOneAndUpdate(
    {
      email: userData.email,
      role: userData.role,
    },
    {
      password: hashNewPassword,
      needsPasswordChange: false,
      passwordChangedAt: new Date(),
    },
  );
  return null;
};

export const loginService = {
  loginUser,
  changePassword,
};
