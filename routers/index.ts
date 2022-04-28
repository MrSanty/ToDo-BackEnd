import Express from "express";
import userRouter from "./auth/loginRouter";

export const apiRouter = ( app: Express.Application ) => {
  app.use( "/api", userRouter );
}