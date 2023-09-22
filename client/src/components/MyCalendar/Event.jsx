import styles from "./Calendar.module.css";
import { useNavigate } from "react-router-dom";
export default function Event({ event, onClose }) {
  const navigate = useNavigate();
  const handlePick = () => {
    navigate("/confirm/", {state: {event}});
  }
  return (
    <div className={styles.modal}>
        <div className={styles.ventana}>
        <h3>{event.title}</h3>
        <p>Dia : {event.start.toLocaleDateString()}</p>
        <p>Hora de Inicio: {event.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p>Hora de Fin: {event.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p>Profesional a cargo: {event.doctor.nombre} {event.doctor.apellido}</p>
        <p>Sala: {event.sala} </p>
        <p>Direccion del Hospital: Av.Alemania 231</p>
        {event.estado === false && <button onClick={handlePick}>Tomar Hora</button>}
        <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
  )
}