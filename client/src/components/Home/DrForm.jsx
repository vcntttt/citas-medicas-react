import { useForm } from 'react-hook-form'
import { getEspecialidadesRequest } from '../../api/drs';
import useRequest from '../../hooks/useRequest';
import { registerDrRequest } from "../../api/drs";
export default function DrForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { data: especialidades } = useRequest(() => getEspecialidadesRequest());
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await registerDrRequest(data);
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
    }
  })
  return (
    <div >
      <form onSubmit={onSubmit} className='bg-[#2E3238] flex flex-col gap-4 mx-5 my-4 items-center justify-center'>
        <h2 className='text-white'>Email</h2>
        <input className='text-[#2E3238] shadow-none bg-white mx-auto my-5 mt-4'
          type="email" {...register('email', { required: true })} />
        {errors.email && <p>Este campo es requerido</p>}

        <h2 className='text-white'>Password</h2>
        <input className='text-[#2E3238] shadow-none bg-white mx-auto my-5'
          type="password" {...register('password', { required: true })} />
        {errors.password && <p>Este campo es harmonido</p>}

        <h2 className='text-white'>Password Confirmation</h2>
        <input className='text-[#2E3238] shadow-none bg-white mx-auto my-5'
          type="password" {...register('passwordConfirmation', { required: true })} />
        {errors.passwordConfirmation && <p>Este campo es requerido</p>}

        <h2 className='text-white'>Nombre</h2>
        <input className='text-[#2E3238] shadow-none bg-white0 mx-auto my-5'
          type="text" {...register('nombre', { required: true })} />
        {errors.nombre && <p>Este campo es requerido</p>}

        <h2 className='text-white'>Apellido</h2>
        <input className='text-[#2E3238] shadow-none bg-white mx-auto my-5'
          type="text" {...register('apellido', { required: true })} />
        {errors.apellido && <p>Este campo es requerido</p>}

        <h2 className='text-white'>Especialidad</h2>
        <select {...register('especialidad', { required: true })} >
          {especialidades.map((item, index) => (
            <option key={index}>{item}</option>
          ))}

        </select>
        {errors.especialidad && <p>Este campo es requerido</p>}
        <div className='flex bg-[yellowgreen] w-40 h-16 mb-4  justify-center text-center text-white'>
          <input type="submit" />


        </div>
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