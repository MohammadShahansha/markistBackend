import httpStatus from 'http-status';
import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import { loginService } from './auth.service';

const loginUser = catchAsinc(async (req, res) => {
  const result = await loginService.loginUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successfull',
    data: result,
  });
});
const changePassword = catchAsinc(async (req, res) => {
  const { ...passwordData } = req.body;
  const result = await loginService.changePassword(req.user, passwordData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'password change successfull',
    data: result,
  });
});

export const loginController = {
  loginUser,
  changePassword,
};
