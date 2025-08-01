import express, {Router} from 'express'; 
import { getStudentId } from '../middlewares/getStudentId';

const readId = express.Router(); 
readId.get('/readId/:id', getStudentId); 

export default readId; 