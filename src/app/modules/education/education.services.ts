import { Education } from "@prisma/client";
import prisma from "../../shared/prisma";

// Education  Save To DB
const educationSaveToDB = async (payload: Education) => {
  const result = await prisma.education.create({
    data: payload,
  });
  return result;
};

// Get All Education From DB
const educationGetFromDB = async () => {
  const result = await prisma.education.findMany();
  return result;
};

// Delete Education From DB
const educationDeleteFromDB = async (id: string) => {
  const result = await prisma.education.delete({
    where: {
      id: id,
    },
  });
  return result;
};

// Update Education From DB
const educationUpdateFromDB = async (
  id: string,
  payload: Partial<Education>
) => {
  const result = await prisma.education.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

export const EducationServices = {
  educationSaveToDB,
  educationGetFromDB,
  educationDeleteFromDB,
  educationUpdateFromDB,
};
