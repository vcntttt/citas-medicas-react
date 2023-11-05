import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
export default function Especialidad({nombre}) {
  const {isAuthenticated, user} = useAuthStore();
  const navigate = useNavigate();
  return (
    <div 
    className="bg-onahau-500 p-2 rounded-sm text-black flex flex-col items-center py-4">
      <h1 className="text-current py-4 text-xl">{nombre}</h1>
      {isAuthenticated ? (
        <button onClick={() => (user?.nombre && user?.apellido) ? navigate(`/calendar/${nombre}`) : navigate("/formulary")}
        className="bg-slate-900 hover:bg-greencus-500 text-white px-2 py-1 rounded">
          Pedir Hora
        </button>
      ) : (
        <Link to="/drs">
          <button className="bg-slate-900 hover:bg-greencus-500 text-white px-2 py-1 rounded">
            Ver Doctores
          </button>
        </Link>
      )}
    </div>
  )
}