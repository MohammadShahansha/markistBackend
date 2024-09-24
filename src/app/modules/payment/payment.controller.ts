import httpStatus from 'http-status';
import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import { paymentService } from './payment.service';

const initiatPayment = catchAsinc(async (req, res) => {
  const result = await paymentService.initiatPayment();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'payment initiate successfully',
    data: result,
  });
});

export const paymentController = {
  initiatPayment,
};
