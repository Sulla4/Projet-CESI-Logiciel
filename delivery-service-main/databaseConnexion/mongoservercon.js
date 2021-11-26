"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
/**
 * MONGODB-X509
 */
function conMongo() {
    var credentials = require('fs').readFileSync('X509-cert-4739905589866104292.pem');
    mongoose_1.default.connect('mongodb+srv://cluster0.8y7ql.mongodb.net/cesiEat', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        poolSize: 10,
        sslKey: credentials,
        sslCert: credentials,
        authMechanism: 'MONGODB-X509',
        authSource: '$external'
    })
        .then(function () { return console.log('Connexion à MongoDB Certificat cesiEat réussie !'); })
        .catch(function () { return console.log('Connexion à MongoDB Certificate cesiEat échouée !'); });
}
exports.default = conMongo;
