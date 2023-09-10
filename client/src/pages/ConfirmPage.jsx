import { useLocation } from "react-router-dom"
export default function ConfirmPage() {
    const location = useLocation();
    const event = location.state?.event;
    const handleClick = () => {
        console.log("esto lo hace el backend")
    }
  return (
    <div>
        <h3>{event.title}</h3>
        <p>Hora de Inicio:</p>
        <p>Hora de Fin: </p>
        <p>Profesional a cargo: </p>
        <p>Sala: </p>
        <p>Direccion del Hospital: Av.Alemania 231</p>
        <button onClick={handleClick}>Tomar Hora</button>
    </div>
  )
}
