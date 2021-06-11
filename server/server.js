const express = require('express');
const app = express();
const logger = require('morgan');
const request = require('request');
const cors = require("cors")

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

require("dotenv").config();
dotenv.config({ path: path.resolve(__dirname, ".env") });


const lkRouter = require('./routes/lk');

app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(cors())

app.use('/lK', lkRouter)

app.listen(3001, () => {
  console.log('server here!')
  console.log('baza toje', process.env.DB_LOCAL_URL);
  mongoose.connect(process.env.DB_LOCAL_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

})
