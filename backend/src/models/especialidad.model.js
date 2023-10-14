import mongoose from 'mongoose';


const especialidadSchema = new mongoose.Schema({
    nombre: String,
});

export const Especialidad = mongoose.model('Especialidad', especialidadSchema);