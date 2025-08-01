import { Request, Response, NextFunction } from "express";
import { studentValidation } from "../utils/studentValidation";
const Student = require('../models/studentModel'); 

export const updateStudent = async(req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id; 

    try{
        const updated = await Student.findByIdAndUpdate(id, req.body, {new: true}); 
        res.status(200).json({
            message: 'updated successfully', 
            updated
        });
    }
    catch(error){
        return res.status(500).json({
            message: 'cannot update student'
        }); 
    }
}