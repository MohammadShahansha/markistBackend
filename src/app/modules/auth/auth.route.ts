import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { loginValidation } from './auth.validation';
import { loginController } from './auth.controller';
import auth from '../../middlewares/auth';
const router = express.Router();
router.post(
  '/login',
  validateRequest(loginValidation.loginValidationSchema),
  loginController.loginUser,
);
router.post(
  '/change-password',
  auth('admin', 'user'),
  validateRequest(loginValidation.passwordChangeValidationSchema),
  loginController.changePassword,
);

export const loginRouter = router;
