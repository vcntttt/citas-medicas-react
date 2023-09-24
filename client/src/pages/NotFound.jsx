import image from "../assets/404.webp";
import styles from "../styles/NotFound.module.css";
import { Link} from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <img src={image} />

      <div className={styles.menuContainer}>
        <div className={styles.textContainer}>
          <h1>No podemos encontrar la página que estás buscando</h1>
          <p>Regresa a la página de inicio apretando el boton de abajo</p>
        </div>

        <div className={styles.link}>
          <label>
            <Link className={styles.link} to="/">
              Pagina principal
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
