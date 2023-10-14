import { Router } from 'express';
import { getDoctors, agregarDoctor } from "../controllers/doctor.controller.js";

const router = Router();


router.get('/drs', getDoctors);
router.post('/drs', agregarDoctor);

export default router;