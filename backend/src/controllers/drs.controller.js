import Especialidades from "../models/especialidad.models.js";

export const getEspecialidades = async (req, res) => {
    try {
        const especialidades = await Especialidades.find();
        res.json(especialidades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }