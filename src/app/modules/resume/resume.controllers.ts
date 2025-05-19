import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MessageServices } from "../message/message.services";
import { ResumeServices } from "./resume.services";

/**
 *@Method POST
 * @Description Resume Create
 * @Return Data
 */
const createResume = catchAsync(async (req, res) => {
  const result = await ResumeServices.createResumeToDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Resume Created successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description Get All Resume
 * @Return Data
 */
const getAllResume = catchAsync(async (req, res) => {
  const result = await ResumeServices.getAllResumeFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Resume Retrieved successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description Get Active Resume
 * @Return Data
 */
const getActiveResume = catchAsync(async (req, res) => {
  const result = await ResumeServices.getActiveResumeFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Resume Retrieved successfully",
    data: result,
  });
});

/**
 *@Method DELETE
 * @Description Delete Single Resume
 * @Return Data
 */
const deleteSingleResume = catchAsync(async (req, res) => {
  const result = await ResumeServices.deleteResumeFromDB(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Resume Deleted successfully",
    data: result,
  });
});

export const ResumeControllers = {
  createResume,
  getAllResume,
  getActiveResume,
  deleteSingleResume,
};
