'use strict';

const mongoose  = require('mongoose');
const _         = require('underscore');
const Schema    = mongoose.Schema;

const categoryMdl = new Schema({
    name: {
        type: String, 
        unique: true, 
        required: true
    },
    description: String,
    createdAt: Date,
    createdBy: String,
    updatedAt: Date,
    updatedBy: String
});

categoryMdl.pre('save', (next) => {    
        if (this.isNew) {
            this.createdAt = new Date();
            this.updatedAt = new Date();
        } else {
            this.updatedAt = new Date();
        }
        next()   
});

mongoose.model('category', categoryMdl);