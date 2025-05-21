import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";
import { Request, Response } from "express";
import { ILoggedInUser } from "../../interfaces";

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
 *@Method PATCH
 * @Description Update User
 * @Return Data
 */

const userDataUpdate = catchAsync(
  async (req: Request & { user?: ILoggedInUser }, res: Response) => {
    const { id } = req.user as ILoggedInUser;
    const result = await UserServices.updateUser(id, req.body);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "User Updated Successful",
      data: result,
    });
  }
);

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

/**
 *@Method GET
 * @Description GET LoggedIn User
 * @Return Data
 */

const getMeController = catchAsync(
  async (req: Request & { user?: ILoggedInUser }, res: Response) => {
    if (!req.user) {
      throw new Error("User is required");
    }
    const { email } = req.user;
    const result = await UserServices.getMeFromDb(email);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "User fetched successfully",
      data: result,
    });
  }
);

export const UserControllers = {
  createUser,
  getAllUsers,
  loginUser,
  userDataUpdate,
  getMeController,
};
