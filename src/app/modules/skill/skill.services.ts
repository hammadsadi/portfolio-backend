import { Skill } from "@prisma/client";
import prisma from "../../shared/prisma";

// Skill Save To DB
const skillSaveToDB = async (payload: Skill) => {
  const result = await prisma.skill.create({
    data: payload,
  });
  return result;
};

// Get All Skill From DB
const skillGetFromDB = async () => {
  const result = await prisma.skill.findMany();
  return result;
};

// Delete Skill From DB
const skillDeleteFromDB = async (id: string) => {
  const result = await prisma.skill.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const SkillServices = {
  skillSaveToDB,
  skillGetFromDB,
  skillDeleteFromDB,
};
