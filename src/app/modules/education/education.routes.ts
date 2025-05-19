import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { EducationControllers } from "./education.controllers";

const router = Router();

router.post(
  "/create",
  auth(UserRole.ADMIN),
  EducationControllers.createEducation
);

router.get("/", EducationControllers.getAllEducation);
router.delete(
  "/:educationId",
  auth(UserRole.ADMIN),
  EducationControllers.deleteSingleEducation
);
router.patch(
  "/:educationId",
  auth(UserRole.ADMIN),
  EducationControllers.updateSingleEducation
);

export const EducationRoutes = router;
