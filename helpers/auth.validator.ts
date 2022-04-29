import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

export const validateRequest = ( req: Request, _: Response ) => {
  const errors = validationResult( req );
  if ( !errors.isEmpty() ) {
    const extractedErrors = errors
      .array({ onlyFirstError: true })
      .map( error => ( { [error.param]: error.msg } ) );

    return extractedErrors;
  } 

  return null;
}