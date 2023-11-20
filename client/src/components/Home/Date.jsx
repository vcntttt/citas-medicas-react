import Btn from "./Btn";
import { Toaster } from "sonner";
import useModal from "../../hooks/useModal";
import Modal from "../Modals/Modal";
import DateForm from "./DateForm";
import useDate from '../../hooks/useDate';
import useAuthStore from "../../store/authStore";

export default function Date({date}) {
  const {isOpen, closeModal, openModal} = useModal();
  const {role} = useAuthStore();
  const {
    citas,
    handleUpdate,
    handleDelete,
    handleChange,
    doctorChange,
  } = useDate(date, openModal);

  return (
    <div className="bg-gray-100 p-6 m-2 flex lg:flex-row flex-col justify-between items-start">
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
        <div className={`flex flex-col w-full md:justify-end md:gap-2 gap-1 justify-center md:mt-4 mt-0`}>
        <Btn onClick={role === "doctor" ? doctorChange : handleUpdate}>
          Modificar
        </Btn>
        <Btn onClick={role === "doctor" ? handleDelete : handleChange}>
          Cancelar
        </Btn>
        </div>
        <Toaster/>
<<<<<<< HEAD
        <Modal isOpen={isOpen} onClose={closeModal} bgColor="[#2E3238]">
        {role === "paciente" ? (
=======
        <Modal isOpen={isOpen} onClose={closeModal}>
        {role === "paciente" || role === "admin" ? (
>>>>>>> develop
            <div className="h-[800px] overflow-y-auto py-8">
              <h2 className="text-2xl py-2 mb-2 text-white">Citas de {date.doctor.especialidad} disponibles</h2>
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
            <h1 className="text-3xl text-white text-center py-4">Escoje una nueva fecha</h1>
            <DateForm closeModal={closeModal} styles={'bg-[#2E3238]'}/>
            </>
          )}
        </Modal>
    </div>)}