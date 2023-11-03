import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
// import mongoose from 'mongoose';
import { configs } from './configs';

const {
  port,
  host,
  baseURL: { server },
} = configs;

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  return res.send('hey');
});
app.use((error, req, res) => {
  return res.status(500).json({ message: error.message });
});

app.listen(port, host, err => {
  if (err) {
    return err.message;
  }
  return console.log(`${server}`);
});
