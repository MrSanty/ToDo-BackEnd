import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { registerUser } from "../services/user.services";
import dotenv from 'dotenv';

// config dotenv
dotenv.config();

// get jwt secret
const jwtSecret = process.env.JWT_SECRET as string;

export const registerUserController = async ( req: Request, res: Response ) => {
  const validateErrors = validationResult( req );

  if ( !validateErrors.isEmpty() ) { 
    return res.status( 422 ).json({ errors: validateErrors.array() });
  }

  try {
    const result = await registerUser( req.body, jwtSecret );
    return res.status( 201 ).json( result );
  } catch (error) {
    return res.status( 500 ).json( error );
  }
}
