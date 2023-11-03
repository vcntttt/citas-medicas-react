import { Router } from 'express';
import { getEspecialidades, getDoctors, registerDr, newDateAsDr, getCitasDoctor, eliminarCita, newDateAsAdmin } from "../controllers/drs.controller.js";
import { authRequired } from '../middlewares/requireAuth.js'

const router = Router()

router.get("/especialidades", getEspecialidades)
router.get('/drs', getDoctors);
router.post('/register/dr', registerDr)
router.post('/citas/add/dr', authRequired, newDateAsDr)
router.post('/citas/add/admin', authRequired, newDateAsAdmin)
router.get('/citas/dr', authRequired, getCitasDoctor)
router.delete('/citas/:citaId', authRequired, eliminarCita);

export default router;
