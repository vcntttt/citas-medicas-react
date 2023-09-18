import { Router } from 'express';
import {
    login,
    register,
    logout,
    profile,
    updateProfile
} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js'


const router = Router()

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout)

router.get("/profile", authRequired, profile);

router.put('/profile', authRequired, updateProfile);


export default router;