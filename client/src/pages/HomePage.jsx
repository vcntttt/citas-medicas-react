import styles from '../styles/homePage.module.css';
import image from '../assets/docCosas.jpg'
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Home() {
  
  const navigate = useNavigate();
  const { userData, haveData } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.ui}>
        <h1 className={styles.title}>Hola, {userData.nombre}</h1>
        <button className={styles.btn} onClick={() => haveData ? navigate("/jobs") : navigate("/formulary")}>Tomar Hora</button>
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