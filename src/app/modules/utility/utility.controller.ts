import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { utilsService } from './utility.service';

const createUtil = catchAsinc(async (req, res) => {
  const result = await utilsService.createUtil(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'utils created successfully',
    data: result,
  });
});
const getAllUtil = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await utilsService.getAllUtil();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Utils retrive successfully',
    data: result,
  });
});
const getSingleUtil = catchAsinc(async (req, res) => {
  const { _id } = req.params;

  const result = await utilsService.getSingleUtil(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single utils retrived successfully',
    data: result,
  });
});
const deleteUtil = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await utilsService.deleteUtil(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Utils deleted successfully',
    data: result,
  });
});
const updateUtil = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await utilsService.updateUtil(_id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'utils updated successfully',
    data: result,
  });
});

export const utilsController = {
  createUtil,
  getAllUtil,
  getSingleUtil,
  deleteUtil,
  updateUtil,
};
