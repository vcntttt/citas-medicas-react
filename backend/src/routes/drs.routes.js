import { Router } from 'express';
import {getEspecialidades, getDoctors, registerDr, newDateAsDr} from "../controllers/drs.controller.js";
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.get("/especialidades", getEspecialidades)
router.get('/drs', getDoctors);
// router.post('/drs/add', agregarDoctor)
router.post('/register/dr', registerDr)
router.post('/citas/add/dr',authRequired ,newDateAsDr)
export default router;
