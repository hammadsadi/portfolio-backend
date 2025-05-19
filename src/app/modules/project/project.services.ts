import { Project } from "@prisma/client";
import prisma from "../../shared/prisma";
import slugGenerator from "../../utils/slugGenerator";

// Project  Save To DB
const projectSaveToDB = async (payload: Project) => {
  //  Modified Data
  const modifiedData = {
    ...payload,
    slug: slugGenerator(payload.title),
  };
  const result = await prisma.project.create({
    data: modifiedData,
  });
  return result;
};

// Get All Projects
const getAllProjectsFromDB = async () => {
  const result = await prisma.project.findMany();

  return result;
};

// Get Single Project
const getSingleProjectFromDB = async (slug: string) => {
  const result = await prisma.project.findFirst({
    where: {
      slug,
    },
  });

  return result;
};

// Update Single Project
const updateSingleProjectFromDB = async (
  id: string,
  payload: Partial<Project>
) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

// Delete Single Project
const deleteSingleProjectFromDB = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });

  return result;
};
export const ProjectServices = {
  projectSaveToDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateSingleProjectFromDB,
  deleteSingleProjectFromDB,
};
