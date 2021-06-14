import { Router } from 'express';
import { registerHandler } from './handlers';
import { registerValidators } from './validators';

/**
 * User Router
 * idea comes from: https://github.com/tkssharma/e-CommerseHub
 */
class UsersRoute {
  readonly router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/register', ...registerValidators, registerHandler);
  }
}

export default new UsersRoute().router;
