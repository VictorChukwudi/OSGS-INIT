// import { Sequelize, DataType} from "sequelize-typescript"
import { Sequelize, DataTypes } from "sequelize";
import { Migration } from "../index.umzug"


export  const up: Migration =async ({ context: queryInterface}) => {
    await queryInterface.createTable("NstdProgrammes",{
        id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type:DataTypes.STRING
        },
        type:{
            type:DataTypes.STRING
        },
        completed:{
            type:DataTypes.BOOLEAN
        },
        recordingURL:{
            type: DataTypes.STRING
        },
        liveURL:{
            type: DataTypes.STRING
        },
        fileURL:{
            type: DataTypes.STRING
        },
        programId:{
            type: DataTypes.INTEGER,
            references:{
                model:"Programmes",
                key:"id"
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    })
}

export const down: Migration =async ({context: queryInterface}) => {
    await queryInterface.dropTable("NstdProgrammes")
}
