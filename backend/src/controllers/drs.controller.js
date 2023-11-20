import Cita from '../models/citas.model.js';
import { Doctor } from '../models/citas.model.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js'

export const getDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor'});
    res.json(doctors);

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los doctores', error: error.message });
  }
}

export const getEspecialidades = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor'});
    const especialidades = doctors.map(doctor => doctor.especialidad);
    const uniqueEspecialidades = [...new Set(especialidades)];
    res.json(uniqueEspecialidades);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las especialidades', error: error.message });
  }
}

export const registerDr = async (req, res) => {
  const { email, password, passwordConfirmation, rut,
    nombre, apellido, especialidad} = req.body;
  if (password !== passwordConfirmation) {
    return res.status(400).json({ message: "La contraseña y la confirmación de contraseña no coinciden" });
  }
  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).json(["El email ya esta en uso"]);
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      nombre,
      apellido,
      password: passwordHash,
      rut,
      role: 'doctor',
      especialidad,
    });
    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });
    res.json({
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newDateAsDr = async (req, res) => {
  try {
    const { paciente, horaInicio, horaFin, estado, sala } = req.body;
    const userId = req.user.id
    const doctor = await User.findById(userId);
    if (!doctor) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      console.log(doctor)
    }
    const citaExistente = await Cita.findOne({
      sala,
      $or: [
        { horaInicio: { $gte: horaInicio, $lt: horaFin } }, 
        { horaFin: { $gt: horaInicio, $lte: horaFin } },
        { $and: [{ horaInicio: { $lte: horaInicio } }, { horaFin: { $gte: horaFin } }] }, 
      ],
    });

    if (citaExistente) {
      return res.status(400).json({ message: 'Ya existe una cita en esa hora y sala' });
    }
    const nuevaCita = new Cita({
      paciente,
      doctor : {
        email: doctor.email,
        nombre: doctor.nombre,
        apellido: doctor.apellido,
        especialidad: doctor.especialidad
      },
      horaInicio,
      horaFin,
      estado,
      sala
    });
    const citaGuardada = await nuevaCita.save();
    res.status(201).json(citaGuardada);
  } catch (error) {
    res.status(500).json({ message: 'Error al tomar la cita', error: error.message });
  }
}

export const newDateAsAdmin = async (req, res) => {
  try {
    const { doctor, horaInicio, horaFin, estado, sala } = req.body;
    const citaExistente = await Cita.findOne({
      sala,
      $or: [
        { horaInicio: { $gte: horaInicio, $lt: horaFin } }, 
        { horaFin: { $gt: horaInicio, $lte: horaFin } },
        { $and: [{ horaInicio: { $lte: horaInicio } }, { horaFin: { $gte: horaFin } }] }, 
      ],
    });

    if (citaExistente) {
      return res.status(400).json({ message: 'Ya existe una cita en esa hora y sala' });
    }
    const nuevaCita = new Cita({
      doctor,
      horaInicio,
      horaFin,
      estado,
      sala
    });
    const citaGuardada = await nuevaCita.save();
    res.status(201).json(citaGuardada);
  } catch (error) {
    res.status(500).json({ message: 'Error al tomar la cita', error: error.message });
  }
}

export const getCitasDoctor = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const citas = await Cita.find({ 'doctor.email': user.email });
    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const eliminarCita = async (req, res) => {
  try {
    const citaId = req.params.citaId;
    const userId = req.user.id;
    const user = await User.findById(userId);
    const cita = await Cita.findOne({ _id: citaId, 'doctor.email': user.email });
    if (!cita) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }
    await Cita.findByIdAndRemove(citaId);
    res.json({ message: 'Cita eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};