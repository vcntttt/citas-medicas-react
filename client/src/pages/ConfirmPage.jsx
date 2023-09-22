import styles from "../styles/Confirm.module.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { pickDateRequest } from "../api/auth.js";
export default function ConfirmPage() {
  const location = useLocation();
  const event = location.state?.event;
  const {user} = useAuth();
  
  const handleClick = async () => {
    try{
      const userEmail = {email: user.email};
      const res = await pickDateRequest(event._id, userEmail);
      console.log(res.data);
    }    catch(error){
      console.error(error);
    }
  };
  
return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <p>
          <span>Profesional:</span>{event.doctor.nombre} {event.doctor.apellido}.
        </p>
        <p>
          <span>Servicio:</span> {event.doctor.especialidad}
        </p>
        <p>
          <span>Fechas:</span> {event.start.toLocaleDateString()}
        </p>
        <p>
          <span>Ubicación:</span> Av.Alemania 231, Sala 111
        </p>
        <button onClick={handleClick} className={styles.btn}>
          Confirmar
        </button>
      </div>
    </div>
  );
}
 