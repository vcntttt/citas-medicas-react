import styles from '../styles/homePage.module.css';
import image from '../assets/docCosas.jpg'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.ui}>
        <h1 className={styles.title}>Hola, usuario</h1>
        <button className={styles.btn}>Tomar Hora</button>
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
