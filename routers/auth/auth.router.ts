// imports for api router
import { Router } from 'express'
import { registerController, loginController, validateAuth } from '../../controllers/auth.controller';
import { registerValidator, loginValidator } from '../../validator/auth.validator';

const authRouter = Router()

/* Login */
authRouter.post( '/login', loginValidator, loginController );

/* Register */
authRouter.post( '/register', registerValidator, registerController );

authRouter.post( '/validate', validateAuth );

export default authRouter;