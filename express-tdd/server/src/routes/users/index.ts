import { Router } from 'express';
import { body } from 'express-validator';
import { userRegister } from './handlers';

/**
 * User Routeer
 */
class UserRoute {
  readonly router: Router;
  readonly prefix = 'users';
  constructor() {
    this.router = Router();
  }
  private getUrl(path: string) {
    return this.prefix + '/' + path;
  }
  init() {
    this.router.post(
      this.getUrl('register'),
      /**
       * Validate data schema
       * Doc: https://express-validator.github.io/docs/index.html
       */ body('username').isString().isLength({ min: 1, max: 200 }),
      body('email').isEmail(),
      // password must be at least 5 chars long
      body('password').isLength({ min: 5 }),
      userRegister
    );
  }
}

export default new UserRoute().router;
