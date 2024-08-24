export type TUser = {
  userName: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'admin' | 'user';
  isDeleted: boolean;
};
