"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth = require("../controller/authContro");
var routerAuth = express_1.default.Router();
/* Sign In & CREATE JWT */
routerAuth.post('/signIn/', auth.signIn);
/* VERIFY JWT */
routerAuth.post('/verify/', auth.verifyToken);
module.exports = routerAuth;
