import { Link } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

export default function UserCard() {
  const { logOut, isAuthenticated } = useAuthStore();

  return isAuthenticated ? (
    <div className="text-current flex gap-4">
      <Link to="/profile" className="underline">
        <p>Perfil</p>
      </Link>
      <button onClick={logOut} className="underline">
        Cerrar Sesion
      </button>
    </div>
  ) : (
    <Link to="/login" className=""id="">
      <div>
        <p>Iniciar Sesion</p>
      </div>
    </Link>
  );
}
