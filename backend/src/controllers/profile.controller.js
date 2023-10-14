import {Paciente}  from '../models/paciente.model.js';
import User from '../models/user.model.js';
import { Cita } from '../models/citas.model.js';

export const profile = async (req, res) => {
    try {
        const userId = req.user.id;

        // Buscar el usuario por su ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Obtén el paciente correspondiente basado en el correo electrónico del usuario
        const paciente = await Paciente.findOne({ email: user.email });

        if (!paciente) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }

        // Devolver los datos del usuario y paciente
        res.json({
            id: user._id,
            email: user.email,
            nombre: paciente.nombre,
            apellido: paciente.apellido,
            rut: paciente.rut,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateProfile = async (req, res) => {
    const userId = req.user.id;
    const { nombre, apellido, rut, role } = req.body;

    try {
        const existingUserWithRut = await User.findOne({ 'paciente.rut': rut, _id: { $ne: userId } });
        if (existingUserWithRut) {
            return res.status(400).json({ message: 'Ya existe un usuario con este RUT.' });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { role },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualiza los datos del paciente correspondiente
        const paciente = await Paciente.findOne({ email: user.email });
        if (paciente) {
            paciente.nombre = nombre;
            paciente.apellido = apellido;
            paciente.rut = rut;
            await paciente.save();
        }

        res.json({
            id: user._id,
            email: user.email,
            nombre: paciente.nombre,
            apellido: paciente.apellido,
            rut: paciente.rut,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserDates = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Busca las citas relacionadas con el paciente
        const citas = await Cita.find({ 'paciente': user._id });

        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
