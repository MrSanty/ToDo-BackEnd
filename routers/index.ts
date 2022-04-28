import Express, { Router } from "express";
import authRouter from "./auth/auth.router"; 

export const apiRouter = ( app: Express.Application ) => {
  const router = Router();
  app.use( "/api", router );

  router.use( "/auth", authRouter );
}