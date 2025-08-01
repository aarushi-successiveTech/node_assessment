import joi from "joi";

export const studentValidation = joi.object({
    name: joi.string().required(),
    age : joi.number().required(), 
    email : joi.string().required(), 
    grade: joi.string().required(), 
}); 