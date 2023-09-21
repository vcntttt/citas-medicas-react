import { Router } from 'express';
import { profile, updateProfile } from "../controllers/profile.controller.js";
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.get("/profile", authRequired, profile);

router.put('/profile', authRequired, updateProfile);

export default router;
