"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getStudentId_1 = require("../middlewares/getStudentId");
const readId = express_1.default.Router();
readId.get('/readId/:id', getStudentId_1.getStudentId);
exports.default = readId;
