import { User } from '../models/user.model';
import bcrypt from 'bcryptjs';
import { IUserModelParams } from '../types/auth';

export const registerUser = async ( { username, email, password }: IUserModelParams ) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    const result = await user.save();
    return result;
  } catch ( error ) {
    throw error;
  }
}
