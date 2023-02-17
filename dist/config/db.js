"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const URI = process.env.MONGO_URI || '';
console.log("connection string ", URI);
const connectDB = () => {
    mongoose_1.default.connect(URI)
        .then(() => {
        console.log("DB connected");
    }).catch((error) => {
        console.error(`Error: ${error.message}`);
    });
};
exports.default = connectDB;
