"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const userValidation_1 = require("../utils/userValidation");
const User = require('../models/userModel');
const registerUser = async (req, res, next) => {
    const { error } = userValidation_1.userValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'invalid data entry' });
    }
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json({
            message: 'user added successfully',
            name: newUser.name,
            id: newUser._id,
            email: newUser.email,
            role: newUser.role
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'error adding user'
        });
    }
};
exports.registerUser = registerUser;
