"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudent = void 0;
const Student = require('../models/studentModel');
const updateStudent = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updated = await Student.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: 'updated successfully',
            updated
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'cannot update student'
        });
    }
};
exports.updateStudent = updateStudent;
