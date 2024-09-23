import express from 'express';
import { buyerProductController } from './buyer.controller';
import validateRequest from '../../middlewares/validateRequest';
import { buyerValidationSchema } from './buyer.validation';

const router = express.Router();
router.post(
  '/create',
  validateRequest(buyerValidationSchema),
  buyerProductController.createBuyerProduct,
);
router.get('/get', buyerProductController.getAllBuyerProduct);
router.get('/single/:_id', buyerProductController.getSingleBuyerProduct);
router.put('/update/:_id', buyerProductController.updateBuyerProduct);

export const buyerProductRouter = router;
