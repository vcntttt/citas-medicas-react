import styles from '../../tailwind.config';
import image from '../assets/homeImg.webp'
import {useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import useIfAuth from '../hooks/useIfAuth';
import DatesBoard from '../components/Home/DatesBoard';
import Btn from '../components/Home/Btn';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import DateForm from '../components/Home/DateForm';
import DrForm from '../components/Home/DrForm';
import capitalize from '../hooks/capitalizeHelper'; 

export default function Home() {
  const navigate = useNavigate();
  const { userData, userHasData, userDates, role} = useAuthStore();
  useIfAuth();

  const {isOpen: isOpenCita ,openModal: openModalCita,closeModal  : closeModalCita} = useModal();
  const {isOpen: isOpenDoctor ,openModal: openModalDoctor,closeModal  : closeModalDoctor} = useModal();

  return (
    <div className = "mt-2 flex gap-200 justify-center">
      <div className="text-center m-auto ml-auto mt-[200px] sm:m-auto sm:mt-[200px] md:mt-[200px]">
      <h1 className="text-black text-[30pt] not-italic font-normal leading-normal sm:text-[35pt] md:text-[40pt] lg:text-[55pt]">
    {
        role === "paciente"  || role === null ? 
        `Hola, ${userData?.nombre ? userData.nombre : "usuario"}` :
        `Bienvenido ${capitalize(role)}`
    }
</h1>
<div className='flex flex-col items-center'> 
        <button className = "w-[180px] h-[40px] rounded-xl mb-4 bg-onahau-500 shadow-custom text-black text-[15pt] font-normal leading-normal font-inter hover:bg-onahau-600 hover:text-white hover:cursor-pointer md:w-[200px] md:h[50px] md:text-[20pt] lg:w-[230px] lg:h-[60px] lg:text-[25pt]"
        onClick={() => userHasData ? navigate("/jobs") : navigate("/formulary")}>Tomar Hora</button>
      {role === "admin" && 
      <div className='flex gap-5 mt-3 justify-center'>
        <Btn onClick={openModalCita}>Ingresar Cita</Btn>
        <Modal isOpen={isOpenCita} onClose={closeModalCita}>
          <h1 className='text-black text-2xl py-2 mt-4 text-center'>Crear Cita</h1>
          <DateForm/>
        </Modal>
        <Btn onClick={openModalDoctor}>Ingresar Doctor</Btn>
        <Modal isOpen={isOpenDoctor} onClose={closeModalDoctor}>
          <h1 className='text-black text-2xl py-2 mt-4'>Agregar Doctor</h1>
          <DrForm/>
        </Modal>
      </div> 
      }
      {role === "doctor" && 
      <div className='flex gap-5 mt-3 justify-center'>
        <Btn onClick={openModalCita}>Ingresar Cita</Btn>
        <Modal isOpen={isOpenCita} onClose={closeModalCita}>
          <h1 className='text-black text-2xl py-2 mt-4'>Crear Cita</h1>
          <DateForm/>
        </Modal>
      </div> 
      }
</div>
      </div>
      <aside>
        {userDates && userData && userDates.length > 0
        ? <DatesBoard dates={userDates} /> 
        : <img
          className="w-[400px] h-[390px] m-auto mt-[140px] rounded-xl sm:w-[350px] sm:h-[500px] sm:mt-[80px] md:w-[400px] md:h-[580px] md:mt-[70px] lg:w-[550px] lg:h-[700px] lg:mt-[30px]"
          alt='doc'
          src={image}
        /> }
      </aside>
    </div>
  );
}