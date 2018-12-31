'use strict';

const express       = require('express');
const route         = express.Router();
const auth          = require('../utils/auth');
const categoryCtrl  = require('../controllers').categoryCtrl;

route.get('/category/list', auth.validateAuth, categoryCtrl.getCategoryList);

route.post('/category/create', auth.validateAuth, categoryCtrl.createCategory);

module.exports = route;