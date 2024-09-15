import { NextFunction, Request, Response } from 'express';
import { catchAsinc } from '../utils/catchAsinc';
import AppError from '../errors/AppErrors';
import httpStatus from 'http-status';

const auth = () => {
  return catchAsinc(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized person',
      );
    }
    next();
  });
};

export default auth;
