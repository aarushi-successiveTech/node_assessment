"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateStudent_1 = require("../middlewares/updateStudent");
const updateRoute = express_1.default.Router();
updateRoute.put('/update/:id', updateStudent_1.updateStudent);
exports.default = updateRoute;
