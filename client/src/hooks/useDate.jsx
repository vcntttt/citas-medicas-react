import { useState } from "react";
import { cancelDateRequest, getCitasByEspecialidadRequest } from "../api/citas";
import { cancelDoctorDateRequest } from "../api/drs";
import { toast } from "sonner";
import dateHelper from "./dateHelper";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import useIfAuth from "./useIfAuth";

export default function useDate(date, openModal) {
    const {role} = useAuthStore();
    const { checkDates } = useIfAuth();
    const [citas, setCitas] = useState([]);
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
  //para el paciente
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

  // para el doctor
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
    toast.promise(cancelDoctorDateRequest(date._id), {
      loading: "Cancelando...",
      success: () => {
        setTimeout(() => {
          navigate('/confirm/dr');
        },1500)
        return "Cita cancelada";
      },
      error: "Error al cancelar",
    })
  }
  return {
    citas,
    handleUpdate,
    handleDelete,
    handleChange,
    doctorChange,
  }
}