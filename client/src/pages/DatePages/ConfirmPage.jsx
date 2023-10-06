import styles from "../../styles/Confirm.module.css";
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
    <div className={styles.container}>
      <div className={styles.subContainer}>
      <h1>Confirme su cita</h1>
        <p>
          <span>Profesional:</span>{event.doctor.nombre} {event.doctor.apellido}
        </p>
        <p>
          <span>Servicio:</span> {event.doctor.especialidad}
        </p>
        <p>
          <span>Fechas:</span> {event.start.toLocaleDateString()}
        </p>
        <p>
          <span>Ubicación:</span> Av.Alemania 231, {event.sala}
        </p>
        <button onClick={handleClick} className={styles.btn}>
          Confirmar
        </button>
        <Toaster
          duration={3000}
        />
      </div>
    </div>
  );
}
 