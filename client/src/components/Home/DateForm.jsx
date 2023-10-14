import {useForm} from 'react-hook-form'
import { getDoctoresRequest, newDateRequest } from "../../api/drs";
import useAuthStore from '../../store/authStore';
import useRequest from '../../hooks/useRequest';

export default function DateForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {role} = useAuthStore();
    const {data: drs} = useRequest(() => getDoctoresRequest());
    const onSubmit = handleSubmit(async (data) => {
        try{
            const horaInicio = new Date(data.hora)
            const horaFin = new Date(data.hora)
            horaFin.setHours(horaFin.getHours() + 1)
            const doctorFound = drs?.find((item) => item._id === data.doctor)
            let result = role ==='admin' ? {
                doctor : doctorFound,
                horaInicio: horaInicio.toISOString(),
                horaFin: horaFin.toISOString(),
                sala: data.sala

            } : {
                horaInicio: horaInicio.toISOString(),
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
            {role === 'admin' ? (
                <>
                    Escoje un doctor
                    <select {...register('doctor', {required: true})}>
                        {drs.map((item) => (
                            <option key={item._id} value={item._id}>{item.nombre} {item.apellido}</option>
                        ))}
                    </select>
                    {errors.doctor && <p>Este campo es requerido</p>}
                </>
            ) : null
        }
            <input className='hover:cursor-pointer bg-slate-600 p-4 text-white'
            type="submit" />
        </form>
    </div>
  )
}