import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';


export function createAccesToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1h",
                algorithm: "HS256"
            },
            (err, token) => {
                if (err) console.log(err)
                resolve(token)
            }
        );
    });
}