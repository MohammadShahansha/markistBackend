import { ZodError, ZodIssue } from 'zod';
import { TErrorSourch } from '../../interface/error';

const handleZodError = (err: ZodError) => {
  const errorSourch: TErrorSourch = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSourch,
  };
};

export default handleZodError;
