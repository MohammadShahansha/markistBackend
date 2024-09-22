import express from 'express';
import { shoesController } from './shoes.controller';
import validateRequest from '../../middlewares/validateRequest';
import { shoesValidation } from './shoes.validation';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post(
  '/create-shoes',
  validateRequest(shoesValidation.shoesValidationSchema),
  auth('admin'),
  shoesController.createShoes,
);
router.get('/get-shoes', shoesController.getAllShoes);
router.get('/single-shoe/:_id', shoesController.getSingleShoes);
router.delete('/delete-shoe/:_id', auth('admin'), shoesController.deleteShoe);
router.put('/update-shoe/:_id', auth('admin'), shoesController.updateShoe);

export const shoesRouter = router;
