import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    if (password !== passwordConfirmation) {
        return res.status(400).json({ message: "La contraseña y la confirmación de contraseña no coinciden" });
    }
    try {
        const userFound = await User.findOne({ email })
        if (userFound) {
            return res.status(400).json(["El email ya esta en uso"]);
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password: passwordHash,
        });
        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });
        res.json({
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json(["Usuario no encontrado"]);
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });
        const token = await createAccesToken({ id: userFound._id });
        res.json({
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};