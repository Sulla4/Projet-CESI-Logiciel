/**
 * SQL Server
 */
const Sequelize = require('sequelize');

const sequelizeSQL = new Sequelize('projetA4', 'Custumer', 'P@ssword', {//'SA', 'P@ssword'
        host: '192.168.245.80',//'127.0.0.1',
        dialect: 'mssql',
        dialectOptions: {
            encrypt: true
        },
        define: {
            timestamps: false
        }
});

sequelizeSQL
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: any)=> {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelizeSQL
