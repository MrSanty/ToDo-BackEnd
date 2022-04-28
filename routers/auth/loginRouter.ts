// imports for api router
import { Request, Response, Router } from "express";
const loginRouter = Router();

loginRouter.get("/", ( _: Request , res: Response ) => {
  res.json({ message: "Hello World" });
});

export default loginRouter;