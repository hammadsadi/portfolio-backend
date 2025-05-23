import { NextFunction, Request, Response } from "express";
import status from "http-status";
import config from "../config";
import { JwtPayload, Secret } from "jsonwebtoken";
import prisma from "../shared/prisma";
import AppError from "../error/AppError";
import { User } from "@prisma/client";
import { verifyToken } from "../utils/auth.utils";

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: JwtPayload },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token: string = req.headers.authorization!;
      if (!token) {
        throw new AppError(status.UNAUTHORIZED, "You are not authorized!");
      }

      const verifyUser = verifyToken(
        token,
        config.JWT.JWT_ACCESS_SECRET as Secret
      );

      if (roles.length && !roles.includes(verifyUser.role)) {
        throw new AppError(status.UNAUTHORIZED, "You are not authorized!");
      }

      const userData: User = await prisma.user.findUniqueOrThrow({
        where: {
          email: verifyUser?.email,
        },
      });
      if (!userData) {
        throw new AppError(status.NOT_FOUND, "User is Not Found!");
      }

      req.user = verifyUser;
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
