import mongoose from 'mongoose';


const citaSchema = new mongoose.Schema({
    fecha: Date,
    hora: String,
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    motivo: String,
    // Otros campos relacionados con la cita médica
});
