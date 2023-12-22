// @ts-check

import express from 'express';
import cors from 'cors';
import homeRoute from './routes/homeRoute.js';

// todo: config dotenv and enum.
const PORT = 4000 || 5000;

const app = express();

app.use(cors());

app.use('/api', homeRoute);

app.listen(PORT, (error) => {
  if (error) {
    console.error(`## :>> Server Running Error: `, error);
  }
  console.info(`## :>> Server started on port ${PORT}`);
});
