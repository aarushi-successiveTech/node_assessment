import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
    user? : any; 
}

export const authRole = (...allowedRole: string[]) => {
    return async(req: AuthRequest, res: Response, next: NextFunction) => {

        const userRole = req.user.role; 

        if(!userRole && !allowedRole.includes(userRole)){
            return res.status(400).json({
                message: 'not valid role'
            }); 
        }

        next(); 
    }
}