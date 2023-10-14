import Btn from "./Btn";
import { cancelDateRequest, getCitasByEspecialidadRequest } from "../../api/citas";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import dateHelper from "../../hooks/dateHelper";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";


export default function Date({date}) {
  const [modal, setModal] = useState(false);
  const [citas, setCitas] = useState([]);
  const {checkDates, role} = useAuthStore();

  const navigate = useNavigate();
  const handleUpdate = async () => {
    const especialidad = date.doctor.especialidad;
    try{
      const res = await getCitasByEspecialidadRequest(especialidad);
      const filteredCitas = res.data.filter(cita => cita.estado === false);
      const formatedCitas = dateHelper(filteredCitas);
      setModal(true);
      setCitas(formatedCitas);
    }catch(error){
      console.error(error);
    }
  }
  const handleCancel = () => {
    try {
      toast.promise(cancelDateRequest(date._id), {
        loading: "Cancelando...",
        success: () => {
          checkDates();
          return "Cita cancelada";
        },
        error: "Error al cancelar",
      })
    } catch (error) {
      console.error(error);
    }}
  const handleChange = (event) => {
    handleCancel();
    navigate("/confirm/", {state: {event}});
  }
  return (
    <div className="bg-gray-100 p-6 m-2 flex flex-row justify-between items-start">
        {role === 'paciente' && (
          <div>
                  <div className="flex flex-col justify-between min-w-[60%] h-full">
                  <h1 className="text-xl text-black">{date.doctor.especialidad}</h1>
                  <p><strong>Doctor:</strong> {date.doctor.nombre} {date.doctor.apellido}</p>
                  <p><strong>Hora de inicio:</strong> {date.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  <p><strong>Hora de fin:</strong> {date.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  <p><strong>Sala:</strong> {date.sala}</p>
                  </div>
                  <div className="flex flex-col justify-end gap-2 ml-4 my-auto">
                  <Btn onClick={handleUpdate}>Modificar</Btn>
                  <Btn onClick={handleCancel}>Cancelar</Btn>
                  </div>
                  <Toaster/>
          </div>
        )}
        {role === 'doctor' && (
                    <div>
                    <div className="flex flex-col justify-between min-w-[60%] h-full">
                    <h1 className="text-xl text-black">{date.doctor.especialidad}</h1>
                    <p><strong>Doctor:</strong> {date.doctor.nombre} {date.doctor.apellido}</p>
                    <p><strong>Hora de inicio:</strong> {date.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p><strong>Hora de fin:</strong> {date.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p><strong>Sala:</strong> {date.sala}</p>
                    </div>
                    <div className="flex flex-col justify-end gap-2 ml-4 my-auto">
                    <Btn onClick={handleUpdate}>Modificar</Btn>
                    <Btn onClick={handleCancel}>Cancelar</Btn>
                    </div>
                    <Toaster/>
            </div>
        )}
        { modal && (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-10 flex items-center justify-center">
    <div className="w-2/6 bg-slate-800 p-4 rounded-lg ">
      <h2 className="text-2xl py-2 mb-2 text-white">Citas de {date.doctor.especialidad} disponibles</h2>
        {citas.length > 0 ? (
                citas.map((cita) => (
                  <div className="flex flex-col justify-between bg-white p-4 mb-4 rounded" key={cita._id}>
                    <p><strong>Doctor:</strong> {cita.doctor.nombre} {cita.doctor.apellido}</p>
                    <p><strong>Hora de inicio:</strong> {cita.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p><strong>Hora de fin:</strong> {cita.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p><strong>Sala:</strong> {cita.sala}</p>
                    <button onClick={() => handleChange(cita)} className="bg-onahau-500 py-2 px-2 rounded mt-4">Cambiar Cita</button>
                  </div>
                ))
        ): (
          <div>
            <p className="text-white text-center py-4 bg-red-400">No hay citas para {date.doctor.especialidad.toLowerCase()} disponibles</p>
            <p className="text-white p-2 text-xs mt-2">Si la desea cancelar de todas formas, puede hacerlo en la sección de citas</p>
          </div>
        )
      }
          <button 
          onClick={() => setModal(false)}
          className="bg-onahau-500 py-2 px-2 rounded w-full mt-2">Cerrar</button>
    </div>
  </div>)}
  </div>)}