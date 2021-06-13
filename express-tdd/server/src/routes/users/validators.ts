import { body } from 'express-validator';

export const registerValidators = [
  /**
   * Validate data schema
   * Doc: https://express-validator.github.io/docs/index.html
   */
  body('username').isString().isLength({ min: 1, max: 200 }),
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
];
