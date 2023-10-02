/* eslint-disable react/prop-types */
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
        <p><strong>Dia : </strong>{event.start.toLocaleDateString()}</p>
        <p><strong>Hora de Inicio: </strong>{event.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p><strong>Hora de Fin: </strong>{event.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p><strong>Profesional a cargo: </strong>{event.doctor.nombre} {event.doctor.apellido}</p>
        <p><strong>Sala: </strong>{event.sala} </p>
        <p><strong>Direccion del Hospital:</strong> Av.Alemania 231</p>
        {event.estado === false && <button className={styles.btn} onClick={handlePick}>Tomar Hora</button>}
        <button className={styles.btn} onClick={onClose}>Cerrar</button>
        </div>
    </div>
  )
}