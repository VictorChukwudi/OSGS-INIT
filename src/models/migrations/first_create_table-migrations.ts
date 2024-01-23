// import { Sequelize, DataType} from "sequelize-typescript"
import { Sequelize, DataTypes } from "sequelize";
import { Migration } from "../index.umzug"


export  const up: Migration =async ({ context: queryInterface}) => {
    await queryInterface.createTable("Boards",{
        id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        description:{
            type:DataTypes.STRING
        },
        imageURL:{
            type:DataTypes.STRING
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    })
}

export const down: Migration =async ({context: queryInterface}) => {
    await queryInterface.dropTable("Boards")
}
