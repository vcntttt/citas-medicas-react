import useAuthStore from "../../store/authStore";
import Btn from "../../components/Home/Btn";
import DatesBoard from "../../components/Home/DatesBoard";

export default function ProfilePage() {
  const { user, role, userDates } = useAuthStore();

  return (
    <div className="grid md:grid-cols-2 min-h-[90vh] gap-4 p-4">
        <DatesBoard dates={userDates} className="col-span-1"/>
      <div className="bg-gray-800 rounded-lg p-4">
      <h1 className="text-white text-xl mb-4">¡Hola, {role}!</h1>
        <div className="bg-white p-4 rounded-[10px] mb-4">
          <p className="text-black text-xl font-bold mb-4">Datos personales</p>
          <div className="flex justify-between items-center mb-2">
            <p className="text-black">Nombre:</p>
            <p className="text-gray-700">{user.nombre}</p>
            <Btn>Modificar</Btn>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-black">Apellido:</p>
            <p className="text-gray-700">{user.apellido}</p>
            <Btn>Modificar</Btn>
          </div>
        {role ==='doctor' && (
          <div className="flex justify-between items-center mb-2">
          <p className="text-black">Especialidad:</p>
          <p className="text-gray-700">{user.especialidad}</p>
          <Btn>Modificar</Btn>
        </div>
        )  }
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-black text-xl font-bold mb-4">Datos de Contacto</p>
          <p className="text-2xl py-6"> Proximamente....</p>
        </div>
      </div>
    </div>
  )
}
