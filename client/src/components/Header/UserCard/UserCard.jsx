import { Link } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

export default function UserCard() {
  const { logOut, isAuthenticated } = useAuthStore();

  return isAuthenticated ? (
    <div className="text-current flex gap-4">
      <Link to="/profile" className="underline hover:font-bold">
        <p>Perfil</p>
      </Link>
      <button onClick={logOut} className="underline hover:font-bold">
        Cerrar Sesion
      </button>
    </div>
  ) : (
    <Link to="/login" className="underline hover:font-bold">
      <div>
        <p>Iniciar Sesion</p>
      </div>
    </Link>
  );
}
