"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
// @ts-ignore
const sqlservercon_1 = __importDefault(require("../databaseConnexion/sqlservercon"));
class Role extends sequelize_1.Model {
}
exports.Role = Role;
Role.init({
    role: {
        type: sequelize_1.DataTypes.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
    }
}, {
    tableName: "Roles",
    sequelize: sqlservercon_1.default,
});
//Role.sync({force: true}).then(() => console.log("Roles table created"));
