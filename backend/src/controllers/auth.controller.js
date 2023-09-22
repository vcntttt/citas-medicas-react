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

        res.cookie('token', token,{
            httpOnly: true,
            secure : true,
            sameSite: 'None'
        });
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
        if (!userFound) return res.status(400).json(["Usuario no encontrado"]);

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "incorrect password" });


        const token = await createAccesToken({ id: userFound._id });
        res.cookie("token", token,{
            httpOnly: true,
            secure : true,
            sameSite: 'None',
            path: '/'
        });
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