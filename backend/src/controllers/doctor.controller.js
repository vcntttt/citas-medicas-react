import { Cita }  from '../models/citas.model.js';
import { Doctor } from '../models/doctores.model.js';

export const getDoctors = async (req, res) => {
    try {
        const citas = await Cita.find().select('doctor -_id');
        const doctorIds = citas.map(cita => cita.doctor);
        const uniqueDoctorIds = [...new Set(doctorIds)];

        // Encuentra los doctores correspondientes
        const doctores = await Doctor.find({ _id: { $in: uniqueDoctorIds } });

        res.json(doctores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los doctores', error: error.message });
    }
}


export const agregarDoctor = async (req, res) => {
    try {
        const { nombre, apellido, especialidad } = req.body;

        // Crea una instancia de Doctor con los datos proporcionados
        const nuevoDoctor = new Doctor({
            nombre,
            apellido,
            especialidad
        });

        // Guarda el nuevo doctor en la base de datos
        const doctorGuardado = await nuevoDoctor.save();

        res.status(201).json(doctorGuardado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el doctor', error: error.message });
    }
}




