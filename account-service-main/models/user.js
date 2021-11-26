"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const role_1 = require("./role");
const city_1 = require("./city");
// @ts-ignore
const sqlservercon_1 = __importDefault(require("../databaseConnexion/sqlservercon"));
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    idUser: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstnameUser: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    lastnameUser: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    userPhone: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    nameUser: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    siretUser: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    addressUser: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    mpUser: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    pointsUser: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: false },
    isSponsorUser: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    isSponsorisedUser: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    role_idRole: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    cpCityID: { type: sequelize_1.DataTypes.INTEGER, allowNull: false }
}, {
    tableName: "Users",
    sequelize: sqlservercon_1.default, // this bit is important
});
User.belongsTo(role_1.Role, { foreignKey: 'role_idRole' });
User.belongsTo(city_1.City, { foreignKey: 'cpCityID' });
//User.sync({force: true}).then(() => console.log("User table created"));
