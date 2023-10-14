import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js'
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


export const register = async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;


    if (password !== passwordConfirmation) {
        return res.status(400).json({ message: "La contraseña y la confirmación de contraseña no coinciden" });
    }

    try {
        const userFound = await User.findOne({ email})
        if (userFound) {
            return res.status(400).json(["El email ya esta en uso" ]);
        }
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
            role : userSaved.role
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
        if (!isMatch) return res.status(400).json({ message: "incorrect password" });


        const token = await createAccesToken({ id: userFound._id });
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
            role : userSaved.role
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const verify = async(req, res) => {
    const{token} = req.cookies

    if (!token) {
        return res.sendStatus(401)
        .json({ message: "No autorizado" });}
        
    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) {
            return res.sendStatus(401).json({ message: "No autorizado" });
        }
        const userFound = await User.findById(user.id);
        if (!userFound) {
            return res.sendStatus(401).json({ message: "No autorizado" });
        }
        res.json({
            id: userFound._id,
            email: userFound.email,
    })
})}

export const resendToken = async (req, res) => {
    try {
        const userEmail = req.params.userEmail;
        if (!userEmail) {
            return res.status(400).json(["Email no encontrado"]);
        }
        const user = await User.findOne({email: userEmail});
        if (!user) {
            return res.status(400).json(["Usuario no encontrado"]);
        }
        const token = await createAccesToken({ id: user._id });
        res.cookie("token", token);
        res.json({
            token: token
        })
    } catch (error) {
        console.error(error);
    }
}