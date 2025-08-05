import { Request, Response, NextFunction } from "express";
const Student = require('../models/studentModel'); 

export const getStudentId = async(req: Request, res: Response, next: NextFunction) => {


    try{
        const std = await Student.find();
        return res.status(200).json({
            message: 'student fetched successfully', 
            std
        });  
    }
    catch(error){
        return res.status(400).json({
            message: 'wrong id requested', 
        }); 
    }

}