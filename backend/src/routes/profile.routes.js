import { Router } from 'express';

import { profile, updateProfile, getUserDates } from '../controllers/profile.controller.js';
import { authRequired } from '../middlewares/validateToken.js';



const router = Router();

router.get('/profile', profile);
router.put('/profile', updateProfile);
router.get('/profile/dates', authRequired, getUserDates)


export default router;