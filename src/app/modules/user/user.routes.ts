import { Router } from "express";
import { UserControllers } from "./user.controllers";

const router = Router();

router.post("/create", UserControllers.createUser);
router.post("/login", UserControllers.loginUser);
router.get("/", UserControllers.getAllUsers);

export const UserRoutes = router;
