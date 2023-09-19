import { z } from 'zod'


export const registerSchema = z.object({
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "Contraseña es requerida"
    }).min(6, {
        message: "Contraseña debe ser de 6 caracteres o mas"
    }),
    passwordConfirmation: z.
        string({
            required_error: "Se requiere confirmar la contraseña"
        }).min(6, {
            message: "La contraseña y la confirmación de contraseña no coinciden"
        })
})



export const loginSchema = z.object({
    email: z
        .string({
            required_error: "Email es requerido",
        })
        .email({
            message: "Email invalido",
        }),
    password: z.string({
        required_error: "Contraseña requerida",

    }).min(6, {
        message: "Contraseña debe ser de 6 o mas caracteres"
    })
})