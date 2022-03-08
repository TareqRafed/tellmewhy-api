import express from 'express';
import { PORT } from './src/constants/env.constants.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (rq, rs) => {
  rs.send('ra ra ra');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`env: ${process.env.NODE_ENV}`);
});
