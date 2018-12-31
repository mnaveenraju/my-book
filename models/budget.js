'use strict';
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

let budgetSchema = new Schema({
    type: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['INCOME', 'EXPENSE']
    },
    description: String,
    amount: {
        type: Number,
        min: 0
    },
    date:Date,
    category: {
        type: Schema.Types.ObjectId, 
        ref: 'category'
    },
    createdAt: Date,
    upatedAt: Date,
    createdBy: String,
    updatedBy: String
});

budgetSchema.pre('save', (next) => {    
    if (this.isNew) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    } else {
        this.updatedAt = new Date();
    }
    next()   
});

mongoose.model('budget', budgetSchema);

