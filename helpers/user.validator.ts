import { check } from 'express-validator';

// regex for username only alphanumeric
const usernameRegex = /^[a-zA-Z0-9]+$/;

// regex for password validation only letters and numbers
const passwordRegex = /^[a-zA-Z0-9]+$/;

export const authValidator = [
  check('email')
    .isEmail().withMessage('Email is not valid'),

  check('password')
    .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
    .matches(passwordRegex).withMessage('La contraseña solo puede contener letras y números'),

  check('username')
    .isLength({ min: 4 }).withMessage('El nombre de usuario debe tener al menos 4 caracteres')
    .matches(usernameRegex).withMessage('El nombre de usuario solo puede contener letras y números'),
]

export const loginValidator = [
  check('email')
    .isEmail().withMessage('Email is not valid'),

  check('password')
    .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
    .matches(passwordRegex).withMessage('La contraseña solo puede contener letras y números'),
]
