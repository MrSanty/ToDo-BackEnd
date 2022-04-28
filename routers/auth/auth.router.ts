// imports for api router
import { Router } from "express";
import { registerUserController } from '../../controllers/user.controller';
import { authValidator } from "../../helpers/user.validator";

const authRouter = Router();

authRouter.post( "/register", authValidator, registerUserController );

export default authRouter;  