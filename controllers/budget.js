'use strict';
const budgetServ      = require('../services').budgetServ;
const utils             = require('../utils/utils');
const resMsgs           = require('../config/response-messages');

let budgetCtrl    = {
    getBudgetList: async (req, cb) => {                
        if (req.headers && req.headers.authValidated) {
            try {
                let budget = await budgetServ.getBudgetList(req, cb);                
                return cb.json({status: 200, result  : budget, message : resMsgs.SUCCESS});
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
                return cb.json({status: 201, result: budget, message : resMsgs.SUCCESS});
            } catch(err) {
                return cb.json({status: 500, message: err.stack});
            }
        } else {
            return cb.json({status: 500, message: resMsgs.NOT_AUTHORISED});
        }
    }
};

module.exports  = budgetCtrl;