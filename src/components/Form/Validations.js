import {z} from 'zod'

export const userSchema = z.object({
    name: z.string().min(3,{message:"debe tener al menos 3 caracteres"}),
    email: z.string().email({message:"Ingresa un correo valido"}),
    message: z.string()
})