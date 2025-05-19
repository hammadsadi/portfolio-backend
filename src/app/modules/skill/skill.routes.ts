import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { SkillControllers } from "./skill.controllers";

const router = Router();

router.post("/create", auth(UserRole.ADMIN), SkillControllers.createSkill);
router.get("/", SkillControllers.getAllSkills);
router.delete("/:skillId", auth(UserRole.ADMIN), SkillControllers.deleteSkill);

export const SkillRoutes = router;
