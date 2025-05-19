import bcrypt from "bcrypt";
import prisma from "../../shared/prisma";
import config from "../../config";
import { User } from "@prisma/client";
import { generateToken } from "../../utils/auth.utils";
import AppError from "../../error/AppError";
import slugGenerator from "../../utils/slugGenerator";
import status from "http-status";

// User Save to DB
const userSaveToDB = async (data: User) => {
  //  Check User Already Exist or Not By Email
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: data?.email,
    },
  });
  if (isUserExist) {
    throw new AppError(400, "User Already Exist");
  }
  // Check User Already Exist Or Not By Username
  const isExistByUserName = await prisma.user.findUnique({
    where: {
      username: data?.name,
    },
  });
  if (isExistByUserName) {
    throw new AppError(400, "Username Already Exist");
  }
  const hashPassword = await bcrypt.hash(
    data?.password,
    Number(config.BCRYPT_SALt_ROUNDS)
  );
  const imageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${data?.name}`;

  const userData = {
    ...data,
    password: hashPassword,
    image: imageUrl,
    username: slugGenerator(data?.name),
  };

  // Create User
  const result = await prisma.user.create({
    data: userData,
  });

  //  JWT Data
  const jwtPayload = {
    email: result.email,
    id: result.id,
    role: result.role,
  };

  //  Generate Access Token
  const accessToken = generateToken(
    jwtPayload,
    config.JWT.JWT_ACCESS_SECRET as string,
    config.JWT.JWT_ACCESS_EXPIRES_IN
  );

  //   const refreshToken = generateToken(
  //     jwtPayload,
  //     config.JWT.JWT_REFRESH_SECRET as string,
  //     config.JWT.JWT_REFRESH_EXPIRES_IN
  //   );

  return {
    accessToken,
  };
};

//  User Login
const loginUser = async (payload: { email: string; password: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  if (!userData) {
    throw new AppError(status.UNAUTHORIZED, "This user is not exist");
  }

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );

  if (!isCorrectPassword) {
    throw new AppError(status.UNAUTHORIZED, "Invalid email or password");
  }

  const jwtPayload = {
    email: userData.email,
    id: userData.id,
    role: userData.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    config.JWT.JWT_ACCESS_SECRET as string,
    config.JWT.JWT_ACCESS_EXPIRES_IN
  );

  return {
    accessToken,
  };
};

// Get All Users
const getAllUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const UserServices = {
  userSaveToDB,
  getAllUsers,
  loginUser,
};
