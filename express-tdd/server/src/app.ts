import express, { Application } from 'express';

const app: Application = express();

app.post('api/v1/users', (req, res) => {
  res.json({});
});

console.log(process.env.NODE_ENV);

export default app;
