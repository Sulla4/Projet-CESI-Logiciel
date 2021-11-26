import express from 'express'
const auth = require("../controller/authContro");

var routerAuth =express.Router();

/* Sign In & CREATE JWT */
routerAuth.post('/signIn/', auth.signIn);

/* VERIFY JWT */
routerAuth.post('/verify/', auth.verifyToken);

module.exports = routerAuth;