"use strict";
/**
 * SQL Server
 */
const Sequelize = require('sequelize');
const sequelizeSQL = new Sequelize('projetA4', 'SA', 'P@ssword', {
    host: '127.0.0.1',
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
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
module.exports = sequelizeSQL;
