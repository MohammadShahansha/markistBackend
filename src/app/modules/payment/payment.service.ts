import { BuyerModel } from '../buyer/buyer.model';
import { SSLService } from '../SSL/ssl.service';
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

export const paymentService = {
  initiatPayment,
};
