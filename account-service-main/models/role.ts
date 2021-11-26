import {Model, DataTypes, Sequelize} from "sequelize";
// @ts-ignore
import sequelizeSQL from "../databaseConnexion/sqlservercon";
import {User} from "./user";

export class Role extends Model {
    public role!: string;
}

export interface RolesInterface {
    role: string;
}

Role.init(
    {
        role: {
            type: DataTypes.STRING,
            autoIncrement: false,
            allowNull:false,
            primaryKey: true,
        }
    },
    {
        tableName: "Roles",
        sequelize: sequelizeSQL,
    }
);

//Role.sync({force: true}).then(() => console.log("Roles table created"));