import express from 'express';
const app: Application = express();
import { Application } from "express";
import {router as usersRouter} from './routes/user.routes';


app.use(express.json());

app.use('/users', usersRouter);

app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
