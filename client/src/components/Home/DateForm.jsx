import { useForm } from 'react-hook-form'
import { getDoctoresRequest, newDateRequest } from "../../api/drs";
import useAuthStore from '../../store/authStore';
import useRequest from '../../hooks/useRequest';


export default function DateForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { role } = useAuthStore();
    const { data: drs } = useRequest(() => getDoctoresRequest());
    const onSubmit = handleSubmit(async (data) => {
        try {
            const horaInicio = new Date(data.hora)
            const horaFin = new Date(data.hora)
            horaFin.setHours(horaFin.getHours() + 1)
            const doctorFound = drs?.find((item) => item._id === data.doctor)
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
            await newDateRequest(result)
        } catch (error) {
            console.log(error)
        }
    })
    return (
        <div className="flex flex-col justify-center text-center">
            <form onSubmit={onSubmit} className="bg-[#2E3238] px-8 py-0">

                <div className="h-1/5 p-0">

                        <h1 className="text-[white] text-2xl">Fecha</h1>
  
                    <div className="mb-40" >
                        <input
                            type="datetime-local" {...register('hora', { required: true })} />
                        {errors.horaInicio && <p>Este campo es requerido</p>}
                    </div>
                </div>

                <div className=" px-0 py-12">
                    <h1 className="text-2xl text-white">Sala</h1>
                    
                    <select className=" w-40" {...register('sala', { required: true })}>
                        <option value="Sala A">Sala A</option>
                        <option value="Sala B">Sala B</option>
                        <option value="Sala C">Sala C</option>
                        <option value="Sala D">Sala D</option>
                        <option value="Sala E">Sala E</option>
                    </select>
                    {errors.sala && <p>Este campo es requerido</p>}

                </div>

                <div className="text-white px-0 py-12">
                    {role === 'admin' ? (
                        <>
                            <h1 >Escoje un doctor</h1>
                            <select className="text-black" {...register('doctor', { required: true })}>
                                {drs.map((item) => (
                                    <option key={item._id} value={item._id}>{item.nombre} {item.apellido}</option>
                                ))}
                            </select>
                            {errors.doctor && <p>Este campo es requerido</p>}
                        </>
                    ) : null
                    }

                </div>


                <div className="px-0 py-12">
                    <input className=" w-40 h-16 bg-[yellowgreen] cursor-pointer"
                        type="submit" />

                </div>

            </form>
        </div>
    )
}