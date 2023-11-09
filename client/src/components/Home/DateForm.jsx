import { useForm } from 'react-hook-form'
import { getDoctoresRequest, newAdminDateRequest, newDateRequest } from "../../api/drs";
import useAuthStore from '../../store/authStore';
import useRequest from '../../hooks/useRequest';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import useIfAuth from '../../hooks/useIfAuth';

export default function DateForm({ styles }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { role } = useAuthStore();
    const { checkDates } = useIfAuth();
    const { data: drs } = useRequest(() => getDoctoresRequest());
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data) => {
        try {
            const horaInicio = new Date(data.hora)
            const horaFin = new Date(data.hora)
            horaFin.setHours(horaFin.getHours() + 1)
            const doctorFound = drs?.find((item) => item._id == data.doctor)
            let result = role === 'admin' ? {
                doctor: doctorFound,
                horaInicio: horaInicio.toISOString(),
                horaFin: horaFin.toISOString(),
                sala: data.sala

            } : {
                horaInicio: horaInicio.toISOString(),
                horaFin: horaFin.toISOString(),
                sala: data.sala
            }
            if (role === 'doctor') {
                toast.promise(newDateRequest(result), {
                    loading: "Agregando...",
                    success: () => {
                        checkDates();
                        navigate('/');
                        return "Cita agregada";
                    },
                    error: "Error al agregar",
                })
            } else if (role === 'admin') {
                toast.promise(newAdminDateRequest(result), {
                    loading: "Agregando...",
                    success: () => {
                        navigate('/');
                        return "Cita agregada";
                    },
                    error: "Error al agregar",
                })
            }
        } catch (error) {
            console.log(error)
        }
    })
    return (
        <div className={`${styles}`}>
            <form onSubmit={onSubmit} className={` bg flex-col px-8 py-6`}>
                <div className=' flex flex-col  items-center gap-4'>
                    <input type="datetime-local" {...register('hora', { required: true })} className='py-2.5 text-white bg-transparent border-0 border-b-2 ' />
                    {errors.horaInicio && <p>Este campo es requerido</p>}

                    <select className='py-2.5 px-3.5 w-1/2 text-white bg-transparent border-0 border-b-2 '
                        {...register('sala', { required: true, defaultValue: 'Sala A' })}>
                        <option value="Sala A" className='text-black'>Sala A</option>
                        <option value="Sala B" className='text-black'>Sala B</option>
                        <option value="Sala C" className='text-black'>Sala C</option>
                        <option value="Sala D" className='text-black'>Sala D</option>
                        <option value="Sala E" className='text-black'>Sala E</option>
                    </select>
                    {errors.sala && <p>Este campo es requerido</p>}
                </div>
                <div className=" h-1/4 my-10">
                    {role === 'admin' ? (
                        <>
                            <select className='  py-2.5 w-1/2  text-white bg-transparent border-0 border-b-2 ' {...register('doctor', { required: true })}>
                                <option value="" className='text-black'>Escoje un doctor</option>
                                {drs.map((item) => (
                                    <option className='text-black' placeholder='Escoje un doctor'
                                        key={item._id} value={item._id}>{item.nombre} {item.apellido}</option>
                                ))}
                            </select>
                            {errors.doctor && <p className='text-red-500'>Este campo es requerido</p>}
                        </>
                    ) : null
                    }

                </div>


                <div className=''>
                    <input className=" bg-green-500 rounded-lg py-1 w-3/6 text-white hover:bg-green-700 cursor-pointer " type="submit" value="Enviar" />
                </div>
                
            </form>
            <Toaster />
        </div>
    )
}