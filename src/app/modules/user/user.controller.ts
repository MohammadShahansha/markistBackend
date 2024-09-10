import httpStatus from 'http-status';
import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import { userService } from './user.service';

const createUser = catchAsinc(async (req, res) => {
  const result = await userService.createUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllUser = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await userService.getAllUser();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrive successfully',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
};
