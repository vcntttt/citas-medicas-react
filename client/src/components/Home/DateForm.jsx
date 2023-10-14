import {useForm} from 'react-hook-form'
import { newDateRequest } from "../../api/drs";
export default function DateForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = handleSubmit(async (data) => {
        try{
            const horaInicio = new Date(data.hora)
            const horaFin = new Date(data.hora)
            horaFin.setHours(horaFin.getHours() + 1)
    
            const result = {
                doctor: 'alo',
                horaInicio : horaInicio.toISOString(),
                horaFin: horaFin.toISOString(),
                sala: data.sala
            }
    
            await newDateRequest(result)
        } catch (error) {
            console.log(error)
        }
    })
  return (
    <div>
        <form onSubmit={onSubmit}  className='flex flex-col gap-4 m-5 justify-center items-center'>
            Fecha
            <input  className='text-white shadow-none bg-slate-800 mx-auto my-5'
            type="datetime-local" {...register('hora', {required: true})} />
            {errors.horaInicio && <p>Este campo es requerido</p>}
            Sala
            <select {...register('sala', {required: true})}>
            <option value="Sala A">Sala A</option>
            <option value="Sala B">Sala B</option>
            <option value="Sala C">Sala C</option>
            <option value="Sala D">Sala D</option>
            <option value="Sala E">Sala E</option>
            </select>
            {errors.sala && <p>Este campo es requerido</p>}
            <input className='hover:cursor-pointer bg-slate-600 p-4 text-white'
            type="submit" />
        </form>
    </div>
  )
}