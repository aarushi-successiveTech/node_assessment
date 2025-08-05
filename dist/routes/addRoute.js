"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createStudent_1 = require("../middlewares/createStudent");
const addRoute = express_1.default.Router();
addRoute.post('/add', createStudent_1.createStudent);
exports.default = addRoute;
