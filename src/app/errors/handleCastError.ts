import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSourch = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Id',
    errorSourch,
  };
};

export default handleCastError;
