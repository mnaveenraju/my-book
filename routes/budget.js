const express       = require('express');
const route         = express.Router();
const auth          = require('../utils/auth');
const budgetCtrl  = require('../controllers').budgetCtrl;
const validate      = require('express-validation');
const validateSchema= require('../models').budgetMdl;

route.get('/budget/list', auth.validateAuth, budgetCtrl.getBudgetList);

route.post('/budget/create', auth.validateAuth, validate(validateSchema.create), budgetCtrl.createBudget);

module.exports  = route;

