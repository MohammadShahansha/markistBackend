import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import { catchAsinc } from '../utils/catchAsinc';
const validateRequest = (schema: AnyZodObject) => {
  return catchAsinc(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body,
      cookies: req.cookies,
    });

    next();
  });
};

export default validateRequest;
