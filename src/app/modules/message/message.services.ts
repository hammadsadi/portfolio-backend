import { Message } from "@prisma/client";
import prisma from "../../shared/prisma";

// Message Save to DB
const createMessageToDB = async (payload: Message) => {
  const result = await prisma.message.create({
    data: payload,
  });
  return result;
};

//  Get  All Message
const getAllMessageFromDB = async () => {
  const result = await prisma.message.findMany();
  return result;
};
//  Get  Single Message
const getSingleMessageFromDB = async (id: string) => {
  const result = await prisma.message.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// Delete  Single Message
const deleteMessageFromDB = async (id: string) => {
  const result = await prisma.message.delete({
    where: {
      id,
    },
  });
  return result;
};

export const MessageServices = {
  createMessageToDB,
  getAllMessageFromDB,
  getSingleMessageFromDB,
  deleteMessageFromDB,
};
