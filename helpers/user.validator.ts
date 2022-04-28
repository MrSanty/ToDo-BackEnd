import { check } from 'express-validator';

// regex for username only alphanumeric
const usernameRegex = /^[a-zA-Z0-9]+$/;

// regex for password validation only letters and numbers
const passwordRegex = /^[a-zA-Z0-9]+$/;

export const authValidator = [
  check('email')
    .isEmail().withMessage('Email is not valid'),

  check('password')
    .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long')
    .matches(passwordRegex).withMessage('Password must contain letters and numbers only'),

  check('username')
    .isLength({ min: 4 }).withMessage('Username must be at least 4 characters long')
    .matches(usernameRegex).withMessage('Username must contain letters and numbers only')
]

export const loginValidator = [
  check('email')
    .isEmail().withMessage('Email is not valid'),

  check('password')
    .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long')
    .matches(passwordRegex).withMessage('Password must contain letters and numbers only')
]
