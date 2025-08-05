"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerUser_1 = require("../middlewares/registerUser");
const addUserRoute = express_1.default.Router();
addUserRoute.post('/addUser', registerUser_1.registerUser);
exports.default = addUserRoute;
