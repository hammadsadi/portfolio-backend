import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { MessageControllers } from "./message.controllers";

const router = Router();

router.post("/create", MessageControllers.createMessage);
router.get("/", auth(UserRole.ADMIN), MessageControllers.getAllMessage);
router.get("/:id", auth(UserRole.ADMIN), MessageControllers.getSingleMessage);
router.delete(
  "/:id",
  auth(UserRole.ADMIN),
  MessageControllers.deleteSingleMessage
);

export const MessageRoutes = router;
