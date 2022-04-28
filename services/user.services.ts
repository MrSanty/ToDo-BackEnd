import { User } from '../models/user.model';
import bcrypt from 'bcryptjs';
import { IUserModelParams } from '../types/auth';
import { createToken } from '../helpers/jwt.token';

export const registerUser = async ( { username, email, password }: IUserModelParams, secretToken: string ) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    const token = createToken( user, secretToken );
    const result = await user.save();
    return { result, token };
  } catch ( error ) {
    throw error;
  }
}
