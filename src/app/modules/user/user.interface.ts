/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
  userName: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'admin' | 'user';
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  isUserExistByCustomEmail(email: string): Promise<TUser>;
  isPasswordMatch(
    plainTextPassword: string,
    hashTextPassword: string,
  ): Promise<boolean>;
}
