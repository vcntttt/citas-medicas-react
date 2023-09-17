import mongoose from 'mongoose';


const doctorSchema = new mongoose.Schema({
    nombre: String,
    especialidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Especialidad' },
    // Otros campos relacionados con el médico
});