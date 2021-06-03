const express = require('express');
const app = express();
const logger = require('morgan');
const request = require('request');
const cors = require("cors")

const lkRouter = require('./routes/lk');

app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(cors())

app.use('/lK', lkRouter)

app.listen(3001, () => {
  console.log('server here!')
})
