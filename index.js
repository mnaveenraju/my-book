'use strict';

//load dot env configuration file
require('dotenv').config();

const express   = require('express');
const logger    = require('morgan')
const path      = require('path');
const app       = express();
const mongo     = require('./config/mongo-db');
const bodyParser= require('body-parser');

//use logger middleware
app.use(logger());

//ue middleware json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

async function startSerever() {    
    await mongo.start();

    const routes    = require('./routes');
    //use routes middeleware
    app.use(routes);

    //start express server
    app.listen({
        host: process.env.HOST, 
        port: process.env.PORT
    }, () => {
        console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
    });
}

startSerever()