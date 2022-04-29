import { check } from 'express-validator';

// regex for username only alphanumeric
const usernameRegex = /^[a-zA-Z0-9]+$/;
// regex for password validation only letters and numbers
const passwordRegex = /^[a-zA-Z0-9]+$/;

export const loginValidator = [
  check('email')
    .exists().withMessage('El email es requerido')
    .isEmail().withMessage('Email is not valid'),

  check('password')
    .exists().withMessage('La contraseña es requerida')
    .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
    .matches(passwordRegex).withMessage('La contraseña solo puede contener letras y números'),
]

export const authValidator = [
  check('email')
    .exists().withMessage('El email es requerido')
    .isEmail().withMessage('Email is not valid'),

  check('password')
    .exists().withMessage('La contraseña es requerida')
    .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
    .matches(passwordRegex).withMessage('La contraseña solo puede contener letras y números'),

  check('username')
    .exists().withMessage('El nombre de usuario es requerido')
    .isLength({ min: 4 }).withMessage('El nombre de usuario debe tener al menos 4 caracteres')
    .matches(usernameRegex).withMessage('El nombre de usuario solo puede contener letras y números'),
]