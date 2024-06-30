const express = require('express');
const mongoDB = require('./db');

const app = express();
const port = 5000;

mongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB', error);
  });
