"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const PORT = 3000;
const app = (0, express_1.default)();
//routes
const addRoute_1 = __importDefault(require("./routes/addRoute"));
const readId_1 = __importDefault(require("./routes/readId"));
const updateRoute_1 = __importDefault(require("./routes/updateRoute"));
const deleteStudent_1 = __importDefault(require("./routes/deleteStudent"));
const addUser_1 = __importDefault(require("./routes/addUser"));
//app
app.use(express_1.default.json());
app.use('/', addRoute_1.default);
app.use('/', readId_1.default);
app.use('/', updateRoute_1.default);
app.use('/', deleteStudent_1.default);
app.use('/', addUser_1.default);
//connect db 
(0, db_1.connectDB)();
//server 
app.listen(PORT, () => {
    console.log(`running at port http://localhost:${PORT}`);
});
