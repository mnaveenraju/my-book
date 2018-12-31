'use strict';
const utils             = require('../utils/utils');
const resMsgs           = require('../config/response-messages');
const categoryMdl       = require('../models').categoryMdl;
const mongo             = require('mongoose');

let categoryCtrl    = {
    getCategoryList: async (req, cb) => {                
        if (req.headers && req.headers.authValidated) {
            try {
                let categories = await mongo.models.category.find();
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
                let result = await mongo.models.category.create(req);
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