import { Router } from "express";
import { UserControllers } from "./user.controllers";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = Router();

router.post("/create", UserControllers.createUser);
router.post("/login", UserControllers.loginUser);
router.patch(
  "/update",
  auth(UserRole.ADMIN, UserRole.USER),
  UserControllers.userDataUpdate
);
router.get("/", UserControllers.getAllUsers);
router.get(
  "/me",
  auth(UserRole.ADMIN, UserRole.USER),
  UserControllers.getMeController
);

export const UserRoutes = router;
