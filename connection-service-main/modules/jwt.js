"use strict";
var jwt = require('jsonwebtoken');
const createJWT = (user) => {
    let token = jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return "Bearer " + token;
};
const checkJWT = (token) => {
    let check = false;
    try {
        check = jwt.verify(token, process.env.JWT_SECRET);
    }
    catch (err) {
        if (err.name == 'TokenExpiredError') {
            check = 'renew';
        }
        else {
            check = false;
        }
    }
    return check;
};
module.exports = { createJWT: createJWT, checkJWT: checkJWT };
