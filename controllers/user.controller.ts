import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { loginUserService, registerUserService } from '../services/user.services';
import dotenv from 'dotenv';
// config dotenv
dotenv.config();
const jwtSecret = process.env.JWT_SECRET as string;

// Funtions
export const registerUserController = async ( req: Request, res: Response ): Promise<Response> => {
  const validateErrors = validationResult( req );
  if ( !validateErrors.isEmpty() ) return res.status(422).json({ errors: validateErrors.array() });

  try {
    const result = await registerUserService( req.body, jwtSecret );
    const { token, name } = result;
    return res.status(201).json({ message: 'Usuario creado', token, name });
  } catch ( error: ErrorConstructor | any ) {
    if ( error.message === 'Usuario ya existe' ) {
      return res.status(422).json({ message: 'Usuario ya existe' });
    }
    console.log(error);
    return res.status(500).json({ message: 'Error en el servidor, por favor comunicarce con MrSanty' });
  }
}

export const loginUserController = async ( req: Request, res: Response ): Promise<Response> => {
  const validateErrors = validationResult( req );

  if (!validateErrors.isEmpty()) return res.status(422).json({ errors: validateErrors.array() });

  try {
    const result = await loginUserService( req.body, jwtSecret );
    const { token, name } = result;
    return res.status(201).json({ message: 'Inicio de seccion Exitoso', token, name });
  } catch ( error: ErrorConstructor | any ) {
    if ( error.message === 'Usuario o contraseña incorrectos' ) {
      return res.status(422).json({ message: 'Usuario o contraseña incorrectos' });
    }

    return res.status(500).json({ message: 'Error en el servidor, por favor comunicarce con MrSanty' });
  }
}
