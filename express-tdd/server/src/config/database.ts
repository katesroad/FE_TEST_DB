import config from 'config';
import { Sequelize } from 'sequelize';

const { database, username, password, ...rest } = config.get('database');

/**
 * Connect to sqlite using sequelize
 * Doc: https://sequelize.org/master/manual/getting-started.html
 */
export const sequelize = new Sequelize(database, username, password, rest);
