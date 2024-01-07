/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/semi */
import express from 'express';
import path from 'path';
// import { db } from './models'
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.listen(8000, () => { console.log('Server started at port 8000') })
