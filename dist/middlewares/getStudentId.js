"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentId = void 0;
const Student = require('../models/studentModel');
const getStudentId = async (req, res, next) => {
    try {
        const std = await Student.findById(req.params.id);
        return res.status(200).json({
            message: 'student fetched successfully',
            std
        });
    }
    catch (error) {
        return res.status(400).json({
            message: 'wrong id requested',
        });
    }
};
exports.getStudentId = getStudentId;
