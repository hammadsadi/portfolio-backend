import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { EducationServices } from "./education.services";

/**
 *@Method POST
 * @Description Create Education
 * @Return Data
 */
const createEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.educationSaveToDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education Created successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description GET ALL Education
 * @Return Data
 */
const getAllEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.educationGetFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education Retrieved successfully",
    data: result,
  });
});

/**
 *@Method DELETE
 * @Description DELETE Single Education
 * @Return Data
 */
const deleteSingleEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.educationDeleteFromDB(
    req.params.educationId
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education Deleted successfully",
    data: result,
  });
});

/**
 *@Method PATCH
 * @Description Update Single Education
 * @Return Data
 */
const updateSingleEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.educationUpdateFromDB(
    req.params.educationId,
    req.body
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education Updated successfully",
    data: result,
  });
});

export const EducationControllers = {
  createEducation,
  getAllEducation,
  deleteSingleEducation,
  updateSingleEducation,
};
