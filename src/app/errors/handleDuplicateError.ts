/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSourch, TGenericErrorResponse } from '../../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match & match[1];
  const errorSourch: TErrorSourch = [
    {
      path: '',
      message: `${extractedMessage} is duplicate`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Duplicate Error',
    errorSourch,
  };
};

export default handleDuplicateError;
