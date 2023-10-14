import { Router } from 'express';
import {getEspecialidades, getDoctors, registerDr, newDateAsDr, getInfoDoctor, getCitasDoctor} from "../controllers/drs.controller.js";
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.get("/especialidades", getEspecialidades)
router.get('/drs', getDoctors);
router.post('/register/dr', registerDr)
router.post('/citas/add/dr',authRequired ,newDateAsDr)
router.get('/profile/dr', authRequired, getInfoDoctor)
router.get('/citas/dr', authRequired, getCitasDoctor)
export default router;
