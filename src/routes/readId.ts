import express, {Router} from 'express'; 
import { getStudentId } from '../middlewares/getStudentId';
import { authToken } from '../middlewares/authToken';
import { authRole } from '../middlewares/authRole';

const readId = express.Router(); 
readId.get('/readId/:id',authToken, authRole('admin'), getStudentId); 

export default readId; 