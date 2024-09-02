import express from 'express';
import { clothController } from './cloth.controller';

const router = express.Router();
router.post(
  '/create-cloth',
  // booksValidation.booksValidationSchema,
  clothController.createCloth,
);
router.get('/get-cloths', clothController.getAllCloths);
router.get('/single-cloth/:_id', clothController.getSingleCloth);
router.delete('/delete-cloth/:_id', clothController.deleteCloth);
router.put('/update-cloth/:_id', clothController.updateCloth);

export const clothRouter = router;
