import styles from '../../tailwind.config';
import image from '../assets/homeImg.webp'
import {useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import useIfAuth from '../hooks/useIfAuth';
import DatesBoard from '../components/Home/DatesBoard';
export default function Home() {
  
  const navigate = useNavigate();
  const { userData, userHasData, userDates} = useAuthStore();
  useIfAuth();
  return (
    <div className = "mt-30 flex gap-200 items-center justify-center ">
      <div className={styles.ui}>
        <h1 className = "text-black text-6xl not-italic font-normal leading-normal">Hola, {userData?.nombre ? userData.nombre : "usuario"}</h1>
        <button className = "w-375 h-105 rounded-xl bg-onahau-500 shadow-custom text-black text-4xl font-normal leading-normal font-inter hover:bg-onahau-600 hover:text-white hover:cursor-pointer" 
        onClick={() => userHasData ? navigate("/jobs") : navigate("/formulary")}>Tomar Hora</button>
      </div>
      <aside>
        {userDates && userData 
        ? <DatesBoard dates={userDates} /> 
        : <img
          className="w-[500px] object-cover"
          alt='doc'
          src={image}
        /> }

      </aside>
    </div>
  );
}