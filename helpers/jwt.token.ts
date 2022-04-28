import jwt from 'jsonwebtoken';
import { IUserToken, IUserModel } from '../types/auth';

// make a function to create a token with a payload of the user id, email and username
export const createToken = ( { id, email, username }: IUserModel, token: string ) => {
  const payload = {
    id: id,
    email: email,
    username: username,
  } as IUserToken;

  return jwt.sign( payload, token, { expiresIn: '1h' } );
}