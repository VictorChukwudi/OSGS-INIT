"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.umzug = void 0;
const umzug_1 = require("umzug");
const db_connection_1 = require("../app.config/db.connection");
exports.umzug = new umzug_1.Umzug({
    migrations: {
        glob: [
            'migrations/*.ts',
            {
                cwd: __dirname,
            },
        ],
    },
    context: db_connection_1.sequelize.getQueryInterface(),
    storage: new umzug_1.SequelizeStorage({ sequelize: db_connection_1.sequelize }),
    logger: console,
});
// export const runUmzug= async()=>{
//     try {
//         await umzug.up()
//     } catch (error) {
//         console.error(error)
//     }
// }
