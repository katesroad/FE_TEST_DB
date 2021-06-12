import express, { Application } from 'express';

const app: Application = express();

app.post('api/v1/users', (req, res) => {
  res.json({});
});

export default app;
