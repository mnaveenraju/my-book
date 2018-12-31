'use strict';
const utils             = require('../utils/utils');
const resMsgs           = require('../config/response-messages');
const budgetMdl       = require('../models').budgetMdl;
const mongo             = require('mongoose');

let budgetCtrl    = {
    getBudgetList: async (req, cb) => {                
        if (req.headers && req.headers.authValidated) {
            try {
                let budgets = await mongo.models.budget.find();
                return cb.json({status: 200, result  : budgets, message : resMsgs.SUCCESS});
            } catch(err) {
                return cb.json({status: 500, message: err.stack});
            }
        } else {
            return cb.json({status: 500, message: resMsgs.NOT_AUTHORISED});
        }
    },

    createBudget: async (req, cb) => {
        if (req.headers && req.headers.authValidated) {
            try {                
                let budget = await budgetServ.createBudget({
                    type        : req.body.type,
                    description : req.body.description,
                    amtount     : req.body.amount,
                    date        : req.body.date,
                    description : req.body.description
                });
                let result = await mongo.models.budget.create(budget);
                return cb.json({status: 201, result: result, message : resMsgs.SUCCESS});
            } catch(err) {
                return cb.json({status: 500, message: err.stack});
            }
        } else {
            return cb.json({status: 500, message: resMsgs.NOT_AUTHORISED});
        }
    }
};

module.exports  = budgetCtrl;