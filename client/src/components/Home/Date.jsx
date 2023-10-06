/* eslint-disable react/prop-types */
import Btn from "./Btn";
import { cancelDateRequest } from "../../api/citas";
import { Toaster, toast } from "sonner";

export default function Date({date}) {
  const handleUpdate = () => {
    console.log("update")
  }
  const handleCancel = async () => {
    try {
      await toast.promise(cancelDateRequest(date._id), {
        loading: "Cancelando...",
        success: "Cita cancelada",
        error: "Error al cancelar",
      })
    } catch (error) {
      console.error(error);
    }}

  return (
    <div className="bg-gray-100 p-6 m-2 flex flex-row">
        <div>
        <h1 className="text-xl text-black">{date.doctor.especialidad}</h1>
        <p>Profesional a cargo: {date.doctor.nombre} {date.doctor.apellido}</p>
        <p>Sala: {date.sala}</p>
        <p>Hora de inicio: {date.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p>Hora de fin: {date.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        </div>
        <div className="flex flex-col justify-end gap-2 ml-4">
        <Btn onClick={handleUpdate}>Modificar</Btn>
        <Btn onClick={handleCancel}>Cancelar</Btn>
        </div>\
        <Toaster />
    </div>
  )
}
