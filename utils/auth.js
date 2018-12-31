'use strict';

let auth = {};

auth.validateAuth = (req, res, next) => {
    //const authToken  = req.headers.authToken;
    console.log('authhhh',  req.headers.authValidated);
    req.headers.authValidated=true;
    next();
};

module.exports  = auth;