import {useForm} from 'react-hook-form'

export default function DrForm() {

    const {register, handleSubmit, formState: { errors }} = useForm();

  return (
    <div>
        <form onSubmit={handleSubmit}  className='flex flex-col gap-4 mx-5 items-center justify-center'>
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
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5' 
            type="text" {...register('especialidad', {required: true})} />
            {errors.especialidad && <p>Este campo es requerido</p>}
            Role
            <input className='text-white shadow-none bg-slate-800 mx-auto my-5' 
            type="text" {...register('role', {required: true})} />
            {errors.role && <p>Este campo es requerido</p>}
            <input type="submit" />
        </form>
    </div>
  )
}
