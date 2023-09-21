import mongoose from 'mongoose';

const citaSchema = new mongoose.Schema({
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    especialidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Especialidad', required: true },
    fecha: { type: Date, required: true },
    horaInicio: { type: String, required: true },
    horaFin: { type: String, required: true },
    confirmada: { type: Boolean, default: false },
});

export default mongoose.model('Cita', citaSchema);