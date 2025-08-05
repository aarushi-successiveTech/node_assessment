import express, { Router } from "express";
import { pageMiddleware } from "../middlewares/pagination";

const limitedRoutes = express.Router();

limitedRoutes.get('/limited', pageMiddleware); 

export default limitedRoutes; 