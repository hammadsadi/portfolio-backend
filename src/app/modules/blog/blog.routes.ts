import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { BlogControllers } from "./blog.controllers";

const router = Router();

router.post("/create", auth(UserRole.ADMIN), BlogControllers.createBlog);
router.get("/", BlogControllers.getAllBlogs);
router.get("/:slug", BlogControllers.getSingleBlog);
router.patch(
  "/:blogId",
  auth(UserRole.ADMIN),
  BlogControllers.updateSingleBlog
);
router.delete(
  "/:blogId",
  auth(UserRole.ADMIN),
  BlogControllers.deleteSingleBlog
);

export const BlogRoutes = router;
