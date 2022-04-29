import { Document } from 'mongoose';
export interface EnvConfig extends NodeJS.ProcessEnv {
  PORT: string | number
  MONGO_USER: string
  MONGO_PASS: string
  MONGO_URL: string
}

interface IUser {
  username: string
  password: string
  email: string
}

export type IUserToken = Omit<IUser, 'password'>;

export interface IUserModel extends IUser, Document {
  _id: string
  createdAt: Date
  updatedAt: Date
}
export interface ResultAuth  {
  name: string
  token: string
}

