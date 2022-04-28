// imports for api router
import { Request, Response, Router } from "express";
const userRouter = Router();

userRouter.get("/", ( _: Request , res: Response ) => {
  res.json({ message: "Hello World" });
});

export default userRouter;