import bodyParser from 'body-parser';
import express, { Application, Response, Request } from 'express';
import { sequelize } from './config/database';
import usersRouter from './routes/users';

sequelize.sync({ force: true });

const app: Application = express();

app.use(bodyParser());
app.use('/api/1.0/users', usersRouter);

export default app;
