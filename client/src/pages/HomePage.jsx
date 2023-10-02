import styles from '../styles/homePage.module.css';
import image from '../assets/homeImg.webp'
import {useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthStore from '../store/authStore';
export default function Home() {
  
  const navigate = useNavigate();
  const { userData, checkData, userHasData } = useAuthStore();
  useEffect(() => {
      checkData();
    }, []);
  return (
    <div className={styles.container}>
      <div className={styles.ui}>
        <h1 className={styles.title}>Hola, {userData?.nombre ? userData.nombre : "usuario"}</h1>
        <button className={styles.btn} onClick={() => userHasData ? navigate("/jobs") : navigate("/formulary")}>Tomar Hora</button>
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