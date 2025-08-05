import { Request, Response, NextFunction } from "express";
import { userValidation } from "../utils/userValidation";
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; 
const User = require('../models/userModel'); 
import dotenv from 'dotenv'; 
dotenv.config(); 

const secret = process.env.JWT_KEY as string; 

export const loginUser = async(req: Request, res: Response, next: NextFunction) => {

    const {error, value} = userValidation.validate(req.body); 

    if(error){
        return res.status(400).json({
            message: 'invalid user entry'
        }); 
    }

    try{

        const existing = await User.find({email : value.email});

        if(existing){
            const confirmPassword = await bcrypt.compare(value.password, existing.password);

            if(!confirmPassword){
                return res.status(400).json({
                    message: 'not valid password'
                }); 
            }
            const token  = jwt.sign({
                    usreId: existing._id, name: existing.name, role: existing.role
                }, secret); 
            return res.status(200).json({
                message: 'user logged in successfully', token
            }); 
            
        }

    }
    catch(error){
        return res.status(500).json({
            message: 'not a valid user'
        }); 
    }

}