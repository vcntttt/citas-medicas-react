import mongoose from 'mongoose';

const pacienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    rut: {
        type: String,
        unique: true,
    }
});

export const Paciente = mongoose.model('Paciente', pacienteSchema);