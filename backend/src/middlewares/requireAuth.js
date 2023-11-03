import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'


export const authRequired = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: "No autorizado" });
    
    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: "No autorizado" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Token no valido" });

        req.user = user

        next();
    })
}