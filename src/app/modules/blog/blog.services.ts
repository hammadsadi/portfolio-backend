import { Blog } from "@prisma/client";
import slugGenerator from "../../utils/slugGenerator";
import prisma from "../../shared/prisma";

// Blog Save to DB
const blogSaveToDB = async (authorId: string, payload: Blog) => {
  const modifiedData = {
    ...payload,
    slug: slugGenerator(payload.title),
    authorId,
  };

  //   Check Blog Exist
  const isExistBlog = await prisma.blog.findFirst({
    where: {
      slug: modifiedData.slug,
    },
  });
  if (isExistBlog) {
    throw new Error("Blog Already Exist");
  }

  const result = await prisma.blog.create({
    data: modifiedData,
  });
  return result;
};

//  Get All Blogs
const getAllBlogs = async () => {
  const result = await prisma.blog.findMany({
    include: {
      comment: true,
      like: true,
      user: true,
    },
  });
  return result;
};

//  Get Single Blog
const getSingleBlogs = async (slug: string) => {
  const result = await prisma.blog.findFirst({
    where: {
      slug: slug,
    },
    include: {
      comment: true,
      like: true,
      user: true,
    },
  });
  return result;
};

//  Update Blog
const updateBlog = async (id: string, payload: Partial<Blog>) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

//  Delete Blog
const deleteBlogFromDB = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};
export const BlogServices = {
  blogSaveToDB,
  getAllBlogs,
  getSingleBlogs,
  updateBlog,
  deleteBlogFromDB,
};
