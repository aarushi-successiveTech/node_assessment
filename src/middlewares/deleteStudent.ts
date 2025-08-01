import { Request, Response, NextFunction } from "express";
const Student = require('../models/studentModel'); 

export const deleteStudent = async(req: Request, res: Response, next: NextFunction) =>{

    const id = req.params.id;

    try{
        const deleted = await Student.findByIdAndDelete(id); 
        return res.status(200).json({
            message: 'student deleted successfully', 
            deleted
        })
    }
    catch(error){
        return res.status(500).json({
            message: 'student not successfully deleted'
        }); 
    }
}