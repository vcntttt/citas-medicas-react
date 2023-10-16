import { Link } from "react-router-dom";
import styles from "./UserCard.module.css";
import useAuthStore from "../../../store/authStore";

export default function UserCard() {
  const { logOut, isAuthenticated } = useAuthStore();

  return isAuthenticated ? (
    <div className={styles.flex}>
      <Link to="/profile" className={styles.container} id={styles.profile}>
        <p>Perfil</p>
      </Link>
      <button onClick={logOut} className={styles.container}>
        Cerrar Sesion
      </button>
    </div>
  ) : (
    <Link to="/login" className={styles.container} id={styles.profile}>
      <div>
        <p>Iniciar Sesion</p>
      </div>
    </Link>
  );
}
