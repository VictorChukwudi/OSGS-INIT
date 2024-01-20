import {Sequelize} from "sequelize-typescript"
import dotenv from "dotenv"


dotenv.config()

export const sequelize = new Sequelize({
    database: process.env.DB,
    dialect:"postgres",
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST
})
