import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet} from "react-router-dom";
export default function ProtectecRoute() {
  const {isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }
  return <Outlet/>
}
