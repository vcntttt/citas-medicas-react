import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['administrador', 'doctor', 'paciente'],
        default: 'paciente'
    },
    // Agrega campos para relacionar usuarios con sus respectivas colecciones
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    administrador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Administrador'
    }
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);