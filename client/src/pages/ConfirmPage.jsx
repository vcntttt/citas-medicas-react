import styles from "../styles/Confirm.module.css";
import { useLocation } from "react-router-dom";
export default function ConfirmPage() {
  const location = useLocation();
  const event = location.state?.event;
  const handleClick = () => {
    console.log("esto lo hace el backend");
  };

  
return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <p>
          <span>Profesional:</span>Lorem ipsum dolor sit.
        </p>
        <p>
          <span>Servicio:</span>Lorem.
        </p>
        <p>
          <span>Fechas:</span>Lorem, ipsum.
        </p>
        <p>
          <span>Ubicación:</span>Lorem ipsum dolor sit amet.
        </p>
        <button onClick={handleClick} className={styles.btn}>
          Confirmar
        </button>
      </div>
    </div>
  );
}
 