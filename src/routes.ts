import { Router } from "express";
import { CreateUserController } from "./constrollers/createusercontroller";
import { AuthenticateUserController } from "./constrollers/authenticateusercontroller";
import { CreateTagController } from "./constrollers/createtagcontroller";
import { ensureAdmin } from "./middlewares/ensureadmin";
import { CreateComplimentController } from "./constrollers/createcomplimentcontroller";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };