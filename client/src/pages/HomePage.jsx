import styles from '../styles/homePage.module.css';
import image from '../assets/homeImg.webp'
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
export default function Home() {
  
  const navigate = useNavigate();
  const { userData, haveData, userHaveData } = useAuth();

  useEffect(() => {
      userHaveData();
    }, [haveData]);

  return (
    <div className={styles.container}>
      <div className={styles.ui}>
        <h1 className={styles.title}>Hola, {userData.nombre ? userData.nombre : "usuario"}</h1>
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