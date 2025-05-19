import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.services";

/**
 *@Method POST
 * @Description Create Project
 * @Return Data
 */
const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.projectSaveToDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project Created successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description GET All Project
 * @Return Data
 */
const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project Retrieved successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description GET Single Project
 * @Return Data
 */
const getSingleProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getSingleProjectFromDB(req.params.slug);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project Retrieved successfully",
    data: result,
  });
});

/**
 *@Method PATCH
 * @Description Update Single Project
 * @Return Data
 */
const updateSingleProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateSingleProjectFromDB(
    req.params.projectId,
    req.body
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project Updated successfully",
    data: result,
  });
});

/**
 *@Method DELETE
 * @Description Delete Single Project
 * @Return Data
 */
const deleteSingleProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.deleteSingleProjectFromDB(
    req.params.projectId
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project Deleted successfully",
    data: result,
  });
});

export const ProjectControllers = {
  deleteSingleProjects,
  createProject,
  getAllProjects,
  getSingleProjects,
  updateSingleProjects,
};
