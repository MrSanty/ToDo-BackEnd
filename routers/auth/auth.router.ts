// imports for api router
import { Router } from 'express'
import { registerController, loginController } from '../../controllers/auth.controller';
import { authValidator, loginValidator } from '../../validator/auth.validator';

const authRouter = Router()

/* Login */
authRouter.post( '/login', loginValidator, loginController );

/* Register */
authRouter.post( '/register', authValidator, registerController );

export default authRouter;