import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet} from "react-router-dom";
export default function ProtectecRoute() {
  const { user, isAutenticated } = useAuth();
  if (!isAutenticated) {
    return <Navigate to="/login" replace/>;
  }
  return <Outlet/>
}
