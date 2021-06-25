/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable node/no-extraneous-require */
/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// console.log(process.env);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // .connect(DB, process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  .then(() => console.log('DB Connection successful!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
