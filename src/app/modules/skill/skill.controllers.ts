import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.services";

/**
 *@Method POST
 * @Description Create Skill
 * @Return Data
 */
const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.skillSaveToDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description Get All Skill
 * @Return Token
 */
const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.skillGetFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill Retrieved successfully",
    data: result,
  });
});

/**
 *@Method DELETE
 * @Description Delete Single Skill
 * @Return Token
 */
const deleteSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.skillDeleteFromDB(req.params.skillId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill Deleted successfully",
    data: result,
  });
});

export const SkillControllers = { createSkill, getAllSkills, deleteSkill };
