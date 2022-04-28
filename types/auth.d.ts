import { Document } from 'mongoose';
import { Request } from 'express';

interface IUser extends Document {
  id?: string;
  username: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// create a type  IUser omit the id, createdAt and updatedAt properties
export type IUserModelParams = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> & Request;

export interface IUserModel extends IUser { }