import express from 'express';
import { clothController } from './cloth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { clothValidationSchema } from './cloth.validation';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post(
  '/create-cloth',
  validateRequest(clothValidationSchema.originalClothlothValidationSchema),
  auth('admin'),
  clothController.createCloth,
);
router.get('/get-cloths', auth('admin', 'user'), clothController.getAllCloths);
router.get(
  '/single-cloth/:_id',
  auth('admin', 'user'),
  clothController.getSingleCloth,
);
router.delete('/delete-cloth/:_id', auth('admin'), clothController.deleteCloth);
router.put('/update-cloth/:_id', auth('admin'), clothController.updateCloth);

export const clothRouter = router;
