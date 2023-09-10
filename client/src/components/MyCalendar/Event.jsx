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
        <p>Hora de Inicio:</p>
        <p>Hora de Fin: </p>
        <p>Profesional a cargo: </p>
        <p>Sala: </p>
        <p>Direccion del Hospital: Av.Alemania 231</p>
        <button onClick={handlePick}>Tomar Hora</button>
        <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
  )
}