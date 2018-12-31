const categoryMdl   = require('../models').categoryMdl;
const mongoDb       = require('../config/mongo-db');
const mongo      = require('mongoose');

let categoryServ = {};

categoryServ.getCategoryList = async (req, cb) => {
    return new Promise((resolve,reject) => {
        try {
            mongo.models.category.find().then((list) => {
                return resolve(list);
            }).catch((err) => {
                reject(err);
            })
        } catch(err) {
            reject(err);
        };
    });
};

categoryServ.createCategory = async (req,  cb) => {
    return new Promise((resolve, reject) => {
        try {            
            mongo.models.category.create(req).then((res) => {                
                return resolve();
            }).catch((err) => {
                reject(err);
            });
        } catch(err) {
            reject(err);
        };
    });
}

module.exports  = categoryServ;