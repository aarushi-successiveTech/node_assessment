import { Request, Response, NextFunction } from "express";
const Student = require('../models/studentModel'); 
import { studentValidation } from "../utils/studentValidation";

export const createStudent = async(req: Request, res: Response, next: NextFunction) => {
    const {error, value} = studentValidation.validate(req.body); 

    if(error){
        return res.status(400).json({
            message: 'invalid student data'
        }); 
    }

    try{
        const newStdudent = new Student(value); 
        await newStdudent.save(); 
        return res.status(200).json({
            message: 'student added successfully', 
            name : newStdudent.name, 
            email : newStdudent.email
        }); 
    }
    catch(error){
        console.log(error); 
        return res.status(500).json({
            message: 'something went wrong'
        }); 
    }
}