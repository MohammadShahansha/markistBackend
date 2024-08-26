import mongoose from 'mongoose';

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSourch = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSourch,
  };
};

export default handleValidationError;
