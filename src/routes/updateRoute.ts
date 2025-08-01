import express, {Router} from 'express'; 
import { updateStudent } from '../middlewares/updateStudent';

const updateRoute = express.Router(); 

updateRoute.put('/update/:id', updateStudent); 

export default updateRoute; 