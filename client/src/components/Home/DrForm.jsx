import { useForm } from 'react-hook-form'
import { getEspecialidadesRequest } from '../../api/drs';
import useRequest from '../../hooks/useRequest';
import { registerDrRequest } from "../../api/drs";
import { Toaster, toast } from 'sonner';

export default function DrForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { data: especialidades } = useRequest(() => getEspecialidadesRequest());
  const onSubmit = handleSubmit(async (data) => {
    try {
      toast.promise(registerDrRequest(data), {
        loading: "Agregando...",
        success: () => {
          return "Doctor agregado";
        },
        error: "Error al agregar doctor",
      })
    } catch (error) {
      console.log(error.response.data)
    }
  })
  return (
    <div >
      <form onSubmit={onSubmit} className='flex flex-col '>

        <div className="h-1/7 m-5">
          <input className='py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2 ' placeholder='Email'
            type="email" {...register('email', { required: true })} />
          {errors.email && <p className='text-red-500'>Este campo es requerido</p>}
        </div>

        <div className="h-1/7 m-5">
          <input className='py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2 ' placeholder='Rut'
            type="text" {...register('rut', { required: true })} />
          {errors.password && <p className='text-red-500'>Este campo es harmonido</p>}
        </div>

        <div className="h-1/7 m-5">
          <input className='py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2 ' placeholder='Contraseña'
            type="password" {...register('password', { required: true })} />
          {errors.password && <p className='text-red-500'>Este campo es harmonido</p>}
        </div>

        <div className="h-1/7 m-5">
          <input className='py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2 ' placeholder='Confirmar Contraseña'
            type="password" {...register('passwordConfirmation', { required: true })} />
          {errors.passwordConfirmation && <p className='text-red-500'>Este campo es requerido</p>}
        </div>

        <div className="h-1/7 m-5">
          <input className='py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2 ' placeholder='Nombre'
            type="text" {...register('nombre', { required: true })} />
          {errors.nombre && <p className='text-red-500'>Este campo es requerido</p>}
        </div>

        <div className="h-1/7 m-5">
          <input className='py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2 ' placeholder='Apellido'
            type="text" {...register('apellido', { required: true })} />
          {errors.apellido && <p className='text-red-500'>Este campo es requerido</p>}
        </div>

        <div className="h-1/7 m-5">
          <select className='py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2 '
            {...register('especialidad', { required: true })} >
            {especialidades.map((item, index) => (
              <option className='text-black'
                key={index}>{item}</option>
            ))}
          </select>
          {errors.especialidad && <p className='text-red-500'>Este campo es requerido</p>}
        </div>

        <div>
          <input className=' bg-green-500 rounded-lg w-1/6  hover:bg-green-700 text-white cursor-pointer' type="submit" value="Enviar" />
        </div>
      </form>
      <Toaster />
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