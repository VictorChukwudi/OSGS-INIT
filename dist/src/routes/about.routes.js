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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const board_model_1 = require("../models/board.model");
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, imageURL } = req.body;
        const [member, created] = yield board_model_1.Boards.findOrCreate({
            where: { email },
            defaults: { name, email, imageURL },
        });
        if (!created) {
            res.status(400);
            throw new Error("Email already registered.");
        }
        else {
            res.status(200).json({
                status: "success",
                data: member
            });
        }
    }
    catch (error) {
        res.json({
            status: "error",
            msg: error.message
        });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield board_model_1.Boards.findAll();
        res.status(200).json({
            status: "success",
            data: members
        });
    }
    catch (error) {
        res.json({
            status: "error",
            msg: error.message
        });
    }
}));
exports.default = router;
