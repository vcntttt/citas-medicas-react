import mongoose from 'mongoose';


const DoctorSchema = new mongoose.Schema({
    email: {type: String, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    especialidad: {type: String, required: true},
});

const PacienteSchema = new mongoose.Schema({
    email: String,
    rut: String,
    nombre: String,
    apellido: String,
});

const citaSchema = new mongoose.Schema({
    doctor: { type: DoctorSchema, required: true },
    horaInicio: { type: Date, required: true },
    horaFin: { type: Date, required: true },
    paciente: PacienteSchema,
    estado: { type: Boolean, required: true , default: false},
    sala: { type: String, required: true },
});

export const Doctor = mongoose.model('Doctor', DoctorSchema);
export default mongoose.model('Cita', citaSchema);