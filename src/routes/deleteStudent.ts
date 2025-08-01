import express, { Router } from "express";
import { deleteStudent } from "../middlewares/deleteStudent";
import { authToken } from "../middlewares/authToken";
import { authRole } from "../middlewares/authRole";

const deleteRoute = express.Router(); 
deleteRoute.delete('/delete/:id',authToken, authRole('admin'), deleteStudent); 

export default deleteRoute; 