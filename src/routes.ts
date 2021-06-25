import { Router } from "express";
import { CreateUserController } from "./constrollers/createusercontroller";
import { AuthenticateUserController } from "./constrollers/authenticateusercontroller";
import { CreateTagController } from "./constrollers/createtagcontroller";
import { ensureAdmin } from "./middlewares/ensureadmin";
import { ensureAuthentication } from "./middlewares/ensureauthentication";
import { CreateComplimentController } from "./constrollers/createcomplimentcontroller";
import { ListUserReceivedComplimentController } from "./constrollers/listuserreceivedcomplimentcontroller";
import { ListUserSentComplimentController } from "./constrollers/listusersentcomplimentcontroller";
import { ListTagController } from "./constrollers/listtagcontroller";
import { ListUserController } from "./constrollers/listusercontroller";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const authenticateUserController = new AuthenticateUserController();
const createTagController = new CreateTagController();
const listTagController = new ListTagController();
const createComplimentController = new CreateComplimentController();
const listUserReceivedComplimentController = new ListUserReceivedComplimentController();
const listUserSentComplimentController = new ListUserSentComplimentController;

router.post("/users", createUserController.handle);
router.get("/users", ensureAuthentication, listUserController.handle);
router.post("/tags", ensureAuthentication, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthentication, listTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthentication, createComplimentController.handle);
router.get("/users/compliments/receive", ensureAuthentication, listUserReceivedComplimentController.handle);
router.get("/users/compliments/send", ensureAuthentication, listUserSentComplimentController.handle);

export { router };