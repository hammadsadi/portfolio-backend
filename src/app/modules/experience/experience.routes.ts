import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { ExperienceControllers } from "./experience.controllers";

const router = Router();

router.post(
  "/create",
  auth(UserRole.ADMIN),
  ExperienceControllers.createExperience
);

router.get("/", ExperienceControllers.getAllExperiences);
router.delete(
  "/:experienceId",
  auth(UserRole.ADMIN),
  ExperienceControllers.deleteSingleExperiences
);

router.patch(
  "/:experienceId",
  auth(UserRole.ADMIN),
  ExperienceControllers.updateSingleExperiences
);

export const ExperienceRoutes = router;
