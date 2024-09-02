import { model, Schema } from 'mongoose';
import { TCloth } from './cloth.interface';
const clothSchema = new Schema<TCloth>(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      enum: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// userSchema.pre('save', async function (next) {
//   const isUserExist = await UserModel.findOne({
//     email: this.email,
//   });

//   if (isUserExist) {
//     throw new AppError(404, 'User is allready exist');
//   }
//   next();
// });

export const ClothModel = model<TCloth>('cloth', clothSchema);
