import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { ResumeControllers } from "./resume.controllers";

const router = Router();

router.post("/create", auth(UserRole.ADMIN), ResumeControllers.createResume);
router.get("/", auth(UserRole.ADMIN), ResumeControllers.getAllResume);
router.get("/active", ResumeControllers.getActiveResume);
router.delete(
  "/:id",
  auth(UserRole.ADMIN),
  ResumeControllers.deleteSingleResume
);

export const ResumeRoutes = router;
