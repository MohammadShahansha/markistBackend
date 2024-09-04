import express from 'express';
import { shoesController } from './shoes.controller';

const router = express.Router();
router.post('/create-shoes', shoesController.createShoes);
router.get('/get-shoes', shoesController.getAllShoes);
router.get('/single-shoe/:_id', shoesController.getSingleShoes);
router.delete('/delete-shoe/:_id', shoesController.deleteShoe);
router.put('/update-shoe/:_id', shoesController.updateShoe);

export const shoesRouter = router;
