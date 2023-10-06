import { Router } from 'express';
import { getAllCitas,agregarCita, getCitasByEspecialidad, pickDate } from '../controllers/citas.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();


router.get('/citas', getAllCitas);
router.post('/citas/add', agregarCita);
router.get('/citas/especialidad/:especialidad', getCitasByEspecialidad);
router.put('/citas/pick/:citaId', authRequired, pickDate);

// router.get('/citas/user/:email', getCitasByUser);

export default router;