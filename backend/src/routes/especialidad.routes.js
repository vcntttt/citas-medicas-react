import { Router } from 'express';
import { agregarEspecialidad } from '../controllers/especialidad.controller.js';

const router = Router();

router.post('/especialidades/add', agregarEspecialidad);

export default router;