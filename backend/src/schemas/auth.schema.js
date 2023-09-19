import { z } from 'zod'


export const registerSchema = z.object({
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "contraseña es requerida"
    }).min(6, {
        message: "contraseña debe ser de 6 caracteres o mas"
    }),
    passwordConfirmation: z.
        string({
            required_error: "se requiere confirmar la contraseña"
        }).min(6).refine((passwordConfirmation, data) => {
            return passwordConfirmation === data.password;
        }, {
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
        required_error: "contraseña requerida",

    }).min(6, {
        message: "contraseña debe ser de 6 o mas caracteres"
    })
})