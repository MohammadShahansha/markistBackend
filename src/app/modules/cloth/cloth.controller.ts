import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { clothService } from './cloth.service';

const createCloth = catchAsinc(async (req, res) => {
  const result = await clothService.createCloth(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cloth created successfully',
    data: result,
  });
});
const getAllCloths = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await clothService.getAllCloth();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cloth retrive successfully',
    data: result,
  });
});
const getSingleCloth = catchAsinc(async (req, res) => {
  const { _id } = req.params;

  const result = await clothService.getSingleCloth(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single cloth created successfully',
    data: result,
  });
});
const deleteCloth = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await clothService.deleteCloth(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cloth deleted successfully',
    data: result,
  });
});
const updateCloth = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await clothService.updateCloth(_id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cloth updated successfully',
    data: result,
  });
});

export const clothController = {
  createCloth,
  getAllCloths,
  getSingleCloth,
  deleteCloth,
  updateCloth,
};
