import { Request, Response } from 'express';
import { loginService, registerService, validate } from '../services/auth.services';
import { validateRequest } from '../helpers/auth.validator';


// Funtions
export const loginController = async ( req: Request, res: Response ): Promise<Response> => {
  const message = validateRequest( req, res );
  if ( message ) return res.status( 422 ).json({ message });

  try {
    validateRequest( req, res );
    const result = await loginService( req.body );
    const { token, name } = result;
    return res.status( 201 ).json({ message: 'Inicio de seccion Exitoso', token, name });
  } catch ( error: ErrorConstructor | any ) {
    if ( error.message === 'Usuario o contraseña incorrectos' ) {
      return res.status( 422 ).json({ message: error.message });
    }
    console.log(error);
    return res.status( 500 ).json({ message: 'Error en el servidor, por favor comunicarse con MrSanty' });
  }
}

export const registerController = async ( req: Request, res: Response ): Promise<Response> => {
  const message = validateRequest( req, res );
  if ( message ) return res.status( 422 ).json({ message });

  try {
    const result = await registerService( req.body );
    const { token, name } = result;
    return res.status( 201 ).json({ message: 'Usuario creado', token, name });
  } catch ( error: ErrorConstructor | any ) {
    if ( error.message === 'Usuario ya existe' ) {
      return res.status( 422 ).json({ message: error.message });
    }
    return res.status( 500 ).json({ message: 'Error en el servidor, por favor comunicarse con MrSanty' });
  }
}

export const validateAuth = async ( req: Request, res: Response ): Promise<Response> => {
  try {
    const name = await validate( req.headers.authorization as string );
    return res.status( 201 ).json({ validate: true, name });
  } catch ( error: ErrorConstructor | any ) {
    if ( error.message === 'invalid token' ) {
      return res.status( 403 ).json({ validate: false, message: 'No autorizado' });
    } else if ( error.message === 'jwt expired' ) {
      return res.status( 403 ).json({ validate: false, message: 'El token expiro' });
    }

    return res.status( 500 ).json({ message: 'Error en el servidor, por favor comunicarse con MrSanty' });
  }
}