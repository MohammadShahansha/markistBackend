import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import AppError from '../../errors/AppErrors';

const userSchema = new Schema<TUser>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const isUserExist = await UserModel.findOne({
    email: this.email,
  });

  if (isUserExist) {
    throw new AppError(404, 'User is allready exist');
  }
  next();
});

export const UserModel = model<TUser>('user', userSchema);
