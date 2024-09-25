import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();
router.post('/initiate-payment/:buyerId', paymentController.initiatPayment);
export const paymentRoute = router;
