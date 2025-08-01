import express, {Router} from 'express'; 
import { createStudent } from '../middlewares/createStudent';

const addRoute = express.Router(); 

addRoute.post('/add', createStudent); 

export default addRoute; 