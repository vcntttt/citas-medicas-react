import mongoose from 'mongoose';

const especialidadSchema = new mongoose.Schema({
    especialidad: String,
});

export default mongoose.model('Especialidades', especialidadSchema, 'Especialidades');