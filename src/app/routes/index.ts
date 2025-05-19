import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { SkillRoutes } from "../modules/skill/skill.routes";
import { ExperienceRoutes } from "../modules/experience/experience.routes";
import { EducationRoutes } from "../modules/education/education.routes";

const router = Router();

const moduleRoutes: { path: string; route: Router }[] = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/education",
    route: EducationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
