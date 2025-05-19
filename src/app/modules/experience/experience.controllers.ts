import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.services";

/**
 *@Method POST
 * @Description Create Experience
 * @Return Data
 */
const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.experienceSaveToDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Experience Created successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description GET ALL Experience
 * @Return Data
 */
const getAllExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceServices.experienceGetFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Experience Retrieved successfully",
    data: result,
  });
});

/**
 *@Method DELETE
 * @Description DELETE Single Experience
 * @Return Data
 */
const deleteSingleExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceServices.experienceDeleteFromDB(
    req.params.experienceId
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Experience Deleted successfully",
    data: result,
  });
});

/**
 *@Method PATCH
 * @Description Update Single Experience
 * @Return Data
 */
const updateSingleExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceServices.experienceUpdateFromDB(
    req.params.experienceId,
    req.body
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Experience Updated successfully",
    data: result,
  });
});

export const ExperienceControllers = {
  createExperience,
  getAllExperiences,
  deleteSingleExperiences,
  updateSingleExperiences,
};
