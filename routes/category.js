'use strict';

const express       = require('express');
const route         = express.Router();
const auth          = require('../utils/auth');
const categoryCtrl  = require('../controllers').categoryCtrl;
const validate      = require('express-validation');
const validateSchema= require('../models').categoryMdl;

route.get('/category/list', auth.validateAuth, categoryCtrl.getCategoryList);

route.post('/category/create', auth.validateAuth, validate(validateSchema.create), categoryCtrl.createCategory);

module.exports = route;