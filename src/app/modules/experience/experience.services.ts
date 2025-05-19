import { Experience } from "@prisma/client";
import prisma from "../../shared/prisma";

// Experience  Save To DB
const experienceSaveToDB = async (payload: Experience) => {
  const result = await prisma.experience.create({
    data: payload,
  });
  return result;
};

// Get All Experience From DB
const experienceGetFromDB = async () => {
  const result = await prisma.experience.findMany();
  return result;
};

// Delete Experience From DB
const experienceDeleteFromDB = async (id: string) => {
  const result = await prisma.experience.delete({
    where: {
      id: id,
    },
  });
  return result;
};

// Update Experience From DB
const experienceUpdateFromDB = async (
  id: string,
  payload: Partial<Experience>
) => {
  const result = await prisma.experience.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

export const ExperienceServices = {
  experienceSaveToDB,
  experienceGetFromDB,
  experienceDeleteFromDB,
  experienceUpdateFromDB,
};
