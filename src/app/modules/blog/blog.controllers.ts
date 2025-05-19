import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { EducationServices } from "../education/education.services";
import { BlogServices } from "./blog.services";
import { Request, Response } from "express";
import { ILoggedInUser } from "../../interfaces";

/**
 *@Method POST
 * @Description Create Blog
 * @Return Data
 */
const createBlog = catchAsync(
  async (req: Request & { user?: ILoggedInUser }, res: Response) => {
    const { id } = req.user as ILoggedInUser;
    const result = await BlogServices.blogSaveToDB(id, req.body);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Blog Created successfully",
      data: result,
    });
  }
);

/**
 *@Method Get
 * @Description Get Blogs
 * @Return Data
 */
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getAllBlogs();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog Retrieved successfully",
    data: result,
  });
});

/**
 *@Method Get
 * @Description Get Single Blogs
 * @Return Data
 */
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getSingleBlogs(req.params.slug);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog Retrieved successfully",
    data: result,
  });
});

/**
 *@Method PATCH
 * @Description UPDATE Single Blogs
 * @Return Data
 */
const updateSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.updateBlog(req.params.blogId, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog Updated successfully",
    data: result,
  });
});

/**
 *@Method Delete
 * @Description Delete Single Blogs
 * @Return Data
 */
const deleteSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.deleteBlogFromDB(req.params.blogId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog Deleted successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateSingleBlog,
  deleteSingleBlog,
};
