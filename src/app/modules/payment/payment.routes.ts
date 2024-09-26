import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();
router.get('/ipn', paymentController.validatePayment);
router.post('/initiate-payment/:buyerId', paymentController.initiatPayment);
export const paymentRoute = router;
