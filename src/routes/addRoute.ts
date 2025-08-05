import express, {Router} from 'express'; 
import { createStudent } from '../middlewares/createStudent';
import { authToken } from '../middlewares/authToken';
import { authRole } from '../middlewares/authRole';

const addRoute = express.Router(); 

addRoute.post('/add', authToken, authRole('admin') ,createStudent); 

export default addRoute; 