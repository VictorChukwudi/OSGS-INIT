import { Umzug, SequelizeStorage} from "umzug"
import { sequelize } from "../app.config/db.connection";



export const umzug= new Umzug({
    migrations:{
        glob:[
            'migrations/*.ts',
            {
                cwd: __dirname,
            },
        ],
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({sequelize}),
    logger: console,
})

export type Migration = typeof umzug._types.migration;

