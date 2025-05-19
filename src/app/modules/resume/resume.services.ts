import { Resume } from "@prisma/client";
import prisma from "../../shared/prisma";

//  Resume Save to DB
const createResumeToDB = async (payload: Resume): Promise<Resume | null> => {
  const result = await prisma.resume.create({
    data: payload,
  });
  return result;
};

// Resume Get from DB
const getAllResumeFromDB = async () => {
  const result = await prisma.resume.findMany();
  return result;
};

// Get Single Resume
const getActiveResumeFromDB = async () => {
  const result = await prisma.resume.findFirst({
    where: {
      isActive: true,
    },
  });
  return result;
};

// delete Resume
const deleteResumeFromDB = async (id: string) => {
  const result = await prisma.resume.delete({
    where: {
      id,
    },
  });
  return result;
};
export const ResumeServices = {
  createResumeToDB,
  deleteResumeFromDB,
  getAllResumeFromDB,
  getActiveResumeFromDB,
};
