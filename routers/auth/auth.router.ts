// imports for api router
import { Router } from 'express'
import { registerUserController, loginUserController } from '../../controllers/user.controller';
import { authValidator, loginValidator } from '../../helpers/user.validator';
const authRouter = Router()

/* Register */
authRouter.post( '/register', authValidator, registerUserController );

/* Login */
authRouter.post( '/login', loginValidator, loginUserController );

export default authRouter;
