import express from 'express';
import { utilsController } from './utility.controller';
import validateRequest from '../../middlewares/validateRequest';
import { utilsValidation } from './utility.validation';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post(
  '/create-util',
  validateRequest(utilsValidation.updateUtilsValidationSchema),
  auth('admin'),
  utilsController.createUtil,
);
router.get('/get-util', utilsController.getAllUtil);
router.get('/single-util/:_id', utilsController.getSingleUtil);
router.delete('/delete-util/:_id', utilsController.deleteUtil);
router.put('/update-util/:_id', utilsController.updateUtil);

export const utilsRouter = router;
