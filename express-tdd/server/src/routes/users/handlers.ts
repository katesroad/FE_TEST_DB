import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { User } from './model';

export async function userRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  if (errors) {
    return res.status(400).json({
      msg: 'Bad request',
      errors,
    });
  }
  try {
    /**
     * Create an user recored
     * Doc: https://sequelize.org/master/manual/model-instances.html
     */
    const user = await User.create({ username, email, password });
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}
