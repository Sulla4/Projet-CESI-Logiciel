"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const sequelize_1 = require("sequelize");
// @ts-ignore
const sqlservercon_1 = __importDefault(require("../databaseConnexion/sqlservercon"));
class City extends sequelize_1.Model {
}
exports.City = City;
City.init({
    cpCityID: {
        type: sequelize_1.DataTypes.NUMBER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
    },
    nameCity: { type: sequelize_1.DataTypes.STRING, allowNull: false }
}, {
    tableName: "Cities",
    sequelize: sqlservercon_1.default,
});
//City.sync({force: true}).then(() => console.log("Roles table created"));
