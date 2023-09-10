import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';

const router = Router()

router.post('/register', register)
router.login('/login', login)

export default router;