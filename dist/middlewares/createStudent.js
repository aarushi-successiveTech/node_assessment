"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const Student = require('../models/studentModel');
const studentValidation_1 = require("../utils/studentValidation");
const createStudent = async (req, res, next) => {
    const { error, value } = studentValidation_1.studentValidation.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: 'invalid student data'
        });
    }
    try {
        const newStdudent = new Student(value);
        await newStdudent.save();
        return res.status(200).json({
            message: 'student added successfully',
            name: newStdudent.name,
            email: newStdudent.email
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'something went wrong'
        });
    }
};
exports.createStudent = createStudent;
