import Cita from '../models/citas.model.js';


export const getDoctors = async (req, res) => {
    try {
      const citas = await Cita.find().select('doctor -_id');
      const doctores = citas.map(cita=>cita.doctor);
      const uniqueDoctors = [...new Set(doctores)];
      res.json(uniqueDoctors);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los doctores', error: error.message });
    }
}

export const getEspecialidades = async (req, res) => {
    try {
      const citas = await Cita.find().select('doctor.especialidad -_id');
      const especialidades = citas.map(cita=>cita.doctor.especialidad);
      const uniqueEspecialidades = [...new Set(especialidades)];
      res.json(uniqueEspecialidades);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las especialidades', error: error.message });
    }
}