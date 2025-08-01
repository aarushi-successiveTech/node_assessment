import express, { Router } from "express";
import { deleteStudent } from "../middlewares/deleteStudent";

const deleteRoute = express.Router(); 
deleteRoute.delete('/delete/:id', deleteStudent); 

export default deleteRoute; 