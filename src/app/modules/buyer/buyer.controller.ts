import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { buyerProductService } from './buyer.service';

const createBuyerProduct = catchAsinc(async (req, res) => {
  const result = await buyerProductService.createBuyerProduct(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Buyer created successfully',
    data: result,
  });
});
const getAllBuyerProduct = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await buyerProductService.getAllBuyerProduct();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Buyer Product retrive successfully',
    data: result,
  });
});
const getSingleBuyerProduct = catchAsinc(async (req, res) => {
  const { _id } = req.params;

  const result = await buyerProductService.getSingleBuyerProduct(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single buyer product created successfully',
    data: result,
  });
});

const updateBuyerProduct = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await buyerProductService.updateBuyerProduct(_id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Buyer Product updated successfully',
    data: result,
  });
});

export const buyerProductController = {
  createBuyerProduct,
  getAllBuyerProduct,
  getSingleBuyerProduct,
  updateBuyerProduct,
};
