"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
// import { Sequelize, DataType} from "sequelize-typescript"
const sequelize_1 = require("sequelize");
const up = ({ context: queryInterface }) => __awaiter(void 0, void 0, void 0, function* () {
    yield queryInterface.createTable("Boards", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            unique: true
        },
        imageURL: {
            type: sequelize_1.DataTypes.STRING
        },
        createdAt: sequelize_1.DataTypes.DATE,
        updatedAt: sequelize_1.DataTypes.DATE
    });
});
exports.up = up;
const down = ({ context: queryInterface }) => __awaiter(void 0, void 0, void 0, function* () {
    yield queryInterface.dropTable("Boards");
});
exports.down = down;
