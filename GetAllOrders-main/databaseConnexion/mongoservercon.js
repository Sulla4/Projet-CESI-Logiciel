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
/**
 * SCRAM
 */
//const user = "admin";
//const password ="admin";
//const uri = "mongodb+srv://" + user + ":" + password + "@cluster0.8y7ql.mongodb.net/";
/*
export default function conMongo(){
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'cesiEat',
        })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));

    mongoose.connection.on('connected', function () {
        console.log('database is ready now');
    });
    mongoose.connection.on('disconnected', function () {
        console.log('database is disconnected');
    });
}*/
