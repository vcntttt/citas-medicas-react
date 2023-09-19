import { Link } from "react-router-dom";
import styles from "./UserCard.module.css";
import { useAuth } from "../../../context/AuthContext";

export default function UserCard() {
    const { logOut, isAuthenticated } = useAuth();

  return (
    isAuthenticated ? (
      <div>
      <Link to="/profile">
      <div className={styles.container}>
        <h1 className={styles.text}>Perfil</h1>
      </div>
    </Link>
    <button onClick={logOut}>Cerrar Sesion</button>
      </div>
    ) : (
        <Link to="/login">
        <div className={styles.container}>
          <h1 className={styles.text}>Iniciar Sesion</h1>
        </div>
      </Link>
    )
  );
}
