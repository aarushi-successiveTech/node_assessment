import express, {Router} from 'express'; 
import { updateStudent } from '../middlewares/updateStudent';
import { authToken } from '../middlewares/authToken';
import { authRole } from '../middlewares/authRole';

const updateRoute = express.Router(); 

updateRoute.put('/update/:id',authToken, authRole('admin'), updateStudent); 

export default updateRoute; 