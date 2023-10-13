import { Router } from 'express';
import {
    login,
    register, 
    resendToken, 
    verify as verifyToken
} from '../controllers/auth.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.get("/verify", verifyToken);

router.get('/resend/:userEmail', resendToken);

export default router;