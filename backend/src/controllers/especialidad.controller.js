import { Especialidad } from '../models/especialidad.model.js';

export const agregarEspecialidad = async (req, res) => {
    try {
        const { nombre} = req.body;

        const nuevaEspecialidad = new Especialidad({
            nombre,
        });

        const especialidadGuardada = await nuevaEspecialidad.save();

        res.status(201).json(especialidadGuardada);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la especialidad', error: error.message });
    }
};