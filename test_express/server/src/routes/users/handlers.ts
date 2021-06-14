import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import userRepo from '../../models/user-model';

export async function registerHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  /**
   * Test request.body shape
   * Doc: https://express-validator.github.io/docs/index.html
   */
  if (!errors.isEmpty()) {
    return res.status(400).json({
      msg: 'Bad request. Please check user data',
    });
  }
  try {
    /**
     * Create an user recored
     * Doc: https://sequelize.org/master/manual/model-instances.html
     */
    const user = await userRepo.create({ username, email, password });
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}
