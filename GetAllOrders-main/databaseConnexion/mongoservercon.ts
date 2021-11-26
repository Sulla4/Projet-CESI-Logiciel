import mongoose from "mongoose";

/**
 * MONGODB-X509
 */
export default function conMongo(){
    const credentials = require('fs').readFileSync('X509-cert-4739905589866104292.pem');
    mongoose.connect('mongodb+srv://cluster0.8y7ql.mongodb.net/cesiEat', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        poolSize: 10, // Maintain up to 10 socket connections
        sslKey: credentials,
        sslCert: credentials,
        authMechanism: 'MONGODB-X509',
        authSource: '$external'
    })
        .then(() => console.log('Connexion à MongoDB Certificat cesiEat réussie !'))
        .catch(() => console.log('Connexion à MongoDB Certificate cesiEat échouée !'));
}

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

