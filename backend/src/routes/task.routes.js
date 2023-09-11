import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, createTask, updateTask, deleteTask, } from '../middlewares/validateToken.js'



const router = Router()

router.get('/tasks', authRequired, getTasks)

router.get('/tasks', authRequired, getTask)

router.post('/tasks/:id', authRequired, createTask)

router.delete('/tasks/:id', authRequired, deleteTask)

router.put('/tasks/:id', authRequired, updateTask)


export default router