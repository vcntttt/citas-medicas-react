import { useLocation, useNavigate } from "react-router-dom";
import { pickDateRequest } from "../../api/citas.js";
import { Toaster , toast} from "sonner";

export default function ConfirmPage() {
  const location = useLocation();
  const event = location.state?.event;
  const navigate = useNavigate();
  
  const handleClick = async () => {
    try{
      const res = await pickDateRequest(event._id);
      console.log(res.data);
      toast.success("Cita confirmada, te esperamos!");
     setTimeout(() => {
       navigate("/");
     }, 1500);
      
    }    catch(error){
      console.error(error);
      toast.error(error.response.data);
    }
  };
  
  return (
    <div className="flex bg-gray-500 h-[90vh] flex-col">
      <div className="flex flex-col justify-center m-auto p-[10px] bg-gray-800 w-[70%] h-[80%] p-8">
      <h1 className="text-2xl text-white">Confirme su cita</h1>
        <p className="flex items-center m-[20px] text-[13pt] bg-white text-black p-[20px]">
          <span className="font-bold mr-4">Profesional:</span>{event.doctor.nombre} {event.doctor.apellido}
        </p>
        <p className="flex items-center m-[20px] text-[13pt] bg-white text-black p-[20px]">
          <span className="font-bold mr-4">Servicio:</span> {event.doctor.especialidad}
        </p>
        <p className="flex items-center m-[20px] text-[13pt] bg-white text-black p-[20px]">
          <span className="font-bold mr-4">Fechas:</span> {event.start.toLocaleDateString()}
        </p>
        <p className="flex items-center m-[20px] text-[13pt] bg-white text-black p-[20px]">
          <span className="font-bold mr-4">Ubicación:</span> Av.Alemania 231, {event.sala}
        </p>
        <button onClick={handleClick} className="m-auto rounded-[10px] bg-[#c1ffff] text-black font-normal py-[2px] px-[10px] hover:bg-[#55ccc9] hover:cursor-pointer hover:text-white">
          Confirmar
        </button>
        <Toaster
          duration={3000}
        />
      </div>
    </div>
  );
}