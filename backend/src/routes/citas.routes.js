import { Router } from 'express';
import { getAllCitas, getAllCitasByUser, agregarCita } from '../controllers/citas.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();


router.get('/citas', getAllCitas);
router.get('/citas/user', authRequired, getAllCitasByUser);
router.post('/citas/user', agregarCita);

export default router;