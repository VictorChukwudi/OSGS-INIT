// import { Sequelize, DataType} from "sequelize-typescript"
import { Sequelize, DataTypes } from "sequelize";
import { Migration } from "../index.umzug"


export  const up: Migration =async ({ context: queryInterface}) => {
    await queryInterface.createTable("Programmes",{
        id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
        },
        theme:{
            type:DataTypes.STRING
        },
        type:{
            type:DataTypes.STRING
        },
        schedule:{
            type:DataTypes.STRING
        },
        start_date:{
            type:DataTypes.DATE
        },
        start_end:{
            type:DataTypes.DATE
        },
        duration:{
            type:DataTypes.STRING
        },
        completed:{
            type:DataTypes.BOOLEAN
        },
        fileURL:{
            type: DataTypes.STRING
        },
        hasNstdProgram:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    })
}

export const down: Migration =async ({context: queryInterface}) => {
    await queryInterface.dropTable("Programmes")
}
