import axios from 'axios';
import config from '../../config';
import AppError from '../../errors/AppErrors';
import httpStatus from 'http-status';
type TPaymentData = {
  totalPrice: number;
  transectionId: string;
  productName: string;
  productCategory: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
};
const initPayment = async (paymentData: TPaymentData) => {
  try {
    const data = {
      store_id: config.ssl.storeId,
      store_passwd: config.ssl.storePassword,
      total_amount: paymentData.totalPrice,
      currency: 'BDT',
      tran_id: paymentData.transectionId, // use unique tran_id for each api call
      success_url: config.ssl.success_url,
      fail_url: config.ssl.fail_rul,
      cancel_url: config.ssl.cancel_url,
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'N/A',
      product_name: paymentData.productName,
      product_category: paymentData.productCategory,
      product_profile: 'general',
      cus_name: paymentData.customerName,
      cus_email: 'customer@example.com',
      cus_add1: paymentData.customerAddress,
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: paymentData.customerPhone,
      cus_fax: '01711111111',
      ship_name: 'N/A',
      ship_add1: 'N/A',
      ship_add2: 'N/A',
      ship_city: 'N/A',
      ship_state: 'N/A',
      ship_postcode: 1000,
      ship_country: 'N/A',
    };
    const response = await axios({
      method: 'post',
      url: config.ssl.ssl_payment_api,
      data: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (err: any) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Payment occure error');
  }
};

export const SSLService = {
  initPayment,
};
