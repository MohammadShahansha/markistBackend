import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { loginValidation } from './auth.validation';
import { loginController } from './auth.controller';
const router = express.Router();
router.post(
  '/login',
  validateRequest(loginValidation.loginValidationSchema),
  loginController.loginUser,
);

export const loginRouter = router;
