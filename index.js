import express from "express";
// import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // console.log(`env: ${process.env.NODE_ENV}`)
  })