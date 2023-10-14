import {useForm} from 'react-hook-form'
import { getEspecialidadesRequest } from '../../api/drs';
import useRequest from '../../hooks/useRequest';
import { registerDrRequest } from "../../api/drs";
export default function DrForm() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const {data: especialidades} = useRequest(() => getEspecialidadesRequest());
    const onSubmit = handleSubmit(async (data) => {
        try{
            const res = await  registerDrRequest(data);
            console.log(res.data)
          }catch (error) {
            console.log(error.response.data)
          }
    })
  return (
    <div>
        <form onSubmit={onSubmit}  className='flex flex-col gap-4 mx-5 items-center justify-center'>
            Email
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5' 
            type="email" {...register('email', {required: true})} />
            {errors.email && <p>Este campo es requerido</p>}
            Password
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5' 
            type="password" {...register('password', {required: true})} />
            {errors.password && <p>Este campo es harmonido</p>}
            Password Confirmation
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5' 
            type="password" {...register('passwordConfirmation', {required: true})} />
            {errors.passwordConfirmation && <p>Este campo es requerido</p>}
            Nombre
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5' 
            type="text" {...register('nombre', {required: true})} />
            {errors.nombre && <p>Este campo es requerido</p>}
            Apellido
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5' 
            type="text" {...register('apellido', {required: true})} />
            {errors.apellido && <p>Este campo es requerido</p>}
            Especialidad
            <select {...register('especialidad', {required: true})} >
              {especialidades.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            {errors.especialidad && <p>Este campo es requerido</p>}
            <input type="submit"/>
        </form>
    </div>
  )
}

// {
//   "email": "ejemplo@email.com",
//   "password": "123456",
//   "passwordConfirmation": "123456",
//   "nombre": "Pepe",
//   "apellido": "Pérez",
//   "especialidad": "Cardiología"
// }