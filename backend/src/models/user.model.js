import mongoose from 'mongoose';


const generateRandomRut = () => {
    const randomPart = Math.floor(Math.random() * 1000000000); 
    const rut = `${String(randomPart).padStart(9, '0')}`;
    const rutFormatted = `${rut.substr(0, 2)}.${rut.substr(2, 3)}.${rut.substr(5, 3)}-${rut.substr(8, 1)}`;
    return rutFormatted;
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
        default: generateRandomRut
    },
    role: {
        type: String,
        enum: ['doctor', 'paciente', 'admin'],
        default: 'paciente'
    }
},

    {
        timestamps: true
    })



export default mongoose.model('User', userSchema)