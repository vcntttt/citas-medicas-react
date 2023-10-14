import {useForm} from 'react-hook-form'
//const { paciente, horaInicio, horaFin, estado, sala } = req.body;
export default function DateForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();
  return (
    <div>
        <form onSubmit={handleSubmit}  className='flex flex-col gap-4 m-5 justify-center items-center'>
            Paciente 
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5'
             type="text" {...register('paciente', {required: true})} />
            {errors.paciente && <p>Este campo es requerido</p>}
            Hora Inicio
            <input  className='text-white shadow-none bg-slate-800 mx-auto my-5'
            type="text" {...register('horaInicio', {required: true})} />
            {errors.horaInicio && <p>Este campo es requerido</p>}
            Hora Fin
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5'
            type="text" {...register('horaFin', {required: true})} />
            {errors.horaFin && <p>Este campo es requerido</p>}
            Sala
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5'
            type="text" {...register('sala', {required: true})} />
            {errors.sala && <p>Este campo es requerido</p>}
            <input className='hover:cursor-pointer bg-slate-600 p-4 text-white'
            type="submit" />
        </form>
    </div>
  )
}
