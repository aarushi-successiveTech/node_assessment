"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URL = 'mongodb://localhost:27017/nodeAssess';
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(DB_URL);
        console.log('mongoDB connected');
    }
    catch (error) {
        console.log('error connecting to DB');
    }
};
exports.connectDB = connectDB;
