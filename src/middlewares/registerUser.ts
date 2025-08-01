import { Request, Response, NextFunction } from "express";
import { userValidation } from "../utils/userValidation";
const User = require('../models/userModel'); 

export const registerUser = async(req: Request, res: Response, next: NextFunction) => {

    const {error} = userValidation.validate(req.body); 

    if(error){
        return res.status(400).json({message: 'invalid data entry'});
    }

    try{
        const newUser = new User(req.body); 
        await newUser.save(); 
        return res.status(200).json({
            message: 'user added successfully', 
            name : newUser.name, 
            id : newUser._id,
            email: newUser.email, 
            role : newUser.role
        }); 
    }
    catch(error){
        return res.status(500).json({
            message: 'error adding user'
        }); 
    }
}

