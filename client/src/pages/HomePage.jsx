import styles from '../styles/homePage.module.css';
import image from '../assets/docCosas.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Home() {
  
  const navigate = useNavigate();

  const [userData, setUserData] = useState(false);


  /*      <Link to ="/jobs" ><button className={styles.btn}>Tomar Hora</button></Link>*/
  return (
    <div className={styles.container}>
      <div className={styles.ui}>
        <h1 className={styles.title}>Hola, usuario</h1>
        <button className={styles.btn} onClick={() => userData ? navigate("/jobs") : navigate("/formulary")}>Tomar Hora</button>
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