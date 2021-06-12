import express, { Application } from 'express';
import { sequelize } from './config/database';
import userRoute from './routes/users';

const app: Application = express();

app.post('api/v1/users', (req, res) => {
  res.json({});
});

sequelize.sync({ force: true });

app.use('api/1.0/users', userRoute);

export default app;
