import express from 'express';
import { buyerProductController } from './buyer.controller';

const router = express.Router();
router.post(
  '/create',
  // booksValidation.booksValidationSchema,
  buyerProductController.createBuyerProduct,
);
router.get('/get', buyerProductController.getAllBuyerProduct);
router.get('/single/:_id', buyerProductController.getSingleBuyerProduct);
router.put('/update/:_id', buyerProductController.updateBuyerProduct);

export const buyerProductRouter = router;
