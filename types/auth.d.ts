import { Document } from 'mongoose';
import { Request } from 'express';

interface IUser extends Document {
  id: string;
  username: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type IUserToken = Omit<IUser, 'password' | 'createdAt' | 'updatedAt'>;

export type IUserModelParams = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> & Request;

export interface IUserModel extends IUser { }