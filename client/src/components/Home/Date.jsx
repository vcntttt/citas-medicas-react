import Btn from "./Btn";
import { cancelDateRequest, getCitasByEspecialidadRequest } from "../../api/citas";
import { cancelDoctorDateRequest } from "../../api/drs";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import dateHelper from "../../hooks/dateHelper";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";
import DateForm from "./DateForm";

export default function Date({date}) {
  const {isOpen, closeModal, openModal} = useModal();
  const [citas, setCitas] = useState([]);
  const {checkDates, role} = useAuthStore();

  const navigate = useNavigate();
  const handleUpdate = async () => {
    const especialidad = date.doctor.especialidad;
    try{
      const res = await getCitasByEspecialidadRequest(especialidad);
      const filteredCitas = res.data.filter(cita => cita.estado === false);
      const formatedCitas = dateHelper(filteredCitas);
      openModal();
      setCitas(formatedCitas);
    }catch(error){
      console.error(error);
    }
  }
  const handleCancel = () => {
    try {
      if (role === "paciente") {
        toast.promise(cancelDateRequest(date._id), {
          loading: "Cancelando...",
          success: () => {
            checkDates();
            return "Cita cancelada";
          },
          error: "Error al cancelar",
        })
      } else if (role === "doctor") {
        console.log('doctor cancelando')
      }
    } catch (error) {
      console.error(error);
    }}
  const handleDelete = async () => {
    try {
      if (role === "paciente") return
      if (role === "doctor") {
        toast.promise(cancelDoctorDateRequest(date._id), {
          loading: "Cancelando...",
          success: () => {
            checkDates();
            return "Cita cancelada";
          },
          error: "Error al cancelar",
        })
      }
    }
     catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    handleCancel();
    navigate("/confirm/", {state: {event}});
  }

  const doctorChange = () => {
    handleDelete();
    navigate("/confirm/dr");
  }

  return (
    <div className="bg-gray-100 p-6 m-2 flex flex-row justify-between items-start">
        <div className="flex flex-col justify-between min-w-[60%] h-full">
        <h1 className="text-xl text-black">
          {role === "doctor" ? '' : date.doctor.especialidad}
        </h1>
        <p>
          <strong>
            {role === "doctor" ? 'Paciente: ' : 'Doctor: '}
          </strong> 
          {role === "doctor" 
            ? (date.paciente 
                ? `${date.paciente.nombre} ${date.paciente.apellido}` 
                : 'Sin asignar')
            : `${date.doctor.nombre} ${date.doctor.apellido}`
        }
        </p>
        <p><strong>Fecha:</strong> {date.start.toLocaleDateString()}</p>
        <p><strong>Hora de inicio:</strong> {date.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p><strong>Hora de fin:</strong> {date.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p><strong>Sala:</strong> {date.sala}</p>
        {role === 'doctor' && (
          <p><strong>Estado:</strong> {date.estado ? 'No disponible' : 'Disponible'}</p>
        )}
        </div>
        <div className="flex flex-col justify-end gap-2 ml-4 my-auto">
        <Btn onClick={role === "doctor" ? doctorChange : handleUpdate}>Modificar</Btn>
        <Btn onClick={role === "doctor" ? handleDelete : handleChange}>Cancelar</Btn>
        </div>
        <Toaster/>
        <Modal isOpen={isOpen} onClose={closeModal}>
        {role === "paciente" ? (
            <div className="h-[800px] overflow-y-auto py-8">
              <h2 className="text-2xl py-2 mb-2 text-black">Citas de {date.doctor.especialidad} disponibles</h2>
              {citas.length > 0 ? (
                  citas.map((cita) => (
                    <div className="flex flex-col justify-between bg-white p-4 mb-4 rounded" key={cita._id}>
                      <p><strong>Doctor:</strong> {cita.doctor.nombre} {cita.doctor.apellido}</p>
                      <p><strong>Fecha:</strong> {cita.start.toLocaleDateString()}</p>
                      <p><strong>Hora de inicio:</strong> {cita.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                      <p><strong>Hora de fin:</strong> {cita.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                      <p><strong>Sala:</strong> {cita.sala}</p>
                      <button onClick={() => handleChange(cita)} className="bg-onahau-500 py-2 px-2 rounded mt-4">Cambiar Cita</button>
                    </div>
                  ))
              ) : (
                <div>
                  <p className="text-white text-center py-4 bg-red-400">No hay citas para {date.doctor.especialidad.toLowerCase()} disponibles</p>
                  <p className="text-white p-2 text-xs mt-2">Si la desea cancelar de todas formas, puede hacerlo en la sección de citas</p>
                </div>
              )}
            </div>
          ) : (
            <>
            <h1 className="text-3xl text-center py-4">Escoje una nueva fecha</h1>
            <DateForm closeModal={closeModal}/>
            </>
          )}
        </Modal>
    </div>)}