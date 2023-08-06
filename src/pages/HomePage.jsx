import styles from '../styles/homePage.module.css';
import image from '../assets/docCosas.jpg'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.ui}>
        <h1 className={styles.title}>Hola, usuario</h1>
        <Link to ="/jobs"><button className={styles.btn}>Tomar Hora</button></Link>
      </div>
      <aside>
        <img
          className={styles.image}
          alt='doc'
          src={image}
          width={500}
          height={750}
        />
      </aside>
    </div>
  );
}
