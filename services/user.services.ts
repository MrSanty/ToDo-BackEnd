import { User } from '../models/user.model';
import bcrypt from 'bcryptjs';
import { createToken } from '../helpers/jwt.token';
import { IUserModelParams, ResultAuth } from '../types/types';

const isExistUser = async ( email: string ): Promise<boolean> => {
  const user = await User.findOne({ email });
  return !( user == null );
}

export const registerUserService = async ( { username, email, password }: IUserModelParams, secretToken: string ): Promise<ResultAuth> => {
  const isExist = await isExistUser( email );
  if ( isExist ) throw new Error('Usuario ya existe');

  const hashedPassword = await bcrypt.hash( password, 10 );
  const user = new User({ username, email, password: hashedPassword });
  const token = createToken( user, secretToken );

  const result = await user.save();
  const name = result.username;

  return { name, token };
}

export const loginUserService = async ( { email, password }: IUserModelParams, secretToken: string ): Promise<ResultAuth> => {
  const user = await User.findOne({ email });
  if ( user == null ) throw new Error('Usuario o contraseña incorrectos');

  const isPasswordValid = await bcrypt.compare( password, user.password );
  if ( !isPasswordValid ) throw new Error('Usuario o contraseña incorrectos');

  const token = createToken( user, secretToken );
  const name = user.username;
  return { name, token };
}
