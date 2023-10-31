import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from '../../store/authStore';

export default function Form() {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const {updateProfile} = useAuthStore();
    const navigate = useNavigate();

    const onSubmit =  handleSubmit(async (data,e) => {
        updateProfile(data)
        e.preventDefault()
        navigate("/")
    })
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[1000] flex items-center">
            <div className="p-[15px] bg-gray-700 w-[500px] h-[800px] m-auto rounded-[10px]" >
                <h1 className="text-center text-[40px] font-normal text-white">Ingrese datos personales</h1>
                <form className="flex flex-col mx-auto mt-16 mb-20 text-[#6e1717]" onSubmit={onSubmit}>
                    <div className="flex flex-col mx-auto mt-16 mb-20 text-[#6e1717]">
                        <input className= "text-black w-[300px] text-[15px]" type="text" placeholder='Rut:' {...register("rut", { required: true })}/>
                        {errors.rut && <p className="flex text-[#dd3a3a] text-[15px] font-[200]">Este campo es requerido</p>}
                        <input className="text-black w-[300px] text-[15px]" type="text" placeholder='Nombre' {...register("nombre", { required: true })} />
                        {errors.nombre && <p className="flex text-[#dd3a3a] text-[15px] font-[200]">Este campo es requerido</p>}
                        <input className="text-black w-[300px] text-[15px]" type="text" placeholder='Apellidos' {...register("apellido", { required: true })} />
                        {errors.apellido && <p className="flex text-[#dd3a3a] text-[15px] font-[200]">Este campo es requerido</p>}
                        <select  className="text-center mx-auto my-2 w-[300px]"  {...register("genero",{required: true})} >
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                        </select>
                    </div>
                    <input className="bg-green-500 w-[300px] h-[35px] mx-auto my-2 text-[16px] text-center text-black rounded-none hover:cursor-pointer hover:bg-[#53b14a]" type="submit" value="Enviar"/>
                </form>
                <div className="text-center mx-auto w-[300px] border-none bg-teal-300 my-2">
                    <Link to="/"><button className="text-black bg-teal-300 w-full h-[35px] text-[16px] border-none hover:cursor-pointer hover:bg-[#C1FFFF]">Salir</button></Link>
                </div>
            </div>
        </div>
    )
}