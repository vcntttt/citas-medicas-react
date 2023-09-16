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
    nombre: String,  
    apellido: String,   
    rut: String,
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