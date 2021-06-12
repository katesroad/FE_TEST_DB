import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';

/**
 * Define User model
 * Doc: https://sequelize.org/master/manual/model-basics.html
 */
export const User = sequelize.define(
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
