const mongoose  = require('mongoose');

let mongoConnect = {
    start: async function() {
        return new Promise((resolve,  reject)=>{
            try {
                mongoose.connect(process.env.DB_URL, {useNewUrlParser:true}, function(err, res) {                    
                    mongoConnect.dbConnection = res;
                    console.log(`Connected to MongoDb on ${process.env.DB_URL}`);
                    return resolve();
                });
            } catch (err) {
                throw err
            }
        });
    }
}

module.exports  = mongoConnect;