import { Link } from "react-router-dom";
import styles from "./Card.module.css";
export default function Card({item}) {
  const itemId = item.id
  return (
    <Link to= {`/calendar/${itemId}`}>
    <div className={styles.especialidad}>
    <img className={styles.imgEsp} src="https://www.svgrepo.com/show/429791/doctor-human.svg" alt="a" />
    <p className={styles.nomEsp}>{item.JobTitle}</p>
    
  </div></Link>
  );
}