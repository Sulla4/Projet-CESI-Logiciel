import {Model, DataTypes, Sequelize} from "sequelize";
// @ts-ignore
import sequelizeSQL from "../databaseConnexion/sqlservercon";
import {User} from "./user";

export class City extends Model {
    public cpCityID!: number;
    public nameCity!:string;
}

export interface CitiesInterface {
    cpCityID: number;
    nameCity:string;
}

City.init(
    {
        cpCityID: {
            type: DataTypes.NUMBER,
            autoIncrement: false,
            allowNull:false,
            primaryKey: true,
        },
        nameCity: {type: DataTypes.STRING,allowNull:false}
    },
    {
        tableName: "Cities",
        sequelize: sequelizeSQL,
    }
);

//City.sync({force: true}).then(() => console.log("Roles table created"));