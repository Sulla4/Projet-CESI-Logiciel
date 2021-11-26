"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var mongoservercon_1 = __importDefault(require("./databaseConnexion/mongoservercon"));
var http = require('http');
var app = require('./app');
var normalizePort = function (val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
var port = normalizePort(process.env.PORT || '3003');
app.set('port', port);
var errorHandler = function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var address = server.address();
    var bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
var server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', function () {
    var address = server.address();
    var bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});
server.listen(port);
/**
 * MONGODB-X509
 */
mongoservercon_1.default();
