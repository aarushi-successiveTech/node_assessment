import mongoose from 'mongoose';
const DB_URL = 'mongodb://localhost:27017/nodeAssess'; 

export const connectDB = async() =>{

    try{
        await mongoose.connect(DB_URL);
        console.log('mongoDB connected');
    }
    catch(error){
        console.log('error connecting to DB');
    }

}