import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import {Role} from "./role";
import {City} from "./city";

// @ts-ignore
import sequelizeDB from '../databaseConnexion/sqlservercon';

export class User extends Model {
    public idUser!: number;
    public firstnameUser !: string;
    public lastnameUser !:string;
    public email!:string;
    public nameUser!:string;
    public siretUser!:number;
    public addressUser!:string
    public mpUser!: string;
    public pointsUser!:number;
    public isSponsorUser!:boolean;
    public isSponsorisedUser!:boolean;
    public role_idRole!:string;
    public cpCityID!:number;
}

export interface UserInterface {
    idUser: number,
    firstnameUser : string,
    lastnameUser :string,
    email:string,
    phone_number:string,
    nameUser:string,
    siretUser:number,
    addressUser:string,
    mpUser: string,
    pointsUser:number,
    isSponsorUser:boolean,
    isSponsorisedUser:boolean,
    role_idRole:string,
    cpCityID:number;
}

User.init(
    {
        idUser:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
        },
        firstnameUser : { type: DataTypes.STRING, allowNull:true },
        lastnameUser: { type: DataTypes.STRING, allowNull:true },
        email: { type: DataTypes.STRING, allowNull:true },
        userPhone:{type: DataTypes.STRING, allowNull:true},
        nameUser:{ type: DataTypes.STRING, allowNull:true },
        siretUser:{ type: DataTypes.INTEGER, allowNull:true },
        addressUser:{ type: DataTypes.STRING, allowNull:true },
        mpUser:{ type: DataTypes.STRING, allowNull:false },
        pointsUser:{ type: DataTypes.INTEGER, allowNull:false, defaultValue: false },
        isSponsorUser:{ type: DataTypes.BOOLEAN, allowNull:false, defaultValue: false },
        isSponsorisedUser:{ type: DataTypes.BOOLEAN, allowNull:false, defaultValue: false },
        role_idRole:{ type: DataTypes.STRING, allowNull:false },
        cpCityID:{ type: DataTypes.INTEGER, allowNull:false }
    },
    {
        tableName: "Users",
        sequelize: sequelizeDB, // this bit is important
    }
)

User.belongsTo(Role,{foreignKey: 'role_idRole'});
User.belongsTo(City,{foreignKey: 'cpCityID'});

//User.sync({force: true}).then(() => console.log("User table created"));
