'use strict';
const categoryServ      = require('../services').categoryServ;
const utils             = require('../utils/utils');
const resMsgs           = require('../config/response-messages');

let categoryCtrl    = {
    getCategoryList: async (req, cb) => {                
        if (req.headers && req.headers.authValidated) {
            try {
                let categories = await categoryServ.getCategoryList(req, cb);                
                return cb.json({status: 200, result  : categories, message : resMsgs.SUCCESS});
            } catch(err) {
                return cb.json({status: 500, message: err.stack});
            }
        } else {
            return cb.json({status: 500, message: resMsgs.NOT_AUTHORISED});
        }
    },

    createCategory: async (req, cb) => {
        if (req.headers && req.headers.authValidated) {
            try {                
                let result = await categoryServ.createCategory({
                    name: req.body.name,
                    description: req.body.description
                });
                return cb.json({status: 201, result: result, message : resMsgs.SUCCESS});
            } catch(err) {
                return cb.json({status: 500, message: err.stack});
            }
        } else {
            return cb.json({status: 500, message: resMsgs.NOT_AUTHORISED});
        }
    }
};

module.exports  = categoryCtrl;