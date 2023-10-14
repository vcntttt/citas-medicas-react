import mongoose from 'mongoose';

const administradorSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    rut: {
        type: String,
        unique: true,
    }
});

export const Administrador = mongoose.model('Administrador', administradorSchema);
