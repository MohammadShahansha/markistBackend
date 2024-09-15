import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post(
  '/create-user',
  validateRequest(userValidationSchema),
  userController.createUser,
);

router.get('/get-user', auth(), userController.getAllUser);

export const userRouter = router;
