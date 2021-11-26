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