import styles from '../../tailwind.config';
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
    <div class = "mt-30 flex gap-200 items-center justify-center ">
      <div className={styles.ui}>
        <h1 class = "text-black text-6xl not-italic font-normal leading-normal">Hola, {userData.nombre ? userData.nombre : "usuario"}</h1>
        <button class = "w-375 h-105 rounded-xl bg-onahau-500 shadow-custom text-black text-4xl font-normal leading-normal font-inter hover:bg-onahau-600 hover:text-white hover:cursor-pointer" 
        onClick={() => haveData ? navigate("/jobs") : navigate("/formulary")}>Tomar Hora</button>
      </div>
      <aside>
        <img
          class ="w-500 h-750 shrink-0 rounded-20"
          alt='doc'
          src={image}
        />
      </aside>
    </div>
  );
}