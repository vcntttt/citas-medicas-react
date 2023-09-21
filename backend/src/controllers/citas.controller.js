import Cita from '../models/cita.model.js';




export const getAllCitas = async (req, res) => {
    try {
        const citas = await Cita.find();
        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las citas', error: error.message });
    }
};



export const getAllCitasByUser = async (req, res) => {
    try {
       
        const userId = req.user.id;

        const citas = await Cita.find({ paciente: userId });

        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las citas', error: error.message });
    }
};



export const agregarCita = async (req, res) => {
    try {
      const { paciente, doctor, especialidad, fecha, horaInicio, horaFin, estado } = req.body;
  
      const nuevaCita = new Cita({
        paciente,
        doctor,
        especialidad,
        fecha,
        horaInicio,
        horaFin,
        estado,
      });
      const citaGuardada = await nuevaCita.save();
  
      res.status(201).json(citaGuardada);
    } catch (error) {
      res.status(500).json({ message: 'Error al agregar la cita', error: error.message });
    }
  };