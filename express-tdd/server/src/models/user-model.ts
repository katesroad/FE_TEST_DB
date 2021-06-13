import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

/**
 * Define User model
 * Doc: https://sequelize.org/master/manual/model-basics.html
 */
export const UserModel = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

class User {
  readonly model = UserModel;

  create(user: any) {
    return this.model.create(user);
  }

  findOne(filter: any) {
    return this.model.findOne(filter);
  }

  findAll(filter: any) {
    return this.model.findAll(filter);
  }
}

export default new User();
