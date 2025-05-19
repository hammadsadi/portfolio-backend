import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";

/**
 *@Method POST
 * @Description Create User
 * @Return Token
 */
const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.userSaveToDB(req.body);

  res.cookie("portfolio_access_token", result.accessToken, {
    secure: false,
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User created successfully",
    data: { accessToken: result.accessToken },
  });
});

/**
 *@Method POST
 * @Description Login User
 * @Return Data
 */

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  res.cookie("portfolio_access_token", result.accessToken, {
    secure: false,
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User login success",
    data: { accessToken: result.accessToken },
  });
});

/**
 *@Method GET
 * @Description GET All User
 * @Return Data
 */
const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsers();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User Retrieved successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
  loginUser,
};
