import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';

const router = express.Router();
router.post(
  '/create-user',
  validateRequest(userValidationSchema),
  userController.createUser,
);

export const userRouter = router;
