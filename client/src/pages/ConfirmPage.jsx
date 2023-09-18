import styles from "../styles/confirm.css";
import { useLocation } from "react-router-dom";
export default function ConfirmPage() {
    const location = useLocation();
    const event = location.state?.event;
    const handleClick = () => {
        console.log("esto lo hace el backend")
    }
    return (
      <div className="container">
        <div className="contenedor">
          <div className="fila">
            <p>Profesional:</p>
          </div>
          <div className="fila">
            <p>Servicio:</p>
          </div>
          <div className="fila">
            <p>Fechas:</p>
          </div>
          <div className="fila">
            <p>Ubicación:</p>
          </div>
          <div>
            <div className="divBot">
              <button onClick={handleClick} className="confirmarBot">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
      );
    }
