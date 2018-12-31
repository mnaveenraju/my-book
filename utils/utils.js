'use strict';

const resMsgs   = require('../config/response-messages');

module.exports = {
    formSuccessResponse: (req) => {
        return({
            status  : req.status|| 200,
            message : req.message || "Success",
            result  : req.result || {}
        })
    },
    formErrResponse: (req) => {
        return({
            status  : req.status || 500,
            message : req.message || resMsgs.INT_SERVER_ERROR
        });
    },
    beforeCreate: {createdAt: new Date(), updatedAt: new Date()},
    beforeUpdate: {updatedAt: new Date()}
}