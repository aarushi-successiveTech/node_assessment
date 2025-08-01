import express, { Router } from "express";
import { registerUser } from "../middlewares/registerUser";

const addUserRoute = express.Router(); 
addUserRoute.post('/addUser', registerUser); 

export default addUserRoute; 