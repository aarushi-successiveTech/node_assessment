import { Request, Response } from "express";
const Stud = require('../models/studentModel'); 

export const pageMiddleware = async(req: Request, res: Response) => {

    const page = parseInt(req.query.page as string) || 1 ; 
    const limit = parseInt(req.query.limit as string) || 10 ; 

    const items = await Stud.find()
    .skip((page - 1) * limit)
    .limit(limit); 

    const total = await Stud.countDocuments(); 

    res.json({
        data: items, 
        total , 
        totalPages : Math.ceil(total/limit)
    }); 
}