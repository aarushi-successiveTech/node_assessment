import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

const secret = process.env.JWT_KEY as string; 


export interface AuthRequest extends Request {
    user? : any; 
}

export const authToken = async(req:AuthRequest, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization; 

    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(400).json({
            message: 'not a valid token'
        }); 
    }

    try{
        const verified = jwt.verify(token, secret); 
        req.user = verified; 
        next() ; 
        res.status(200).json({
            message: 'user access successful'
        })
    }
    catch(error){
        return res.status(500).json({
            message: 'something went wrong',
        }); 
    }
}