import {Cita} from '../models/citas.model.js';
import {Doctor} from '../models/doctores.model.js';
import {Paciente} from '../models/paciente.model.js';
import User from '../models/user.model.js';


export const getAllCitas = async (req, res) => {
    try {
        const citas = await Cita.find();
        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las citas', error: error.message });
    }
};


export const agregarCita = async (req, res) => {
    try {
        const { pacienteId, doctorId, horaInicio, horaFin, estado, sala } = req.body;

        const nuevaCita = new Cita({
            paciente: pacienteId,
            doctor: doctorId,
            horaInicio,
            horaFin,
            estado,
            sala,
        });

        const citaGuardada = await nuevaCita.save();
        res.status(201).json(citaGuardada);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la cita', error: error.message });
    }
};



export const getCitasByEspecialidad = async (req, res) => {
    try {
        const especialidad = req.params.especialidad;
        const doctores = await Doctor.find({ especialidad });
        const doctorIds = doctores.map((doctor) => doctor._id);
        const citas = await Cita.find({ doctor: { $in: doctorIds } });
        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las citas', error: error.message });
    }
};



export const pickDate = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        const paciente = await Paciente.findOne({ email: user.email });

        if (!paciente) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const citaId = req.params.citaId;
        const cita = await Cita.findById(citaId);

        if (!cita) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }

        if (cita.estado) {
            return res.status(400).json({ message: 'La cita ya fue tomada' });
        }

        cita.paciente = paciente._id;
        cita.estado = true;

        await cita.save();
        res.status(200).json(await cita.save());
    } catch (error) {
        res.status(500).json({ message: 'Error al tomar la cita', error: error.message });
    }
};



export const cancelDate = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        const email = user.email;
        const citaId = req.params.citaId;
        const cita = await Cita.findById(citaId);

        if (!cita) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }

        const paciente = await Paciente.findOne({ email });

        if (!paciente) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (cita.paciente.toString() !== paciente._id.toString()) {
            return res.status(404).json({ message: 'Cita y usuario no coinciden' });
        }

        cita.paciente = undefined;
        cita.estado = false;

        await cita.save();
        res.status(200).json(await cita.save());
    } catch (error) {
        res.status(500).json({ message: 'Error al cancelar la cita', error: error.message });
    }
};
