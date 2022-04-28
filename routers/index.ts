import Express, { Router } from "express";
import loginRouter from "./auth/loginRouter"; 


export const apiRouter = ( app: Express.Application ) => {
  const router = Router();
  app.use( "/api", router );

  router.use( "/login", loginRouter );
}