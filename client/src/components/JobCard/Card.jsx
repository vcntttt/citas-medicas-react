import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import image from "../../assets/jobIMG.svg";
export default function Card({item}) {
  return (
    <Link to= {`/calendar/${item}`}>
    <div className={styles.especialidadDiv}>
    <img className={styles.imgEsp} src={image} alt="a" />
    <div className={styles.nomEspDiv}>
    <p className={styles.nomEsp}>{item}</p>
    </div>
  </div>
  </Link>
  );
}