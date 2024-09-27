import axios from 'axios';
import { BuyerModel } from '../buyer/buyer.model';
import { SSLService } from '../SSL/ssl.service';
import config from '../../config';
const initiatPayment = async (_id: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paymentData: any = await BuyerModel.findById(_id).populate('productId');
  const totalPrice =
    Number(paymentData?.productId?.price) * Number(paymentData?.quantity);
  // console.log(totalPrice);
  // console.log('paymentData', paymentData);
  const initPaymentData = {
    totalPrice: totalPrice,
    transectionId: paymentData.transectionId,
    productName: paymentData.productId.name,
    productCategory: paymentData.productType,
    customerName: paymentData.name,
    customerAddress: paymentData.address,
    customerPhone: paymentData.phone,
  };

  const result = await SSLService.initPayment(initPaymentData);
  return {
    paymentUrl: result.GatewayPageURL,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatePayment = async (payload: any) => {
  if (!payload || !payload.status || !(payload.status === 'VALID')) {
    return {
      message: 'invalid payment',
    };
  }

  // const response = await axios({
  //   method: 'GET',
  //   url: `${config.ssl.ssl_payment_api}?val_id=${payload.val_id}&store_id=${config.ssl.storeId}&store_passwd=${config.ssl.storePassword}&format=json`,
  // });
};

export const paymentService = {
  initiatPayment,
  validatePayment,
};
