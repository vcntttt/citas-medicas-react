import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js'


export const register = async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;


    if (password !== passwordConfirmation) {
        return res.status(400).json({ message: "La contraseña y la confirmación de contraseña no coinciden" });
    }

    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const login = async (req, res) => {
    const { email, password } = req.body

    try {

        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: "user not found" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "incorrect password" });


        const token = await createAccesToken({ id: userFound._id });
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}


export const profile = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({
            id: user._id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
            rut: user.rut,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const updateProfile = async (req, res) => {
    const userId = req.user.id;
    const { nombre, apellido, rut, role } = req.body;

    try {
        const existingUserWithRut = await User.findOne({ rut: rut, _id: { $ne: userId } });
        if (existingUserWithRut) {
            return res.status(400).json({ message: 'Ya existe un usuario con este RUT.' });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { nombre, apellido, rut, role },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({
            id: user._id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
            rut: user.rut,
            role: user.role, 
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};