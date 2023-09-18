import { Link } from "react-router-dom";
import styles from "./UserCard.module.css";
import { useAuth } from "../../../context/AuthContext";

export default function UserCard() {
    const { user, isAuthenticated } = useAuth();

  return (
    isAuthenticated ? (
        <Link to="/profile">
        <div className={styles.container}>
          <h1 className={styles.text}>Perfil</h1>
        </div>
      </Link>
    ) : (
        <Link to="/login">
        <div className={styles.container}>
          <h1 className={styles.text}>Iniciar Sesion</h1>
        </div>
      </Link>
    )
  );
}
