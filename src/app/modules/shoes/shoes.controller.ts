import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { shoesService } from './shoes.service';

const createShoes = catchAsinc(async (req, res) => {
  const result = await shoesService.createShoes(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Shoes created successfully',
    data: result,
  });
});
const getAllShoes = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await shoesService.getAllShoes();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Shoes retrive successfully',
    data: result,
  });
});
const getSingleShoes = catchAsinc(async (req, res) => {
  const { _id } = req.params;

  const result = await shoesService.getSingleShoes(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single shoes created successfully',
    data: result,
  });
});
const deleteShoe = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await shoesService.deleteShoe(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'shoe deleted successfully',
    data: result,
  });
});
const updateShoe = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await shoesService.updateShoe(_id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'shoes updated successfully',
    data: result,
  });
});

export const shoesController = {
  createShoes,
  getAllShoes,
  getSingleShoes,
  deleteShoe,
  updateShoe,
};
