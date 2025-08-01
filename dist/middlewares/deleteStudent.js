"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = void 0;
const Student = require('../models/studentModel');
const deleteStudent = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deleted = await Student.findByIdAndDelete(id);
        return res.status(200).json({
            message: 'student deleted successfully',
            deleted
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'student not successfully deleted'
        });
    }
};
exports.deleteStudent = deleteStudent;
