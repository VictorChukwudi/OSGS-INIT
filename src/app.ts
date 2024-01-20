import express ,{Application} from "express"
import dotenv from "dotenv"
import { sequelize } from "./app.config/db.connection"


dotenv.config()

const app : Application= express()
const port= process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.json({
        msg:" up and running"
    })
})

const start= async():Promise<void>=>{
try {
    app.listen(port,()=>{
        console.log(`Server running on port ${port}...`)
    })
    await sequelize.sync()
} catch (error) {
    console.error(error)
    process.exit(1)
}
}


start()