import { Navigate, Outlet} from "react-router-dom";
import useAuthStore from "./store/authStore";
export default function ProtectecRoute() {
  const {isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }
  return <Outlet/>
}
