import { Router } from 'express';
import { registerHandler } from './handlers';
import { registerValidators } from './validators';

/**
 * User Routeer
 */
class UserRoute {
  readonly router: Router;
  constructor() {
    this.router = Router();
  }

  init() {
    this.router.post('register', ...registerValidators, registerHandler);
  }
}

export default new UserRoute().router;
