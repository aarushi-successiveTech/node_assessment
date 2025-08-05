import express, { NextFunction } from 'express'; 
import { connectDB } from './config/db';
const PORT = 3000; 
const app = express(); 

//routes
import addRoute from './routes/addRoute';
import readId from './routes/readId';
import updateRoute from './routes/updateRoute';
import deleteRoute from './routes/deleteStudent';
import addUserRoute from './routes/addUser';
import limitedRoutes from './routes/limitedRoute';

//app
app.use(express.json()); 

app.use('/', addRoute); 
app.use('/', readId); 
app.use('/', updateRoute); 
app.use('/', deleteRoute); 
app.use('/', addUserRoute); 
app.use('/', limitedRoutes); 

//connect db 
connectDB(); 

//server 
app.listen(PORT, ()=>{
    console.log(`running at port http://localhost:${PORT}`);
});