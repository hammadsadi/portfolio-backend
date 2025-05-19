import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { ProjectControllers } from "./project.controllers";

const router = Router();

router.post("/create", auth(UserRole.ADMIN), ProjectControllers.createProject);
router.get("/", ProjectControllers.getAllProjects);
router.get("/:slug", ProjectControllers.getSingleProjects);
router.patch(
  "/:projectId",
  auth(UserRole.ADMIN),
  ProjectControllers.updateSingleProjects
);
router.delete(
  "/:projectId",
  auth(UserRole.ADMIN),
  ProjectControllers.deleteSingleProjects
);

export const ProjectRoutes = router;
