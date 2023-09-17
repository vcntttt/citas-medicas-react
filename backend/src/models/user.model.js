import mongoose from 'mongoose';

const validateRut = (rut) => {
    const rutRegex = /^\d{2}\.\d{3}\.\d{3}-\d$/;
    return rutRegex.test(rut);
};

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
    nombre: String,
    apellido: String,
    rut: {
        type: String,
        unique: true,
        validate: {
            validator: validateRut,
            message: "el formato del rut no es valido"
        }
    },
    role: {
        type: String,
        enum: ['doctor', 'paciente'],
        default: 'paciente'
    }
},

    {
        timestamps: true
    })



export default mongoose.model('User', userSchema)