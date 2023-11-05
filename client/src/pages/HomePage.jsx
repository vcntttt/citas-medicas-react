import image from "../assets/homeImg.webp";
// import horizontalImg from '../assets/smHomeImg.avif'
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import useIfAuth from "../hooks/useIfAuth";
import DatesBoard from "../components/Home/DatesBoard";
import Btn from "../components/Home/Btn";
import useModal from "../hooks/useModal";
import Modal from "../components/Modals/Modal";
import DateForm from "../components/Home/DateForm";
import DrForm from "../components/Home/DrForm";
import capitalize from "../hooks/capitalizeHelper";

export default function Home() {
  const navigate = useNavigate();
  const { user, userDates, role } = useAuthStore();
  useIfAuth();
  const {
    isOpen: isOpenCita,
    openModal: openModalCita,
    closeModal: closeModalCita,
  } = useModal();

  const {
    isOpen: isOpenDoctor,
    openModal: openModalDoctor,
    closeModal: closeModalDoctor,
  } = useModal();
  return (
    <div className="lg:mx-20 md:mx-5 md:items-center grid md:grid-cols-2 grid-cols-1 grid-rows-none justify-center h-[92vh]">
      <section className="flex flex-col items-center my-auto">
        <h1 className="text-black text-center text-[30pt] sm:text-[35pt] md:text-[40pt] lg:text-[55pt]">
          {role === "paciente" || role === null
            ? `Hola, ${user?.nombre ? user.nombre : "usuario"}`
            : `Bienvenido ${capitalize(role)}`}
        </h1>
        {/* buttons container */}
        <div className="flex flex-col items-center justify-center gap-2">
          <Btn styles={`lg:text-3xl md:text-2xl text-xl`}
            onClick={() =>
              (user?.nombre && user?.apellido) ? navigate("/jobs") : navigate("/formulary")
            }
          >
            Tomar Hora
          </Btn>
          {role === "admin" && (
            <div className="flex md:flex-row flex-col gap-5 mt-3 justify-center">
              <Btn styles={`lg:text-3xl md:text-2xl text-xl`} onClick={openModalCita}>Ingresar Cita</Btn>
              <Btn styles={`lg:text-3xl md:text-2xl text-xl`} onClick={openModalDoctor}>Ingresar Doctor</Btn>
            </div>
          )}
          {role === "doctor" && (
              <Btn onClick={openModalCita}>Ingresar Cita</Btn>
          )}
        </div>
      <div>
      <Modal
          isOpen={isOpenCita}
          onClose={closeModalCita}
          bgColor="[#2E3238]"
        >
          <h1 className="text-white text-2xl py-2 mt-4 text-center">
            Crear Cita
          </h1>
          <DateForm />
        </Modal>
        <Modal
          isOpen={isOpenDoctor}
          onClose={closeModalDoctor}
          bgColor="[#2E3238]"
        >
          <h1 className="text-white text-2xl py-2 mt-4">
            Crear Cita
          </h1>
          <DrForm />
        </Modal>
      </div>
      </section>
      <aside className="flex justify-center md:items-center items-start">
        {user && userDates.length > 0 ? 
        (
          <DatesBoard dates={userDates} 
          className={`
            w-full h-full
            md:h-[650px] md:min-w-[300px]
            lg:h-[800px] lg:min-w-[400px] lg:max-w-[500px]`} />
        ) : 
        (
          <div className="md:mx-0 mx-10">
            <img
              className="object-cover w-auto lg:h-[800px] rounded-lg md:flex hidden"
              alt="doc"
              src={image}
            />
            {/* <img
              className="md:hidden flex"
              src={horizontalImg}
              alt="docMobile"
            /> */}
          </div>
        )}
      </aside>
    </div>
  );
}