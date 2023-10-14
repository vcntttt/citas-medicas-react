import { Router } from 'express';
import {getEspecialidades, getDoctors} from "../controllers/drs.controller.js";

const router = Router()

router.get("/especialidades", getEspecialidades)
router.get('/drs', getDoctors);

export default router;
