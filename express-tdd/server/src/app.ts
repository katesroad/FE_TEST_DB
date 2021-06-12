import express, { Application } from 'express';
import { sequelize } from './config/database';

const app: Application = express();

app.post('api/v1/users', (req, res) => {
  res.json({});
});

sequelize.sync();

export default app;
