/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSourch } from '../../interface/error';
import config from '../config';

const globalErrorHandlers: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = err.message || 'Something went wrong';

  let errorSourch: TErrorSourch = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

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

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSourch = simplifiedError?.errorSourch;
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSourch,
    stack: config.node_env === 'development' ? err.stack : null,
  });
};

export default globalErrorHandlers;
