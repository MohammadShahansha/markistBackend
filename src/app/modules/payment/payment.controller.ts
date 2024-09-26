import httpStatus from 'http-status';
import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import { paymentService } from './payment.service';

const initiatPayment = catchAsinc(async (req, res) => {
  const { buyerId } = req.params;
  const result = await paymentService.initiatPayment(buyerId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'payment initiate successfully',
    data: result,
  });
});
const validatePayment = catchAsinc(async (req, res) => {
  const result = await paymentService.validatePayment(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'payment validate successfully',
    data: result,
  });
});

export const paymentController = {
  initiatPayment,
  validatePayment,
};
