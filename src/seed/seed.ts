import mongoose from 'mongoose'; 
import { connectDB } from '../config/db';
const Stud = require('../models/studentModel');  

const generateItems = (count: number) => {
    const items = []; 

    for(let i = 0 ; i < count; i++){
        items.push({
            name : `item ${i}`, 
            price : `${i}`
        });
    }

    return items; 
}; 

const seedItems = async() => {
    try{
        await connectDB();

        await Stud.deleteMany(); 
        const allItems = generateItems(50); 
        await Stud.insertMany(allItems); 

        console.log('data added successfully'), 
        process.exit(0); 
    }
    catch(error){
        console.log(error); 
        process.exit(1); 
    }
}

seedItems(); 