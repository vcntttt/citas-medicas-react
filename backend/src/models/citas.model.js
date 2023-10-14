import mongoose from 'mongoose';


const citaSchema = new mongoose.Schema({
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    paciente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    especialidad_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especialidad'
    },
    fechaInicio: Date,
    fechaTermino: Date,
    estado: String,
    sala: String
});

export const Cita = mongoose.model('Cita', citaSchema);